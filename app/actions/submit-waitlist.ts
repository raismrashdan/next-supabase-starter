"use server"

import { z } from "zod"
import { createServerSupabase } from "@/lib/supabase/server"
import { sendWelcome } from "@/app/actions/send-welcome"

const Schema = z.object({ email: z.string().email() })

export async function submitWaitlist(_: unknown, formData: FormData) {
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
