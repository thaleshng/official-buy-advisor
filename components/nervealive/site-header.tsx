const navItems = [
  { label: "FREE Bonuses", href: "#bonuses", strong: "FREE" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4"
      >
        <a href="#top" className="shrink-0 leading-[0.95]">
          <span
            className="block font-[family-name:var(--font-montserrat)] font-bold"
            style={{ fontSize: "40px", color: "var(--na-blue)" }}
          >
            <span className="block">Nerve</span>
            <span className="block">Alive</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-[family-name:var(--font-poppins)] transition-opacity hover:opacity-70"
                style={{ fontSize: "20px", color: "var(--na-blue)" }}
              >
                {item.strong ? (
                  <>
                    <span className="font-bold">{item.strong}</span>{" "}
                    {item.label.replace(`${item.strong} `, "")}
                  </>
                ) : (
                  item.label
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#buy"
          className="rounded-md px-6 py-3 font-[family-name:var(--font-poppins)] font-bold uppercase tracking-wide transition-opacity hover:opacity-90"
          style={{
            fontSize: "22px",
            color: "var(--na-white)",
            background: "var(--na-btn-grad)",
          }}
        >
          Order Now
        </a>
      </nav>
    </header>
  )
}
