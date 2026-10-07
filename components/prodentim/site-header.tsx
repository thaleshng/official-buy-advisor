const OFFER_URL =
  "https://prodentim101.com/text.php?hopId=a3f1a2cf-809e-4461-a88b-6aec4ffc4785&hop=tilenas"

const navItems = [
  { label: "About ProDentim", href: "#about" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "FAQ", href: OFFER_URL },
]

export function SiteHeader() {
  return (
    <header className="relative z-10">
      <div className="flex h-[22px] items-center justify-center bg-white text-[10px] font-semibold tracking-tight text-[#6b6b6b]">
        <span className="text-[#272727]">CLICKBANK</span>
        <span className="mx-1">|</span>
        <span>RELIABLE &amp; SECURE</span>
      </div>

      <nav
        aria-label="Main navigation"
        className="flex min-h-[76px] items-center justify-between gap-5 bg-[#007953] px-6 py-3 md:px-10"
      >
        <a href="#top" aria-label="ProDentim home" className="shrink-0">
          <img
            src="/images/prodentim/prodentim_logo.png"
            alt="ProDentim"
            width={252}
            height={39}
            className="h-auto w-[150px] md:w-[190px]"
          />
        </a>

        <ul className="ml-auto hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[15px] font-medium text-white transition-opacity hover:opacity-80"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={OFFER_URL}
          aria-label="Order ProDentim now"
          className="ml-auto inline-flex shrink-0 transition-opacity hover:opacity-85 md:ml-0"
        >
          <img
            src="/images/prodentim/order-now.png"
            alt="Order Now"
            width={242}
            height={100}
            className="h-auto w-[100px] md:w-[120px]"
          />
        </a>
      </nav>
    </header>
  )
}
