import Image from "next/image"

export function DiscoverDifference() {
  return (
    <section id="ingredients" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-20 lg:grid-cols-2">
        <div className="order-1">
          <h2
            className="font-[family-name:var(--font-poppins)] font-bold leading-[1.2] text-balance"
            style={{ fontSize: "33px", color: "var(--na-ink)" }}
          >
            Discover the secret behind{" "}
            <span style={{ color: "var(--na-blue)" }}>Nerve Alive</span> and why
            it will help you with your health.
          </h2>
        </div>

        <div className="order-2 flex justify-center">
          <Image
            src="/images/nervealive/doctor-image.webp"
            alt="Doctor holding a Nerve Alive bottle"
            width={683}
            height={1024}
            className="h-auto w-full max-w-sm rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
