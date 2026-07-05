"use server";

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with the service role key to bypass RLS for secure server-side inserts
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

let supabase: ReturnType<typeof createClient<any, "public", any>> | null = null;
if (supabaseUrl && supabaseServiceKey) {
  supabase = createClient<any, "public", any>(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

export async function submitNextChapterSubscription(email: string) {
  if (!supabase) {
    console.error("Supabase environment variables are missing.");
    return { success: false, message: "Database connection not configured." };
  }

  try {
    const { error } = await supabase
      .from("next_chapter_subscribers")
      .insert([
        {
          email: email.trim().toLowerCase(),
        },
      ]);

    if (error) {
      if (error.code === '23505') {
        // Unique constraint violation
        return { success: false, message: "You are already subscribed!" };
      }
      console.error("Supabase insert error (subscription):", error);
      return { success: false, message: "Failed to subscribe. Please try again later." };
    }

    return { success: true, message: "Access unlocked successfully." };
  } catch (err) {
    console.error("Unexpected error submitting subscription:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
