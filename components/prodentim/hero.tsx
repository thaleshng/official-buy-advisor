import Image from "next/image"

const OFFER_URL =
  "https://prodentim101.com/text.php?hopId=a3f1a2cf-809e-4461-a88b-6aec4ffc4785&hop=tilenas"

export function Hero() {
  return (
    <>
      <section id="top" className="bg-[#76A686] px-6 py-10 text-white md:py-14">
        <div className="mx-auto grid max-w-[960px] items-center gap-8 md:grid-cols-[340px_1fr] md:gap-10">
          <a href={OFFER_URL} className="mx-auto block w-full max-w-[340px]">
            <Image
              src="/images/prodentim/introducting_prodentim.png"
              alt="ProDentim probiotic bottle surrounded by mint and strawberries"
              width={1440}
              height={1280}
              priority
              className="h-auto w-full object-contain"
            />
          </a>

          <div>
            <h1 className="text-[29px] font-bold leading-[1.12] text-white md:text-[34px]">
              Brand New Probiotics
              <br className="hidden md:block" /> Specially Designed For The
              <br className="hidden md:block" /> Health Of Your Teeth And Gums
            </h1>
            <p className="pt-4 text-[19px] leading-relaxed text-white md:text-[20px]">
              <strong className="font-bold">Try ProDentim:</strong> a unique blend of{" "}
              <strong className="font-bold">3.5 billion</strong> probiotic strains and
              nutrients backed by clinical research.
            </p>
            <a href={OFFER_URL} className="mt-6 inline-block">
              <Image
                src="/images/prodentim/certifications.png"
                alt="Manufacturing, FDA facility, natural ingredients, made in USA, and GMO free"
                width={1780}
                height={300}
                className="h-auto w-full max-w-[560px]"
              />
            </a>
          </div>
        </div>
      </section>

      <span id="ingredients" className="sr-only">
        ProDentim ingredients
      </span>
    </>
  )
}
