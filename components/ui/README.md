# UI house style

- Use shadcn/ui primitives for interactive elements (Button, Card, Input, Dialog, etc.).
- Convert third-party JSX (e.g., 21st.dev) to shadcn primitives where possible.
- Never introduce arbitrary hex colours or raw Tailwind brand palettes like `bg-blue-500`.
- Use our tokenised Tailwind classes that reference HSL CSS variables:
  - e.g., `bg-primary`, `text-muted-foreground`, `border`, `bg-card`, etc.
- Provide `dark:` variants if contrast may drop in dark mode.
- Keep headings hierarchical and interactive controls focusable for accessibility.

