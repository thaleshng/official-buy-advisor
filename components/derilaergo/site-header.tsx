import { PaymentStrip } from "@/components/derilaergo/payment-strip"

const navItems = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  return (
    <header id="top" className="sticky top-0 z-50 bg-white">
      <PaymentStrip />

      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4"
      >
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center leading-none">
          <img
            src="/images/derilaergo/logo.svg"
            alt="Derila Ergo"
            width={123}
            height={24}
            className="h-6 w-auto"
          />
        </a>

        {/* Deliver to */}
        <div className="hidden items-center gap-2 lg:flex">
          <img
            src="/images/derilaergo/flag-us.svg"
            alt="United States flag"
            width={24}
            height={17}
            className="h-[17px] w-6 rounded-sm"
          />
          <div
            className="font-[family-name:var(--font-montserrat)] leading-tight"
            style={{ fontSize: "12px", color: "var(--de-ink)" }}
          >
            <span className="block">Deliver to</span>
            <a href="#top" className="block font-bold underline underline-offset-2">
              United States
            </a>
          </div>
        </div>

        {/* Nav */}
        <ul className="ml-auto hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-[family-name:var(--font-montserrat)] transition-opacity hover:opacity-70"
                style={{ fontSize: "16px", color: "var(--de-ink)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#buy"
          className="rounded-lg font-[family-name:var(--font-montserrat)] font-bold transition-opacity hover:opacity-80"
          style={{
            fontSize: "16px",
            padding: "8px 24px",
            color: "var(--de-ink)",
            border: "2px solid var(--de-ink)",
          }}
        >
          Order now!
        </a>
      </nav>
    </header>
  )
}
