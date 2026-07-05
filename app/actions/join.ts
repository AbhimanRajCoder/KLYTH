"use server";

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with the service role key to bypass RLS for secure server-side inserts
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

let supabase: ReturnType<typeof createClient> | null = null;
if (supabaseUrl && supabaseServiceKey) {
  supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

export async function submitJoinApplication(data: {
  firstName: string;
  email: string;
  goal: string;
}) {
  if (!supabase) {
    console.error("Supabase environment variables are missing.");
    return { success: false, message: "Database connection not configured." };
  }

  try {
    const { error } = await supabase
      .from("join_applications")
      .insert([
        {
          first_name: data.firstName.trim(),
          email: data.email.trim().toLowerCase(),
          goal: data.goal.trim(),
        },
      ]);

    if (error) {
      if (error.code === '23505') {
        // Unique constraint violation
        return { success: false, message: "This email has already been registered." };
      }
      console.error("Supabase insert error:", error);
      return { success: false, message: "Failed to submit application. Please try again later." };
    }

    return { success: true, message: "Application submitted successfully." };
  } catch (err) {
    console.error("Unexpected error submitting application:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
