const BASE_LINK =
  "https://get-matsato.com/matsato/product?&vndr=evf&evf=1&uid=5796&offid=58&affiliate_id=2051&shaff=0&subid2=11095_sessid20261007021113707&subid=3758"

const navItems = [
  { label: "Acompanhar pedido", href: BASE_LINK },
  { label: "Contato", href: BASE_LINK },
  { label: "Peça agora!", href: BASE_LINK },
]

export function SiteHeader() {
  return (
    <header className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-4">
        <a href={BASE_LINK} className="flex items-center leading-none" aria-label="Matsato home">
          <span className="font-black uppercase tracking-[-0.08em] text-[28px] font-[family-name:var(--font-montserrat)] text-white">
            matsato
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[16px] font-semibold uppercase tracking-[0.02em] text-white transition-opacity hover:opacity-80"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={BASE_LINK} className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.02em] text-white">
          <span>Peça agora!</span>
          <span aria-label="Brasil" className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/60 bg-[#fff] text-[10px] text-black">
            🇧🇷
          </span>
        </a>
      </div>
    </header>
  )
}
