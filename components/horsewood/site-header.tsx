const OFFER_URL =
  "https://horsewood.us/funnelb3/v3/?aff_id=45034&subid2=13213_sessid2026100702362509&subid=4330"

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "FAQ", href: OFFER_URL },
  { label: "Contact Us", href: OFFER_URL },
]

export function SiteHeader() {
  return (
    <header className="relative z-10">
      <a
        href={OFFER_URL}
        className="flex min-h-9 flex-wrap items-center justify-center gap-x-2 bg-[linear-gradient(90deg,var(--color-primary-dark)_0%,var(--color-primary)_50%,var(--color-primary-dark)_100%)] px-3 py-2 text-center font-[family-name:var(--font-space-mono)] text-[12px] font-bold uppercase tracking-[0.08em] text-white"
      >
        <span>Claim your offer</span>
        <span className="rounded-full bg-black px-3 py-1 text-[var(--horsewood-orange)]">
          50% off
        </span>
        <span aria-hidden="true">✦</span>
        <span>Free USA shipping on 6 bottles</span>
      </a>

      <nav
        aria-label="Main navigation"
        className="flex min-h-14 items-center justify-between gap-4 bg-[rgba(10,10,10,0.85)] px-5 py-3 md:px-8"
      >
        <a href="#top" aria-label="Horsewood home" className="shrink-0">
          <img
            src="/images/horsewood/logo.png"
            alt="Horsewood"
            width={150}
            height={30}
            className="h-auto w-[120px] md:w-[150px]"
          />
        </a>

        <ul className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-[family-name:var(--font-space-mono)] text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:text-[var(--horsewood-orange)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={OFFER_URL}
          className="rounded-full bg-[#FF6B1A] px-6 py-2.5 font-[family-name:var(--font-space-mono)] text-[12px] font-bold uppercase tracking-[0.06em] text-black transition-opacity hover:opacity-85"
        >
          Buy now
        </a>
      </nav>
    </header>
  )
}
