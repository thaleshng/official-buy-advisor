"use client"

const HOP_LINK = "https://d7d19fyegfgr6u1qlfr7t81169.hop.clickbank.net"

function goToOffer() {
  window.location.href = HOP_LINK
}

export function CookieConsent() {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <h2 className="font-heading text-lg font-bold text-primary">We value your privacy</h2>

        <p className="mt-3 text-sm leading-relaxed text-primary/80">
          We use cookies to improve your experience, analyze site traffic, and personalize content. By clicking{" "}
          <span className="font-semibold text-primary">&quot;Accept All&quot;</span>, you agree to our use of
          cookies as described in our{" "}
          <button
            type="button"
            onClick={goToOffer}
            className="font-semibold text-primary underline underline-offset-2 hover:text-accent"
          >
            Cookie Policy
          </button>{" "}
          and{" "}
          <button
            type="button"
            onClick={goToOffer}
            className="font-semibold text-primary underline underline-offset-2 hover:text-accent"
          >
            Privacy Policy
          </button>
          .
        </p>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={goToOffer}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary/70 transition-colors hover:bg-muted"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={goToOffer}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
