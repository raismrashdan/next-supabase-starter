import Link from "next/link"
import { getUser } from "@/lib/auth"
import { signOut } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"

export async function SiteHeader() {
  const user = await getUser()

  return (
    <header className="border-b">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold flex items-center gap-2">
          <img src="/logo.svg" alt="" className="h-5 w-5" />
          <span>Starter</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link href="/pricing">Pricing</Link>
          {user ? (
            <div className="flex items-center gap-2">
              <Link className="underline" href="/app/dashboard">App</Link>
              <form action={signOut}><Button variant="secondary" size="sm">Sign out</Button></form>
            </div>
          ) : (
            <Button asChild size="sm"><Link href="/login">Log in</Link></Button>
          )}
        </nav>
      </div>
    </header>
  )
}
