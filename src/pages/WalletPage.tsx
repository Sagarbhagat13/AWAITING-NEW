import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Wallet, Plus, ArrowUpRight, ArrowDownLeft, IndianRupee, CreditCard, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface WalletTransaction {
  id: string;
  amount: number;
  transaction_type: 'credit' | 'debit';
  description: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
  reference_id: string | null;
}

interface UserProfile {
  wallet_balance: number;
}

const WalletPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [transactions, setTransactions] = useState<WalletTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [addMoneyAmount, setAddMoneyAmount] = useState('');
  const [addingMoney, setAddingMoney] = useState(false);
  const [showAddMoneyDialog, setShowAddMoneyDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
      return;
    }

    if (user) {
      fetchWalletData();
    }
  }, [user, authLoading, navigate]);

  const fetchWalletData = async () => {
    try {
      // Fetch profile with wallet balance
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('wallet_balance')
        .eq('id', user?.id)
        .single();

      if (profileError) {
        console.error('Error fetching profile:', profileError);
        toast.error('Failed to load wallet balance');
        return;
      }

      // Fetch transactions
      const { data: transactionsData, error: transactionsError } = await supabase
        .from('wallet_transactions')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(50);

      if (transactionsError) {
        console.error('Error fetching transactions:', transactionsError);
        toast.error('Failed to load transactions');
        return;
      }

      // Cast the data to ensure proper typing
      const typedTransactions = (transactionsData || []).map(transaction => ({
        ...transaction,
        transaction_type: transaction.transaction_type as 'credit' | 'debit',
        status: transaction.status as 'pending' | 'completed' | 'failed'
      }));

      setProfile(profileData);
      setTransactions(typedTransactions);
    } catch (error) {
      console.error('Wallet data fetch error:', error);
      toast.error('Failed to load wallet data');
    } finally {
      setLoading(false);
    }
  };

  const addMoney = async () => {
    const amount = parseFloat(addMoneyAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (amount < 10) {
      toast.error('Minimum amount is ₹10');
      return;
    }

    if (amount > 50000) {
      toast.error('Maximum amount is ₹50,000 per transaction');
      return;
    }

    setAddingMoney(true);
    try {
      const { error } = await supabase
        .from('wallet_transactions')
        .insert({
          user_id: user?.id,
          amount: amount,
          transaction_type: 'credit',
          description: `Added money to wallet`,
          status: 'completed'
        });

      if (error) {
        console.error('Add money error:', error);
        toast.error('Failed to add money');
        return;
      }

      toast.success(`₹${amount} added to your wallet successfully!`);
      setAddMoneyAmount('');
      setShowAddMoneyDialog(false);
      fetchWalletData(); // Refresh data
    } catch (error) {
      console.error('Add money error:', error);
      toast.error('Failed to add money');
    } finally {
      setAddingMoney(false);
    }
  };

  const getTransactionIcon = (type: string, status: string) => {
    if (status === 'pending') {
      return <Clock className="h-4 w-4 text-yellow-500" />;
    }
    
    return type === 'credit' ? (
      <ArrowDownLeft className="h-4 w-4 text-green-500" />
    ) : (
      <ArrowUpRight className="h-4 w-4 text-red-500" />
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filterTransactions = (type?: string) => {
    if (!type) return transactions;
    return transactions.filter(t => t.transaction_type === type);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tripvidya-light to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tripvidya-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-tripvidya-light to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-tripvidya-dark mb-2">My Wallet</h1>
            <p className="text-muted-foreground">Manage your wallet and view transaction history</p>
          </div>

          {/* Wallet Balance Card */}
          <Card className="bg-gradient-to-r from-tripvidya-primary to-tripvidya-primary/80 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <Wallet className="h-6 w-6 mr-2" />
                    <span className="text-lg font-medium">Total Balance</span>
                  </div>
                  <p className="text-4xl font-bold">₹{profile?.wallet_balance.toFixed(2) || '0.00'}</p>
                </div>
                <div className="text-right">
                  <Dialog open={showAddMoneyDialog} onOpenChange={setShowAddMoneyDialog}>
                    <DialogTrigger asChild>
                      <Button variant="secondary" className="mb-2">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Money
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Money to Wallet</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="amount">Amount (₹)</Label>
                          <Input
                            id="amount"
                            type="number"
                            placeholder="Enter amount"
                            value={addMoneyAmount}
                            onChange={(e) => setAddMoneyAmount(e.target.value)}
                            min="10"
                            max="50000"
                          />
                          <p className="text-xs text-muted-foreground">
                            Minimum: ₹10, Maximum: ₹50,000
                          </p>
                        </div>
                        <Button 
                          onClick={addMoney}
                          disabled={addingMoney}
                          className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
                        >
                          <CreditCard className="h-4 w-4 mr-2" />
                          {addingMoney ? 'Adding...' : 'Add Money'}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <p className="text-sm opacity-90">Available for bookings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <ArrowDownLeft className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <p className="text-2xl font-bold text-green-600">
                  ₹{filterTransactions('credit').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">Total Added</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <ArrowUpRight className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <p className="text-2xl font-bold text-red-600">
                  ₹{filterTransactions('debit').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">Total Spent</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <IndianRupee className="h-8 w-8 mx-auto mb-2 text-tripvidya-primary" />
                <p className="text-2xl font-bold text-tripvidya-dark">{transactions.length}</p>
                <p className="text-sm text-muted-foreground">Total Transactions</p>
              </CardContent>
            </Card>
          </div>

          {/* Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              {transactions.length === 0 ? (
                <div className="text-center py-8">
                  <Wallet className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-lg font-semibold mb-2">No transactions yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start by adding money to your wallet
                  </p>
                  <Button 
                    onClick={() => setShowAddMoneyDialog(true)}
                    className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Money
                  </Button>
                </div>
              ) : (
                <Tabs defaultValue="all" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All ({transactions.length})</TabsTrigger>
                    <TabsTrigger value="credit">Added ({filterTransactions('credit').length})</TabsTrigger>
                    <TabsTrigger value="debit">Spent ({filterTransactions('debit').length})</TabsTrigger>
                  </TabsList>

                  {['all', 'credit', 'debit'].map((tab) => (
                    <TabsContent key={tab} value={tab} className="space-y-2">
                      {(tab === 'all' ? transactions : filterTransactions(tab as 'credit' | 'debit')).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-3">
                            {getTransactionIcon(transaction.transaction_type, transaction.status)}
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(transaction.created_at).toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold ${transaction.transaction_type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                              {transaction.transaction_type === 'credit' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
                            </p>
                            <Badge className={getStatusColor(transaction.status)}>
                              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
