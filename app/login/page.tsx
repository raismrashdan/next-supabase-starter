import { sendMagicLink } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <section className="container py-16 max-w-md">
      <h1 className="text-3xl font-semibold mb-4">Sign in</h1>
      <p className="text-sm text-muted-foreground mb-6">Enter your email to receive a sign‑in link.</p>
      <form action={sendMagicLink} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <Button type="submit">Email me a link</Button>
      </form>
    </section>
  )
}
