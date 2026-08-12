"use client"

import { useEffect, useState } from "react"

const BASE_HOP_LINK =
  "https://mwebtrackerhq.com/12271/8366/7/?ga=1&subid=google_search"

export function CookieConsent() {
  const [hopLink, setHopLink] = useState(BASE_HOP_LINK)

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search)
    const offerUrl = new URL(BASE_HOP_LINK)

    const trackingParams = [
      "gclid",
      "gbraid",
      "wbraid",
    ]

    trackingParams.forEach((param) => {
      const value = currentParams.get(param)

      if (value) {
        offerUrl.searchParams.set(param, value)
      }
    })

    setHopLink(offerUrl.toString())
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <h2 className="font-heading text-lg font-bold text-primary">
          We value your privacy
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-primary/80">
          We use cookies to improve your experience, analyze site traffic, and
          personalize content. By clicking{" "}
          <span className="font-semibold text-primary">
            &quot;Accept All&quot;
          </span>
          , you agree to our use of cookies as described in our{" "}

          <a
            href={hopLink}
            className="font-semibold text-primary underline underline-offset-2 hover:text-accent"
          >
            Cookie Policy
          </a>{" "}

          and{" "}

          <a
            href={hopLink}
            className="font-semibold text-primary underline underline-offset-2 hover:text-accent"
          >
            Privacy Policy
          </a>
          .
        </p>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <a
            href={hopLink}
            className="rounded-full border border-border px-5 py-2.5 text-center text-sm font-semibold text-primary/70 transition-colors hover:bg-muted"
          >
            Cancel
          </a>

          <a
            href={hopLink}
            className="rounded-full bg-accent px-6 py-2.5 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Accept All
          </a>
        </div>
      </div>
    </div>
  )
}