import Link from "next/link"
import { SealMark } from "@/components/oba/seal-mark"

const columns = [
  {
    title: "Reviews",
    links: [
      { label: "Top Pick: VisiFlora", href: "/visiflora" },
      { label: "Our Methodology", href: "#methodology" },
      { label: "Trust Standards", href: "#trust" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#top" },
      { label: "How We Test", href: "#methodology" },
      { label: "Contact", href: "#top" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--oba-border)] bg-[var(--oba-paper)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <SealMark className="size-7" />
              <span className="font-[family-name:var(--font-oba-serif)] text-base font-semibold text-[var(--oba-ink)]">
                Official Buy Advisor
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--oba-slate)]">
              An independent research desk that tests, verifies, and ranks
              health and wellness products so readers can buy with
              confidence.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-[var(--oba-ink)]">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--oba-slate)] transition-colors hover:text-[var(--oba-ink)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[var(--oba-border)] pt-6">
          <p className="text-xs leading-relaxed text-[var(--oba-slate)]">
            Official Buy Advisor is an independent research publication. We
            may earn a commission from purchases made through links on this
            site, which does not influence our ratings or reviews.
          </p>
          <p className="mt-3 text-xs text-[var(--oba-slate)]">
            © 2026 Official Buy Advisor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
