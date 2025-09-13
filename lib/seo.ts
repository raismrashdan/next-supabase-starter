import type { Metadata } from "next"

export const defaultMetadata: Metadata = {
  title: { default: "MVP Starter", template: "%s | MVP Starter" },
  description: "A minimal, product-agnostic Next.js + Supabase starter.",
  openGraph: { title: "MVP Starter", description: "Next.js + Supabase starter." }
}
