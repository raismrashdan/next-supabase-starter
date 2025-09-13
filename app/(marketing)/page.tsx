import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <section className="container py-16 space-y-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">One starter, many MVPs</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Product‑agnostic Next.js + Supabase template. Swap palette. Iterate fast.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Button asChild size="lg"><Link href="/waitlist">Join waitlist</Link></Button>
        <Button asChild size="lg" variant="secondary"><Link href="/pricing">See pricing</Link></Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {["SSR + RSC", "Supabase Auth + DB", "Theming with CSS vars"].map((k) => (
          <div key={k} className="rounded-lg border p-6 text-left">
            <h3 className="font-semibold mb-2">{k}</h3>
            <p className="text-sm text-muted-foreground">Accessible, responsive, minimal client JS.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
