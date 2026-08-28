import Image from "next/image";

const topics = [
	"Last day to grab this BIG -75% OFF promo",
	"Ends morning aches and pains",
	"Try it risk-free"
];

function CheckIcon() {
	return (
		<svg
			className="w-[20px] max-h-[20px] shrink-0"
			style={{ color: "var(--de-check)" }}
			fill="none"
			height="32"
			viewBox="0 0 32 32"
			width="32"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="m28.744 10.4336c.0368-.2784.056-.5568.056-.8336 0-3.8064-3.4288-6.8608-7.2336-6.344-1.1088-1.9728-3.2208-3.256-5.5664-3.256s-4.4576 1.2832-5.5664 3.256c-3.8128-.5168-7.2336 2.5376-7.2336 6.344 0 .2768.0192.5552.056.8336-1.9728 1.1104-3.256 3.2224-3.256 5.5664s1.2832 4.456 3.256 5.5664c-.03691.2763-.05562.5548-.056.8336 0 3.8064 3.4208 6.8528 7.2336 6.344 1.1088 1.9728 3.2208 3.256 5.5664 3.256s4.4576-1.2832 5.5664-3.256c3.8048.5088 7.2336-2.5376 7.2336-6.344 0-.2768-.0192-.5552-.056-.8336 1.9728-1.1104 3.256-3.2224 3.256-5.5664s-1.2832-4.456-3.256-5.5664zm-14.416 12.632-5.8672-5.9424 2.2784-2.2464 3.6112 3.6576 6.9232-6.8704 2.2528 2.272z"
				fill="currentColor"
			/>
		</svg>
	);
}

function Stars() {
	return (
		<svg
			className="w-[142px]"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 142 22"
			aria-hidden="true"
		>
			<path
				fill="#fff"
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m11.77 1.71 2.5 5.05a.8.8 0 0 0 .64.47l5.52.82a.85.85 0 0 1 .47 1.46l-3.98 3.94a.83.83 0 0 0-.25.76l.96 5.54a.86.86 0 0 1-1.26.91l-4.96-2.62a.93.93 0 0 0-.82 0l-4.96 2.62a.86.86 0 0 1-1.26-.9l.96-5.62a.83.83 0 0 0-.25-.75L1.05 9.5a.85.85 0 0 1 .52-1.46l5.52-.82a.8.8 0 0 0 .64-.47l2.5-5.05a.85.85 0 0 1 1.54 0ZM41.77 1.71l2.5 5.05a.8.8 0 0 0 .64.47l5.52.82a.85.85 0 0 1 .47 1.46l-3.98 3.94a.83.83 0 0 0-.25.76l.96 5.54a.86.86 0 0 1-1.26.91l-4.96-2.62a.93.93 0 0 0-.82 0l-4.96 2.62a.86.86 0 0 1-1.26-.9l.96-5.62a.83.83 0 0 0-.25-.75L31.05 9.5a.85.85 0 0 1 .52-1.46l5.52-.82a.8.8 0 0 0 .64-.47l2.5-5.05a.85.85 0 0 1 1.54 0ZM71.77 1.71l2.5 5.05a.8.8 0 0 0 .64.47l5.52.82a.85.85 0 0 1 .47 1.46l-3.98 3.94a.83.83 0 0 0-.25.76l.96 5.54a.86.86 0 0 1-1.26.91l-4.96-2.62a.93.93 0 0 0-.82 0l-4.96 2.62a.86.86 0 0 1-1.26-.9l.96-5.62a.83.83 0 0 0-.25-.75L61.05 9.5a.85.85 0 0 1 .52-1.46l5.52-.82a.8.8 0 0 0 .64-.47l2.5-5.05a.85.85 0 0 1 1.54 0ZM101.77 1.71l2.5 5.05a.8.8 0 0 0 .64.47l5.52.82a.85.85 0 0 1 .47 1.46l-3.98 3.94a.84.84 0 0 0-.25.76l.96 5.54a.86.86 0 0 1-.79 1.01.86.86 0 0 1-.47-.1l-4.96-2.62a.93.93 0 0 0-.82 0l-4.96 2.62a.86.86 0 0 1-1.26-.9l.96-5.62a.83.83 0 0 0-.25-.75L91.05 9.5a.85.85 0 0 1 .52-1.46l5.52-.82a.8.8 0 0 0 .64-.47l2.5-5.05a.85.85 0 0 1 1.54 0ZM131.77 1.71l2.5 5.05a.8.8 0 0 0 .64.47l5.52.82a.85.85 0 0 1 .47 1.46l-3.98 3.94a.84.84 0 0 0-.25.76l.96 5.54a.86.86 0 0 1-.79 1.01.86.86 0 0 1-.47-.1l-4.96-2.62a.93.93 0 0 0-.82 0l-4.96 2.62a.86.86 0 0 1-1.26-.9l.96-5.62a.84.84 0 0 0-.25-.75l-4.03-3.88a.85.85 0 0 1 .52-1.46l5.52-.82a.8.8 0 0 0 .64-.47l2.5-5.05a.85.85 0 0 1 1.54 0Z"
			/>
		</svg>
	);
}

export function Hero() {
	return (
		<section
			id="hero"
			className="relative flex h-screen max-h-screen flex-col overflow-hidden"
		>
			{/* Background image */}
			<Image
				src="/images/ergonomicpillow/hero-image.jpg"
				alt="Woman sleeping peacefully on the Derila ergonomic pillow"
				fill
				priority
				className="object-cover object-right"
			/>
			{/* Left gradient for legibility */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 65%)"
				}}
			/>

			<div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16">
				<div className="max-w-lg">
					{/* Rating + discount */}
					<div
						className="flex items-center gap-3"
						style={{ color: "var(--de-white)" }}
					>
						<div className="flex items-center gap-2 rounded-lg border-2 border-white p-2 h-[38px]">
							<span className="text-lg font-bold leading-none font-[family-name:var(--font-montserrat)]">
								4.5
							</span>
							<Stars />
						</div>
						<div className="flex h-[38px] items-center rounded-lg border-2 border-white px-4 text-[32px] font-bold leading-none font-[family-name:var(--font-montserrat)]">
							-75%
						</div>
					</div>

					{/* Title */}
					<h1
						className="mt-6 font-[family-name:var(--font-montserrat)] font-bold leading-tight text-balance"
						style={{ fontSize: "48px", color: "var(--de-white)" }}
					>
						The pillow that changes everything
					</h1>

					{/* Paragraph */}
					<p
						className="mt-4 font-[family-name:var(--font-montserrat)] leading-relaxed"
						style={{ fontSize: "16px", color: "var(--de-white)" }}
					>
						A revolutionary ergonomic design that works with your
						body, unlocking deep sleep and pain-free mornings.
					</p>

					{/* Topics */}
					<ul className="mt-6 flex flex-col gap-3">
						{topics.map((topic) => (
							<li key={topic} className="flex items-center gap-3">
								<CheckIcon />
								<span
									className="font-[family-name:var(--font-montserrat)] font-bold"
									style={{
										fontSize: "18px",
										color: "var(--de-white)"
									}}
								>
									{topic}
								</span>
							</li>
						))}
					</ul>

					{/* CTA */}
					<a
						href="#"
						className="mt-8 flex w-full items-center justify-center rounded-full py-4 font-[family-name:var(--font-montserrat)] font-bold transition-opacity hover:opacity-90"
						style={{
							fontSize: "20px",
							background: "var(--de-blue)",
							color: "var(--de-white)"
						}}
					>
						Order now!
					</a>
				</div>
			</div>

			{/* Bottom mentioned-in line */}
			<div className="relative pb-6">
				<p
					className="mx-auto max-w-6xl px-6 text-center font-[family-name:var(--font-montserrat)]"
					style={{ fontSize: "16px", color: "var(--de-white)" }}
				>
					The benefits of the ergonomic pillow have been featured in
				</p>
			</div>
		</section>
	);
}
