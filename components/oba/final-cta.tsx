import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="bg-[var(--oba-paper-alt)]">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <h2 className="font-[family-name:var(--font-oba-serif)] text-4xl font-semibold tracking-tight text-[var(--oba-ink)] text-balance md:text-5xl">
          Ready to see what earned our top score?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-[var(--oba-slate)]">
          Read our full, unsponsored breakdown of VisiFlora before you buy.
        </p>
        <Button
          render={<Link href="/visiflora" />}
          nativeButton={false}
          size="lg"
          className="mt-8 rounded-md bg-[var(--oba-gold-strong)] px-8 font-semibold text-[var(--oba-ink)] hover:bg-[var(--oba-gold)]"
        >
          Read the VisiFlora Review
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
        <p className="mt-4 text-sm text-[var(--oba-slate)]">
          Independent review · No cost to you
        </p>
      </div>
    </section>
  )
}
