import type { Metadata } from "next";
import { SiteHeader } from "@/components/ergonomicpillow/site-header";
import { Hero } from "@/components/ergonomicpillow/hero";
import { CookieConsent } from "@/components/ergonomicpillow/cookie-consent";

export const metadata: Metadata = {
	title: "Derila Ergo | The ergonomic pillow that changes everything",
	description:
		"Derila Ergo is a pillow with a revolutionary ergonomic design that works with your body, unlocking deep sleep and pain-free mornings."
};

export default function Page() {
	return (
		<main className="ergonomicpillow font-[family-name:var(--font-montserrat)]">
			<SiteHeader />
			<Hero />
			<CookieConsent />
		</main>
	);
}
