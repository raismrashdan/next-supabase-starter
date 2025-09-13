export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container h-14 flex items-center justify-between text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Starter</span>
        <a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">Powered by Vercel</a>
      </div>
    </footer>
  )
}
