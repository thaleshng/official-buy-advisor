import { cn } from "@/lib/utils"

export function SealMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <circle cx="24" cy="24" r="22" fill="none" stroke="var(--oba-ink)" strokeWidth="1.5" />
      <circle
        cx="24"
        cy="24"
        r="17.5"
        fill="none"
        stroke="var(--oba-gold)"
        strokeWidth="1.5"
        strokeDasharray="2.2 3.4"
      />
      <path
        d="M15.5 24.5l5.5 5.5L33 17.5"
        fill="none"
        stroke="var(--oba-ink)"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
