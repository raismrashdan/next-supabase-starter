import { redirect } from "next/navigation"
import { createServerSupabase } from "@/lib/supabase/server"

export async function getUser() {
  try {
    const supabase = createServerSupabase()
    const { data: { user } } = await supabase.auth.getUser()
    return user ?? null
  } catch {
    return null
  }
}

export async function requireUser() {
  const user = await getUser()
  if (!user) redirect("/login")
  return user
}
