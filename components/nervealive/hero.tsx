import Image from "next/image"

// Trust badges
const badges = [
  { src: "/images/nervealive/icon1.webp", alt: "Pure Guaranteed" },
  { src: "/images/nervealive/icon2.webp", alt: "Doctor Formulated" },
  { src: "/images/nervealive/icon3.webp", alt: "Dairy Free" },
  { src: "/images/nervealive/icon4.webp", alt: "Vegetarian" },
  { src: "/images/nervealive/icon5.webp", alt: "Naturally Gluten Free" },
]

export function Hero() {
  return (
    <section id="top" className="overflow-hidden" style={{ background: "var(--na-hero-grad)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-8 md:py-10 lg:grid-cols-2">
        <div className="order-2 flex justify-center lg:order-1">
          <Image
            src="/images/nervealive/hero-image.webp"
            alt="Nerve Alive supplement bottles surrounded by neurons"
            width={768}
            height={1024}
            className="h-auto w-[300px] md:w-[420px]"
            priority
          />
        </div>

        <div className="order-1 lg:order-2">
          <h1
            className="font-[family-name:var(--font-poppins)] font-bold leading-[1.15] text-balance"
            style={{ fontSize: "37px", color: "var(--na-white)" }}
          >
            Nerve Alive is the best option for supporting{" "}
            <span style={{ color: "var(--na-yellow)" }}>nerve health</span> in a
            natural way
          </h1>

          <p
            className="mt-6 font-[family-name:var(--font-poppins)] leading-relaxed"
            style={{ fontSize: "20px", color: "var(--na-white)" }}
          >
            Try Nerve Alive: a supplement with ingredients and nutrients that{" "}
            <span className="font-semibold" style={{ color: "var(--na-yellow)" }}>
              promote nerve health
            </span>
            .
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-3">
            {badges.map((badge) => (
              <li key={badge.alt}>
                <Image
                  src={badge.src || "/placeholder.svg"}
                  alt={badge.alt}
                  width={64}
                  height={64}
                  className="h-14 w-14 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
