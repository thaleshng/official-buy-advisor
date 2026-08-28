export function PaymentStrip() {
	return (
		<div style={{ background: "var(--de-azure)" }}>
			<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 py-2">
				<span
					className="font-[family-name:var(--font-montserrat)] font-semibold"
					style={{ fontSize: "16px", color: "var(--de-ink)" }}
				>
					Available payment methods:
				</span>

				<ul className="flex items-center gap-2">
					{/* Visa */}
					<li>
						<svg
							className="h-6 max-h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 72 44"
							role="img"
							aria-label="Visa"
						>
							<rect
								width="71"
								height="43"
								x=".5"
								y=".5"
								fill="#fff"
								stroke="#dcdcdc"
								rx="5.5"
							/>
							<path
								fill="#172b85"
								fillRule="evenodd"
								d="M21.86 29.8H17.5L14.22 18.7a1.8 1.8 0 0 0-.96-1.18 15 15 0 0 0-4-1.18v-.43h7.02c.97 0 1.7.65 1.82 1.4l1.7 8.02 4.36-9.42h4.24zm8.96 0H26.7l3.4-13.9h4.12zm8.72-10.04c.13-.75.85-1.18 1.7-1.18a8.5 8.5 0 0 1 4 .64l.73-3a12 12 0 0 0-3.76-.64c-4 0-6.9 1.93-6.9 4.6 0 2.04 2.06 3.1 3.51 3.75 1.57.64 2.18 1.07 2.06 1.7 0 .97-1.21 1.4-2.42 1.4-1.46 0-2.91-.32-4.24-.86l-.73 3c1.45.53 3.03.74 4.48.74 4.48.11 7.27-1.81 7.27-4.7 0-3.64-5.7-3.85-5.7-5.45M59.66 29.8l-3.27-13.9h-3.52c-.72 0-1.45.42-1.7 1.06l-6.05 12.84h4.24l.85-2.03h5.2l.5 2.03zm-6.18-10.16 1.2 5.24H51.3z"
								clipRule="evenodd"
							/>
						</svg>
					</li>

					{/* American Express */}
					<li>
						<img
							src="/images/ergonomicpillow/amex.svg"
							alt="American Express"
							className="h-6 max-h-6"
						/>
					</li>

					{/* MasterCard */}
					<li>
						<svg
							className="h-6 max-h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 72 44"
							role="img"
							aria-label="MasterCard"
						>
							<rect
								width="71"
								height="43"
								x=".5"
								y=".5"
								fill="#fff"
								stroke="#dcdcdc"
								rx="5.5"
							/>
							<path
								fill="#ed0006"
								d="M44.56 9c7.1 0 12.87 5.67 12.87 12.66S51.67 34.3 44.56 34.3c-3.18 0-6.1-1.14-8.35-3.03a13 13 0 0 1-8.34 3.03c-7.1 0-12.87-5.67-12.87-12.65C15 14.66 20.76 9 27.87 9c3.18 0 6.1 1.14 8.34 3.03A13 13 0 0 1 44.56 9"
							/>
							<path
								fill="#f9a000"
								d="M44.56 9c7.1 0 12.87 5.67 12.87 12.66S51.67 34.3 44.56 34.3c-3.18 0-6.1-1.14-8.35-3.03a12.54 12.54 0 0 0 0-19.25A13 13 0 0 1 44.56 9"
							/>
							<path
								fill="#ff5e00"
								d="M36.21 12.03a12.54 12.54 0 0 1 0 19.25 12.54 12.54 0 0 1 0-19.25"
							/>
						</svg>
					</li>

					{/* PayPal */}
					<li>
						<img
							src="/images/ergonomicpillow/paypal.svg"
							alt="PayPal"
							className="h-6 max-h-6"
						/>
					</li>

					{/* Apple Pay */}
					<li>
						<svg
							className="h-6 max-h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 72 44"
							role="img"
							aria-label="Apple Pay"
						>
							<rect
								width="71"
								height="43"
								x=".5"
								y=".5"
								fill="#fff"
								stroke="#dcdcdc"
								rx="5.5"
							/>
							<path
								fill="#151515"
								fillRule="evenodd"
								d="M17.17 16.38c.97.07 1.93-.44 2.54-1.08.6-.67.99-1.56.88-2.47-.85.04-1.9.51-2.51 1.18-.56.57-1.03 1.5-.91 2.37m11.5 11.7V13.91h5.9c3.04 0 5.16 1.9 5.16 4.66s-2.16 4.67-5.25 4.67h-3.37v4.84zm-8.09-11.53c-.85-.04-1.62.23-2.25.45-.4.15-.75.27-1 .27-.3 0-.66-.13-1.06-.27-.52-.2-1.12-.4-1.75-.4a4.2 4.2 0 0 0-3.51 1.93c-1.52 2.35-.4 5.82 1.06 7.72.72.95 1.57 1.99 2.7 1.95.5-.02.86-.15 1.23-.3.42-.16.86-.33 1.55-.33.67 0 1.1.17 1.5.32.38.16.75.3 1.3.3 1.17-.03 1.9-.95 2.62-1.9.77-1.01 1.11-2 1.16-2.15l.01-.02-.03-.01c-.26-.11-2.23-.92-2.25-3.1-.02-1.84 1.57-2.77 1.82-2.92l.03-.01a4.2 4.2 0 0 0-3.13-1.53m23.6 11.64c1.53 0 2.95-.7 3.6-1.8h.05v1.7h2.26v-7.06c0-2.04-1.82-3.36-4.6-3.36-2.6 0-4.5 1.33-4.58 3.17h2.2c.18-.87 1.07-1.45 2.3-1.45 1.5 0 2.33.63 2.33 1.78v.79l-3.04.16c-2.83.15-4.36 1.2-4.36 3.02 0 1.83 1.58 3.05 3.84 3.05m.66-1.68c-1.3 0-2.13-.56-2.13-1.43q.02-1.34 2.32-1.49l2.7-.15v.8c0 1.32-1.24 2.27-2.9 2.27m12.73 2.13c-.98 2.48-2.1 3.3-4.47 3.3-.18 0-.79-.02-.93-.06v-1.7c.15.02.52.04.72.04 1.07 0 1.68-.41 2.05-1.48l.22-.62-4.13-10.32h2.55l2.87 8.37h.05l2.87-8.37h2.48zM31.11 15.77h2.81c2.11 0 3.32 1.02 3.32 2.8 0 1.8-1.2 2.82-3.33 2.82h-2.8z"
								clipRule="evenodd"
							/>
						</svg>
					</li>

					{/* Venmo */}
					<li>
						<svg
							className="h-6 max-h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 72 44"
							role="img"
							aria-label="Venmo"
						>
							<rect
								width="71"
								height="43"
								x=".5"
								y=".5"
								fill="#3d95ce"
								stroke="#dcdcdc"
								rx="5.5"
							/>
							<path
								fill="#fff"
								d="M47.82 14.78c0 5.85-5.48 13.46-9.93 18.8H27.73l-4.07-22.22 8.9-.76 2.15 15.8c2.01-3 4.5-7.69 4.5-10.9 0-1.74-.34-2.94-.85-3.92l8.1-1.5a8 8 0 0 1 1.36 4.7"
							/>
						</svg>
					</li>
				</ul>
			</div>
		</div>
	);
}
