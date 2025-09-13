import { WaitlistForm } from "@/components/waitlist-form"

export default function Page() {
  return (
    <section className="container py-16 space-y-6">
      <h1 className="text-3xl font-semibold">Waitlist</h1>
      <p className="text-muted-foreground">Join to receive updates when we launch.</p>
      <WaitlistForm />
    </section>
  )
}
