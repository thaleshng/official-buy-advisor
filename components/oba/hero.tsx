import { Button } from "@/components/ui/button"

const stats = [
  { value: "340+", label: "Products tested" },
  { value: "1,200+", label: "Research hours logged" },
  { value: "98%", label: "Reader trust score" },
]

export function Hero() {
  return (
    <section id="top" className="bg-[var(--oba-paper)]">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--oba-gold-ink)]">
            Trusted Buying Guides
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-oba-serif)] text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--oba-ink)] text-balance md:text-6xl">
            We test it. You trust it.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--oba-slate)] text-pretty">
            Official Buy Advisor is an independent research desk that verifies
            ingredient claims, clinical data, and real customer outcomes
            before we recommend a single product.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              render={<a href="#editors-pick" />}
              nativeButton={false}
              size="lg"
              className="rounded-md bg-[var(--oba-gold-strong)] px-7 font-semibold text-[var(--oba-ink)] hover:bg-[var(--oba-gold)]"
            >
              See This Month&apos;s Top Pick
            </Button>
            <Button
              render={<a href="#methodology" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-md border-[var(--oba-ink)] bg-transparent px-7 font-semibold text-[var(--oba-ink)] hover:bg-[var(--oba-paper-alt)]"
            >
              Our Methodology
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-[var(--oba-border)] pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-[family-name:var(--font-oba-serif)] text-3xl font-semibold text-[var(--oba-ink)]">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm leading-snug text-[var(--oba-slate)]">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative flex w-full max-w-xs flex-col items-center gap-4 rounded-2xl border border-[var(--oba-border)] bg-[var(--oba-paper-alt)] px-8 py-10 text-center shadow-[0_1px_0_0_var(--oba-border)]">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--oba-gold-ink)]">
              Verified Pick
            </span>
            <div className="flex size-32 items-center justify-center rounded-full border-2 border-[var(--oba-gold)]">
              <span className="font-[family-name:var(--font-oba-serif)] text-4xl font-semibold text-[var(--oba-ink)]">
                9.6
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--oba-slate)]">
              Average editor score across our top-rated eye health formula
              this month
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
