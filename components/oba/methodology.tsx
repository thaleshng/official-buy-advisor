import { FlaskConical, ClipboardCheck, Users, Scale } from "lucide-react"

const criteria = [
  {
    icon: FlaskConical,
    title: "Ingredient Transparency",
    description:
      "We cross-check every listed ingredient and dosage against third-party lab panels before a product qualifies for review.",
  },
  {
    icon: ClipboardCheck,
    title: "Clinical Evidence",
    description:
      "Claims are weighed against published research, not marketing copy. Unsupported claims lower a product's score.",
  },
  {
    icon: Users,
    title: "Real Customer Data",
    description:
      "We aggregate verified purchase reviews and support tickets to surface patterns brands don't advertise.",
  },
  {
    icon: Scale,
    title: "Value for Money",
    description:
      "Price is measured against dose size, shipping policy, and return guarantees to score true cost per result.",
  },
]

export function Methodology() {
  return (
    <section id="methodology" className="bg-[var(--oba-paper)]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--oba-gold-ink)]">
          Our Process
        </p>
        <h2 className="mt-4 max-w-xl font-[family-name:var(--font-oba-serif)] text-4xl font-semibold tracking-tight text-[var(--oba-ink)] text-balance">
          How we rate every product
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {criteria.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-[var(--oba-border)] bg-[var(--oba-paper-alt)] p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-[var(--oba-gold)]/20">
                <Icon className="size-5 text-[var(--oba-gold-ink)]" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-oba-serif)] text-xl font-semibold text-[var(--oba-ink)]">
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-[var(--oba-slate)]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
