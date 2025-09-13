import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tiers = [
  { name: "Starter", price: "$0", features: ["Basic features", "Email support"] },
  { name: "Pro", price: "$19/mo", features: ["Everything in Starter", "Advanced features"] },
  { name: "Team", price: "$49/mo", features: ["All Pro features", "Team seats"] },
]

export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <Card key={t.name} className="p-6 flex flex-col">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="text-3xl font-bold mt-2">{t.price}</p>
            <ul className="text-sm text-muted-foreground mt-4 space-y-1">
              {t.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <Button className="mt-auto">Choose {t.name}</Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
