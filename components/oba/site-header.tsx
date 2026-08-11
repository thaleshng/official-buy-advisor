import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SealMark } from "@/components/oba/seal-mark"

const navItems = [
  { label: "How We Test", href: "#methodology" },
  { label: "Top Pick", href: "#editors-pick" },
  { label: "About Us", href: "#trust" },
]

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-center gap-2 bg-[var(--oba-ink)] py-2 text-xs font-medium tracking-wide text-[var(--oba-paper)]">
        <ShieldCheck className="size-3.5 text-[var(--oba-gold)]" aria-hidden="true" />
        <span>INDEPENDENT RESEARCH · NO PAID PLACEMENTS · UPDATED FOR 2026</span>
      </div>

      <header className="border-b border-[var(--oba-border)] bg-[var(--oba-paper)]/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4"
        >
          <a href="#top" className="flex items-center gap-2.5">
            <SealMark className="size-8" />
            <span className="font-[family-name:var(--font-oba-serif)] text-lg font-semibold tracking-tight text-[var(--oba-ink)]">
              Official Buy Advisor
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-[var(--oba-ink-soft)] transition-colors hover:text-[var(--oba-ink)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            render={<a href="#editors-pick" />}
            nativeButton={false}
            className="rounded-md bg-[var(--oba-ink)] px-5 font-medium text-[var(--oba-paper)] hover:bg-[var(--oba-ink-soft)]"
          >
            View Top Pick
          </Button>
        </nav>
      </header>
    </div>
  )
}
