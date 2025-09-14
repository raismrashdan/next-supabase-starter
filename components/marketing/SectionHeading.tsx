import * as React from "react"

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, center }: Props) {
  return (
    <header className={center ? "text-center" : ""}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base md:text-lg text-muted-foreground">{subtitle}</p>
      ) : null}
    </header>
  )
}

