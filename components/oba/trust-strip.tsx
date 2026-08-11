import { ShieldCheck, BadgeCheck, UserCheck, RefreshCw } from "lucide-react"

const items = [
  { icon: ShieldCheck, label: "Independently tested" },
  { icon: BadgeCheck, label: "No paid placements" },
  { icon: UserCheck, label: "Analyst reviewed" },
  { icon: RefreshCw, label: "Updated monthly" },
]

export function TrustStrip() {
  return (
    <section id="trust" className="bg-[var(--oba-ink)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="size-5 shrink-0 text-[var(--oba-gold)]" aria-hidden="true" />
            <span className="text-sm font-medium text-[var(--oba-paper)]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
