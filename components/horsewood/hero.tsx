import Image from "next/image"

const OFFER_URL =
  "https://horsewood.us/funnelb3/v3/?aff_id=45034&subid2=13213_sessid2026100702362509&subid=4330"

function ReviewStars() {
  return (
    <svg
      width="90"
      height="14"
      viewBox="0 0 104 22"
      fill="currentColor"
      aria-label="5 out of 5 stars"
      role="img"
      className="text-[#FF6B1A]"
    >
      <path d="M11.24.71l2.3 7.1h7.46l-6.03 4.38 2.3 7.1-6.03-4.4-6.03 4.4 2.3-7.1L1.48 7.8h7.46zM31.77.71l2.3 7.1h7.46l-6.03 4.38 2.3 7.1-6.03-4.4-6.03 4.4 2.3-7.1-6.03-4.38h7.46zM52.3.71l2.3 7.1h7.46l-6.03 4.38 2.3 7.1-6.03-4.4-6.03 4.4 2.3-7.1-6.03-4.38h7.46zM72.84.71l2.3 7.1h7.46l-6.03 4.38 2.3 7.1-6.03-4.4-6.03 4.4 2.3-7.1-6.03-4.38h7.46zM93.36.71l2.3 7.1h7.46l-6.03 4.38 2.3 7.1-6.03-4.4-6.03 4.4 2.3-7.1-6.03-4.38h7.46z" />
    </svg>
  )
}

function GuaranteeShield() {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 20 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0 text-[#FF6B1A]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.93 1.8 0 3.6v8.9l.21 1.5.32 1 .77 1.6.95 1.6 1.04 1.4 1.4 1.4 1.86 1.3 2.07 1 1.4.4 1.4-.4 2.07-1 1.86-1.3 1.4-1.4 1.04-1.4.95-1.6.77-1.6.32-1 .21-1.5V3.6L10 0 4.93 1.8Zm7 10.7-3.6 3.6-1.94-1.95L4.4 12.25l.58-.58 1.36 1.36 1.93-1.93 3.02-3.02 1.17 1.17-3.6 3.6Z"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[620px] overflow-hidden bg-black md:min-h-[calc(100svh-92px)]"
    >
      <Image
        src="/images/horsewood/hero-bg-horsewood.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/40 via-black/15 to-transparent" />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 px-6 py-14 md:px-10 lg:grid-cols-2 lg:py-20">
        <div className="max-w-[540px]">
          <div className="flex flex-wrap items-center gap-4">
            <ReviewStars />
            <span className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold uppercase tracking-[0.16em] text-[#8A8580]">
              4,217 verified reviews
            </span>
          </div>

          <Image
            src="/images/horsewood/Hero%20title.png"
            alt="Horsewood — Rise to Every Occasion"
            width={570}
            height={220}
            priority
            className="mt-6 h-auto w-full max-w-[540px] object-contain object-left"
          />

          <p
            id="ingredients"
            className="mt-5 max-w-[470px] text-[15px] leading-[1.55] text-white md:text-[16px]"
          >
            HORSEWOOD&apos;s{" "}
            <span className="font-bold text-[#FF6B1A]">7 botanical ingredients</span>{" "}
            support healthy male vitality, daily stamina, and the natural energy pathways
            that fade with age and stress. Built for men who refuse to slow down.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={OFFER_URL}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FF6B1A] px-6 py-3 font-[family-name:var(--font-space-mono)] text-[12px] font-bold uppercase tracking-[0.04em] text-black transition-transform hover:scale-[1.02]"
            >
              Claim my Horsewood now <span aria-hidden="true">→</span>
            </a>
            <a
              href="#ingredients"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-transparent px-6 py-3 font-[family-name:var(--font-space-mono)] text-[12px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:border-white/70"
            >
              See the science
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2 font-[family-name:var(--font-space-mono)] text-[11px] tracking-[0.04em] text-[#8A8580]">
            <GuaranteeShield />
            <span>60-day money-back guarantee. Feel it or it&apos;s free.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
