import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Review = {
	name: string;
	href: string;
	image: string;
	imageAlt: string;
	category: string;
	tagline: string;
	cta: string;
	highlights: string[];
};

const reviews: Review[] = [
	{
		name: "VisiFlora",
		href: "/visiflora",
		image: "/images/visiflora-bottle.png",
		imageAlt:
			"VisiFlora supplement bottle surrounded by flowers, leaves, and an orange",
		category: "Editor's Choice — Vision Support",
		tagline: "Precision vision support that starts in the gut.",
		cta: "Read Full VisiFlora Review",
		highlights: [
			"22-in-1 formula backed by third-party lab testing",
			"First formula to target the documented gut-eye connection",
			"94% of verified buyers reported improved comfort within 60 days"
		]
	},
	{
		name: "Nerve Alive",
		href: "/nervealive",
		image: "/images/nervealive/hero-image.webp",
		imageAlt: "Nerve Alive supplement bottles surrounded by neurons",
		category: "Editor's Choice — Nerve Health",
		tagline: "Natural nerve health support, formulated with magnesium.",
		cta: "Read Full Nerve Alive Review",
		highlights: [
			"Magnesium-based formula that promotes healthy nerve function",
			"Doctor formulated, vegetarian, dairy free and gluten free",
			"Backed by a satisfaction guarantee on every bottle"
		]
	},
	{
		name: "Derila Ergo",
		href: "/ergonomicpillow",
		image: "/images/ergonomicpillow/product-derila-ergo.avif",
		imageAlt: "Derila Ergo ergonomic memory foam pillow",
		category: "Editor's Choice — Sleep Support",
		tagline: "The ergonomic pillow that changes everything.",
		cta: "Read Full Derila Ergo Review",
		highlights: [
			"Revolutionary ergonomic design that works with your body",
			"Unlocks deep sleep and pain-free mornings",
			"Try it risk-free with a satisfaction guarantee"
		]
	}
];

export function EditorsPick() {
	return (
		<section id="editors-pick" className="bg-[var(--oba-paper-alt)]">
			<div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
				<p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--oba-gold-ink)]">
					This Month&apos;s Top Picks
				</p>
				<h2 className="mt-4 text-center font-[family-name:var(--font-oba-serif)] text-4xl font-semibold tracking-tight text-[var(--oba-ink)] text-balance">
					Supplements, Reviewed
				</h2>

				<div className="mt-12 grid gap-8">
					{reviews.map((review) => (
						<div
							key={review.name}
							className="grid gap-10 rounded-3xl border border-[var(--oba-border)] bg-[var(--oba-paper)] p-8 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:p-12"
						>
							<div className="flex items-center justify-center">
								<Image
									src={review.image || "/placeholder.svg"}
									alt={review.imageAlt}
									width={340}
									height={400}
									className="h-auto w-full max-w-[260px] object-contain"
								/>
							</div>

							<div>
								<div className="flex flex-wrap items-center gap-3">
									<span className="rounded-full bg-[var(--oba-gold)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--oba-gold-ink)]">
										{review.category}
									</span>
									<span
										className="flex items-center gap-1"
										aria-label="Rated 4.8 out of 5 stars"
									>
										{Array.from({ length: 5 }).map(
											(_, i) => (
												<Star
													key={i}
													className="size-4 fill-[var(--oba-gold-strong)] text-[var(--oba-gold-strong)]"
													aria-hidden="true"
												/>
											)
										)}
									</span>
								</div>

								<h3 className="mt-4 font-[family-name:var(--font-oba-serif)] text-3xl font-semibold text-[var(--oba-ink)]">
									{review.name}
								</h3>
								<p className="mt-2 text-[var(--oba-slate)]">
									{review.tagline}
								</p>

								<ul className="mt-6 space-y-3">
									{review.highlights.map((item) => (
										<li
											key={item}
											className="flex items-start gap-3 text-[var(--oba-ink-soft)]"
										>
											<BadgeCheck
												className="mt-0.5 size-5 shrink-0 text-[var(--oba-gold-strong)]"
												aria-hidden="true"
											/>
											<span className="leading-relaxed">
												{item}
											</span>
										</li>
									))}
								</ul>

								<div className="mt-8 flex flex-wrap items-center gap-4">
									<Button
										render={<Link href={review.href} />}
										nativeButton={false}
										size="lg"
										className="rounded-md bg-[var(--oba-ink)] px-7 font-semibold text-[var(--oba-paper)] hover:bg-[var(--oba-ink-soft)]"
									>
										{review.cta}
									</Button>
									<span className="text-sm text-[var(--oba-slate)]">
										Reviewed by our Health &amp; Wellness
										Research Team
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
