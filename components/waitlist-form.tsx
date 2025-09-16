"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitWaitlist } from "@/app/actions/submit-waitlist"

const Schema = z.object({
  email: z.string().email(),
  honeypot: z.string().optional(), // Honeypot field
})
type Values = z.infer<typeof Schema>

export function WaitlistForm() {
  const [pending, start] = useTransition()
  const [msg, setMsg] = useState<string | null>(null)
  const { register, handleSubmit, reset } = useForm<Values>({ resolver: zodResolver(Schema) })

  return (
    <form
      className="flex w-full max-w-xl items-center gap-2"
      onSubmit={handleSubmit((values) => {
        const fd = new FormData()
        fd.set("email", values.email)
        fd.set("honeypot", values.honeypot || "")
        start(async () => {
          const r = await submitWaitlist(null, fd)
          setMsg(r.ok ? "Thanks — you’re on the list." : (r.error ?? "Error"))
          if (r.ok) reset()
        })
      })}
    >
      <Input placeholder="you@example.com" {...register("email")} />
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <Input type="text" tabIndex={-1} {...register("honeypot")} />
      </div>
      <Button type="submit" disabled={pending}>Join</Button>
      {msg && <span className="text-sm text-muted-foreground ml-2">{msg}</span>}
    </form>
  )
}
