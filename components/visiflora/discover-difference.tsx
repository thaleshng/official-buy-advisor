import Image from "next/image"

const cards = [
  {
    image: "/images/visiflora-bacteria.png",
    alt: "Microscopic close-up of colorful probiotic bacteria",
    title: "The Microbiome Science",
    description:
      "A balanced community of gut bacteria directly influences eye inflammation and retinal health.",
  },
  {
    image: "/images/visiflora-scientist.png",
    alt: "Scientists analyzing a sample in the lab",
    title: "Lab-Tested Quality",
    description:
      "Every batch is formulated and verified by experts for purity, potency, and consistency.",
  },
  {
    image: "/images/visiflora-eyes.png",
    alt: "Close-up comparison of young and mature eyes",
    title: "Results At Any Age",
    description:
      "Formulated to support visual clarity and eye comfort at every stage of life.",
  },
]

export function DiscoverDifference() {
  return (
    <section id="ingredients" className="bg-brand-royal">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-center font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Discover The VisiFlora Difference:
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-2xl bg-card">
              <div className="relative aspect-[4/3] w-full">
                <Image src={card.image || "/placeholder.svg"} alt={card.alt} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-card-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
