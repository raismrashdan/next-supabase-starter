import { requireUser } from "@/lib/auth"

export default async function Page() {
  const user = await requireUser()
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground">Signed in as {user.email}</p>
      <div className="rounded-lg border p-6">Your content goes here.</div>
    </section>
  )
}
