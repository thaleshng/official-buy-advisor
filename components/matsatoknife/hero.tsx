import Image from "next/image"

const benefits = [
  "Último dia para aproveitar a grande promoção",
  "Facas de chef premium para uso diário",
  "Condição especial com entrega rápida",
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#f0f0ee] text-black">
      <div className="absolute inset-0">
        <Image
          src="/images/matsatoknife/clear-hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-80 grayscale"
          style={{ filter: "blur(1.2px) contrast(0.96) brightness(1.15)" }}
        />
        <div className="absolute inset-0 bg-[#dfeaf0]/35 backdrop-blur-[1.5px]" />
      </div>

      <div className="relative mx-auto max-w-[2000px] px-6 pb-10 pt-8">
        <div className="grid min-h-[720px] items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative z-10 max-w-[560px] py-6 lg:py-10">
            <p className="text-[22px] font-semibold leading-tight text-black/90">
              Facas Matsato
              <span className="ml-2 text-black/70">- Facas de chef que funcionam</span>
            </p>

            <div className="mt-8">
              <p className="text-[28px] font-semibold uppercase tracking-[-0.04em] text-black">
                Desconto
              </p>
              <p className="mt-2 text-[120px] font-black leading-[0.82] tracking-[-0.08em] text-black">
                70%
              </p>
              <p className="mt-3 text-[28px] font-semibold text-black">Última Chance</p>
              <p className="mt-3 max-w-[420px] text-[20px] leading-snug text-black/80">
                Último dia para aproveitar esta grande promoção
              </p>
            </div>

            <div className="mt-8 flex w-full max-w-[420px] items-center justify-center rounded-xl bg-[#FF9900] px-5 py-4 text-center shadow-[0_18px_40px_rgba(255,153,0,0.28)]">
              <a
                href="https://get-matsato.com/matsato/product?&vndr=evf&evf=1&uid=5796&offid=58&affiliate_id=2051&shaff=0&subid2=11095_sessid20261007021113707&subid=3758"
                className="block w-full text-[18px] font-bold uppercase tracking-[0.02em] text-black"
              >
                Ganhe 70% de Desconto
              </a>
            </div>

            <div className="mt-6 space-y-3 text-[16px] text-black/80">
              <p>• A partir de R$ 399,00 em vez de R$ 3311,00 (valor)</p>
              <p>• Desconto direto no site</p>
              <p>• Entrega durante os estoques</p>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[420px] items-end justify-center">
            <div className="relative h-[420px] w-full max-w-[580px] lg:h-[520px] xl:h-[620px]">
              <Image
                src="/images/matsatoknife/clear-header-knife.avif"
                alt="Matsato chef knife"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_16px_30px_rgba(0,0,0,0.28)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-[#FF9900] py-4 text-center text-black">
        <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-3 px-6 text-[20px] font-bold uppercase tracking-[-0.04em]">
          <span className="text-[36px] font-black leading-none">matsato</span>
          <span className="text-[22px] font-semibold">A tradição dos ferreiros na ponta dos seus dedos: facas de chef Matsato</span>
        </div>
      </div>
    </section>
  )
}
