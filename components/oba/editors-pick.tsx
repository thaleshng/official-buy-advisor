import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "22-in-1 formula backed by third-party lab testing",
  "First formula to target the documented gut-eye connection",
  "94% of verified buyers reported improved comfort within 60 days",
]

export function EditorsPick() {
  return (
    <section id="editors-pick" className="bg-[var(--oba-paper-alt)]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--oba-gold-ink)]">
          This Month&apos;s Top Pick
        </p>
        <h2 className="mt-4 text-center font-[family-name:var(--font-oba-serif)] text-4xl font-semibold tracking-tight text-[var(--oba-ink)] text-balance">
          Vision Support, Reviewed
        </h2>

        <div className="mt-12 grid gap-10 rounded-3xl border border-[var(--oba-border)] bg-[var(--oba-paper)] p-8 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:p-12">
          <div className="flex items-center justify-center">
            <Image
              src="/images/visiflora-bottle.png"
              alt="VisiFlora supplement bottle surrounded by flowers, leaves, and an orange"
              width={340}
              height={400}
              className="h-auto w-full max-w-[260px] object-contain"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--oba-gold)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--oba-gold-ink)]">
                Editor&apos;s Choice — Vision Support
              </span>
              <span className="flex items-center gap-1" aria-label="Rated 4.8 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[var(--oba-gold-strong)] text-[var(--oba-gold-strong)]"
                    aria-hidden="true"
                  />
                ))}
              </span>
            </div>

            <h3 className="mt-4 font-[family-name:var(--font-oba-serif)] text-3xl font-semibold text-[var(--oba-ink)]">
              VisiFlora
            </h3>
            <p className="mt-2 text-[var(--oba-slate)]">
              Precision vision support that starts in the gut.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--oba-ink-soft)]">
                  <BadgeCheck
                    className="mt-0.5 size-5 shrink-0 text-[var(--oba-gold-strong)]"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                render={<Link href="/visiflora" />}
                nativeButton={false}
                size="lg"
                className="rounded-md bg-[var(--oba-ink)] px-7 font-semibold text-[var(--oba-paper)] hover:bg-[var(--oba-ink-soft)]"
              >
                Read Full VisiFlora Review
              </Button>
              <span className="text-sm text-[var(--oba-slate)]">
                Reviewed by our Health &amp; Wellness Research Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
