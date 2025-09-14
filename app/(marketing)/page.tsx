import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/marketing"

export default function Page() {
  return (
    <Section as="section" pad="lg" width="default" className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">One starter, many MVPs</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
        Product‑agnostic Next.js + Supabase template. Swap palette. Iterate fast.
      </p>
      <div className="flex items-center justify-center gap-3 mt-6">
        <Button asChild size="lg"><Link href="/waitlist">Join waitlist</Link></Button>
        <Button asChild size="lg" variant="secondary"><Link href="/pricing">See pricing</Link></Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
        {["SSR + RSC", "Supabase Auth + DB", "Theming with CSS vars"].map((k) => (
          <div key={k} className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">{k}</h3>
            <p className="text-sm text-muted-foreground">Accessible, responsive, minimal client JS.</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
