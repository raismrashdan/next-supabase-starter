"use server"

import { Resend } from "resend"
import { render } from "@react-email/components"
import WelcomeEmail from "@/emails/welcome"

export async function sendWelcome(to: string) {
  const key = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM
  if (!key || !from) throw new Error("RESEND_API_KEY/EMAIL_FROM missing")
  const resend = new Resend(key)
  const html = render(WelcomeEmail({ to }))
  await resend.emails.send({ from, to, subject: "Welcome", html })
}
