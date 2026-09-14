// Matches the bundled example migration, not a connected database.
// Replace with generated types when connecting a real Supabase project.
export type Database = {
  public: {
    Tables: {
      example_notes: {
        Row: { id: string; title: string; created_at: string };
        Insert: { id?: string; title: string; created_at?: string };
        Update: { id?: string; title?: string; created_at?: string };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
