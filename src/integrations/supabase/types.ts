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
      articles: {
        Row: {
          author_id: string | null
          author_name: string | null
          category_name: string | null
          content: string | null
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: number
          read_time: string | null
          slug: string | null
          status: string | null
          subCategory_name: string | null
          title: string | null
          view_count: number | null
        }
        Insert: {
          author_id?: string | null
          author_name?: string | null
          category_name?: string | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: number
          read_time?: string | null
          slug?: string | null
          status?: string | null
          subCategory_name?: string | null
          title?: string | null
          view_count?: number | null
        }
        Update: {
          author_id?: string | null
          author_name?: string | null
          category_name?: string | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: number
          read_time?: string | null
          slug?: string | null
          status?: string | null
          subCategory_name?: string | null
          title?: string | null
          view_count?: number | null
        }
        Relationships: []
      }
      asindatabase: {
        Row: {
          ASIN: string | null
          Category: string | null
          id: string
          Notes: string | null
          "Price (USD)": string | null
          Product: string | null
        }
        Insert: {
          ASIN?: string | null
          Category?: string | null
          id?: string
          Notes?: string | null
          "Price (USD)"?: string | null
          Product?: string | null
        }
        Update: {
          ASIN?: string | null
          Category?: string | null
          id?: string
          Notes?: string | null
          "Price (USD)"?: string | null
          Product?: string | null
        }
        Relationships: []
      }
      topic_history: {
        Row: {
          articles_found: number | null
          content_type: string | null
          created_at: string | null
          id: string
          newest_article_age_days: number | null
          published: boolean | null
          search_date: string | null
          skip_reason: string | null
          topic: string | null
          topic_id: string | null
          workflow_run_id: string | null
        }
        Insert: {
          articles_found?: number | null
          content_type?: string | null
          created_at?: string | null
          id?: string
          newest_article_age_days?: number | null
          published?: boolean | null
          search_date?: string | null
          skip_reason?: string | null
          topic?: string | null
          topic_id?: string | null
          workflow_run_id?: string | null
        }
        Update: {
          articles_found?: number | null
          content_type?: string | null
          created_at?: string | null
          id?: string
          newest_article_age_days?: number | null
          published?: boolean | null
          search_date?: string | null
          skip_reason?: string | null
          topic?: string | null
          topic_id?: string | null
          workflow_run_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "topic_history_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topic_performance"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topic_history_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topic_pool"
            referencedColumns: ["id"]
          },
        ]
      }
      topic_pool: {
        Row: {
          category: string
          consecutive_failures: number | null
          created_at: string | null
          id: string
          is_active: boolean | null
          last_check: string | null
          last_successful_use: string | null
          notes: string | null
          search_volume: number | null
          source: string | null
          subcategory: string | null
          temperature: string | null
          topic: string
          trend_score: number | null
          updated_at: string | null
        }
        Insert: {
          category: string
          consecutive_failures?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_check?: string | null
          last_successful_use?: string | null
          notes?: string | null
          search_volume?: number | null
          source?: string | null
          subcategory?: string | null
          temperature?: string | null
          topic: string
          trend_score?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          consecutive_failures?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_check?: string | null
          last_successful_use?: string | null
          notes?: string | null
          search_volume?: number | null
          source?: string | null
          subcategory?: string | null
          temperature?: string | null
          topic?: string
          trend_score?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      topic_performance: {
        Row: {
          avg_articles_found: number | null
          category: string | null
          consecutive_failures: number | null
          id: string | null
          last_used: string | null
          status: string | null
          successful_publishes: number | null
          temperature: string | null
          topic: string | null
          total_uses: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      increment_article_views: {
        Args: { article_slug: string }
        Returns: undefined
      }
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
