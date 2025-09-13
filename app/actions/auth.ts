"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { createServerSupabase } from "@/lib/supabase/server"

export async function sendMagicLink(_: unknown, formData: FormData) {
  const email = String(formData.get("email") || "")
  if (!email || !email.includes("@")) return { ok: false, error: "Invalid email" }

  const supabase = createServerSupabase()
  const origin = headers().get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? ""
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${origin}/auth/callback` },
  })
  if (error) return { ok: false, error: "Could not send link" }
  return { ok: true }
}

export async function signOut() {
  const supabase = createServerSupabase()
  await supabase.auth.signOut()
  redirect("/")
}
