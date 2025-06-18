
-- Create user_trips table for trip bookings
CREATE TABLE public.user_trips (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  trip_name TEXT NOT NULL,
  destination TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  booking_status TEXT NOT NULL DEFAULT 'pending' CHECK (booking_status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  booking_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  trip_type TEXT DEFAULT 'package',
  participants INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create wallet_transactions table
CREATE TABLE public.wallet_transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  transaction_type TEXT NOT NULL CHECK (transaction_type IN ('credit', 'debit')),
  description TEXT NOT NULL,
  reference_id UUID,
  status TEXT NOT NULL DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add wallet_balance column to profiles table
ALTER TABLE public.profiles ADD COLUMN wallet_balance DECIMAL(10,2) NOT NULL DEFAULT 0.00;

-- Enable RLS on new tables
ALTER TABLE public.user_trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallet_transactions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_trips
CREATE POLICY "Users can view their own trips" 
  ON public.user_trips 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own trips" 
  ON public.user_trips 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own trips" 
  ON public.user_trips 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create RLS policies for wallet_transactions
CREATE POLICY "Users can view their own transactions" 
  ON public.wallet_transactions 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own transactions" 
  ON public.wallet_transactions 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX idx_user_trips_user_id ON public.user_trips(user_id);
CREATE INDEX idx_user_trips_booking_date ON public.user_trips(booking_date DESC);
CREATE INDEX idx_wallet_transactions_user_id ON public.wallet_transactions(user_id);
CREATE INDEX idx_wallet_transactions_created_at ON public.wallet_transactions(created_at DESC);

-- Create trigger to update wallet balance automatically
CREATE OR REPLACE FUNCTION update_wallet_balance()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.transaction_type = 'credit' THEN
    UPDATE public.profiles 
    SET wallet_balance = wallet_balance + NEW.amount 
    WHERE id = NEW.user_id;
  ELSIF NEW.transaction_type = 'debit' THEN
    UPDATE public.profiles 
    SET wallet_balance = wallet_balance - NEW.amount 
    WHERE id = NEW.user_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_wallet_balance
  AFTER INSERT ON public.wallet_transactions
  FOR EACH ROW
  EXECUTE FUNCTION update_wallet_balance();

-- Update the existing handle_new_user function to include phone number
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, phone_number, auth_provider, social_profiles)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(
      NEW.raw_user_meta_data ->> 'full_name',
      NEW.raw_user_meta_data ->> 'name',
      CONCAT(NEW.raw_user_meta_data ->> 'first_name', ' ', NEW.raw_user_meta_data ->> 'last_name')
    ),
    NEW.phone,
    COALESCE(NEW.raw_app_meta_data ->> 'provider', 'phone'),
    COALESCE(NEW.raw_user_meta_data, '{}')
  );
  RETURN NEW;
END;
$$;
