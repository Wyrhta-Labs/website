import type { SVGProps } from "react"

/**
 * Wyrhta Labs mark — a stylized rune-like W with a hearth flame,
 * referencing Old English "wyrhta" (wright/maker) and "heorth" (hearth).
 */
export function WyrhtaMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Rune-like W base */}
      <path d="M5 8 L9 24 L13 14 L16 22 L19 14 L23 24 L27 8" />
      {/* Hearth/flame above the center */}
      <path
        d="M16 6.5 C 16 5 14.6 4.2 14.6 3 C 14.6 2 15.2 1.4 16 1.4 C 16.8 1.4 17.4 2 17.4 3 C 17.4 4.2 16 5 16 6.5 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.9"
      />
    </svg>
  )
}
