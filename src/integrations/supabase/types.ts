export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image: string
          link: string
          slug: string | null
          subtitle: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image: string
          link: string
          slug?: string | null
          subtitle: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image?: string
          link?: string
          slug?: string | null
          subtitle?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      payment_transactions: {
        Row: {
          amount: number
          callback_url: string | null
          completed_at: string | null
          created_at: string
          currency: string
          id: string
          merchant_transaction_id: string
          payment_method: string | null
          payment_status: string
          phonepe_response: Json | null
          phonepe_transaction_id: string | null
          redirect_url: string | null
          trip_booking_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          callback_url?: string | null
          completed_at?: string | null
          created_at?: string
          currency?: string
          id?: string
          merchant_transaction_id: string
          payment_method?: string | null
          payment_status?: string
          phonepe_response?: Json | null
          phonepe_transaction_id?: string | null
          redirect_url?: string | null
          trip_booking_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          callback_url?: string | null
          completed_at?: string | null
          created_at?: string
          currency?: string
          id?: string
          merchant_transaction_id?: string
          payment_method?: string | null
          payment_status?: string
          phonepe_response?: Json | null
          phonepe_transaction_id?: string | null
          redirect_url?: string | null
          trip_booking_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_transactions_trip_booking_id_fkey"
            columns: ["trip_booking_id"]
            isOneToOne: false
            referencedRelation: "user_trips"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          auth_provider: string | null
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone_number: string | null
          phone_verified: boolean | null
          social_profiles: Json | null
          updated_at: string
          wallet_balance: number
        }
        Insert: {
          auth_provider?: string | null
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          phone_number?: string | null
          phone_verified?: boolean | null
          social_profiles?: Json | null
          updated_at?: string
          wallet_balance?: number
        }
        Update: {
          auth_provider?: string | null
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone_number?: string | null
          phone_verified?: boolean | null
          social_profiles?: Json | null
          updated_at?: string
          wallet_balance?: number
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          id: string
          image: string
          location: string
          name: string
          rating: number
          text: string
          trip_name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          image: string
          location: string
          name: string
          rating: number
          text: string
          trip_name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string
          location?: string
          name?: string
          rating?: number
          text?: string
          trip_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      trips: {
        Row: {
          biking_package: boolean | null
          created_at: string
          discount: number | null
          duration: string
          family_special: boolean | null
          honeymoon_special: boolean | null
          id: string
          image: string
          international: boolean | null
          location: string
          long_weekend: boolean | null
          offbeat: boolean | null
          price: number
          rating: number | null
          reviews: number | null
          state_highlight: boolean | null
          suv_package: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          biking_package?: boolean | null
          created_at?: string
          discount?: number | null
          duration: string
          family_special?: boolean | null
          honeymoon_special?: boolean | null
          id: string
          image: string
          international?: boolean | null
          location: string
          long_weekend?: boolean | null
          offbeat?: boolean | null
          price: number
          rating?: number | null
          reviews?: number | null
          state_highlight?: boolean | null
          suv_package?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          biking_package?: boolean | null
          created_at?: string
          discount?: number | null
          duration?: string
          family_special?: boolean | null
          honeymoon_special?: boolean | null
          id?: string
          image?: string
          international?: boolean | null
          location?: string
          long_weekend?: boolean | null
          offbeat?: boolean | null
          price?: number
          rating?: number | null
          reviews?: number | null
          state_highlight?: boolean | null
          suv_package?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_trips: {
        Row: {
          booking_date: string
          booking_status: string
          created_at: string
          destination: string
          end_date: string
          id: string
          participants: number | null
          start_date: string
          total_amount: number
          trip_name: string
          trip_type: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          booking_date?: string
          booking_status?: string
          created_at?: string
          destination: string
          end_date: string
          id?: string
          participants?: number | null
          start_date: string
          total_amount: number
          trip_name: string
          trip_type?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          booking_date?: string
          booking_status?: string
          created_at?: string
          destination?: string
          end_date?: string
          id?: string
          participants?: number | null
          start_date?: string
          total_amount?: number
          trip_name?: string
          trip_type?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wallet_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string
          id: string
          reference_id: string | null
          status: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          description: string
          id?: string
          reference_id?: string | null
          status?: string
          transaction_type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string
          id?: string
          reference_id?: string | null
          status?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const