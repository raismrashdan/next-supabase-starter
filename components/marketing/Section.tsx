import * as React from "react"

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof HTMLElementTagNameMap
  width?: "narrow" | "default" | "wide" | "full"
  pad?: "none" | "sm" | "md" | "lg"
}

const widthMap = {
  narrow: "max-w-2xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
  full: "max-w-none",
} as const

const padMap = {
  none: "",
  sm: "py-6 md:py-8",
  md: "py-10 md:py-14",
  lg: "py-16 md:py-24",
} as const

/** Layout wrapper to standardise spacing/max-width for 21st.dev blocks.
 *  Use tokenised colours only (e.g., bg-primary, text-muted-foreground).
 */
export function Section({
  as: Tag = "section",
  width = "default",
  pad = "md",
  className = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={[
        padMap[pad],
        "px-4 md:px-6",
        "w-full",
        className,
      ].join(" ")}
      {...rest}
    >
      <div className={["mx-auto", widthMap[width]].join(" ")}>{children}</div>
    </Tag>
  )
}
