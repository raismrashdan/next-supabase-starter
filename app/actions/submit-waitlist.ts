"use server"

import { z } from "zod"
import { createServerSupabase } from "@/lib/supabase/server"
import { sendWelcome } from "@/app/actions/send-welcome"

// Recommended: Use Vercel Edge Config for rate limiting
// See: https://vercel.com/docs/storage/edge-config

const Schema = z.object({
  email: z.string().email(),
  honeypot: z.string().optional(), // Honeypot field
})

export async function submitWaitlist(_: unknown, formData: FormData) {
  // Honeypot check
  if (formData.get("honeypot")) {
    return { ok: true }; // Silently fail for bots
  }

  const parsed = Schema.safeParse({ email: formData.get("email") })
  if (!parsed.success) return { ok: false, error: "Invalid email" }

  const supabase = createServerSupabase()
  const { error } = await supabase.from("waitlist").insert({ email: parsed.data.email })
  if (error) {
    if (error.code === "23505") return { ok: true } // unique violation: already on list
    return { ok: false, error: "Could not save" }
  }

  try { await sendWelcome(parsed.data.email) } catch {}
  return { ok: true }
}
