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

export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) {
  if (!supabase) {
    console.error("Supabase environment variables are missing.");
    return { success: false, message: "Database connection not configured." };
  }

  try {
    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          first_name: data.firstName.trim(),
          last_name: data.lastName.trim() || null,
          email: data.email.trim().toLowerCase(),
          phone: data.phone.trim() || null,
          message: data.message.trim(),
        },
      ]);

    if (error) {
      console.error("Supabase insert error (contact form):", error);
      return { success: false, message: "Failed to send message. Please try again later." };
    }

    return { success: true, message: "Message sent successfully." };
  } catch (err) {
    console.error("Unexpected error submitting contact form:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
