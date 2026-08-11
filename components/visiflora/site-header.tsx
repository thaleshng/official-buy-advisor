import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "The Gut-Eye System", href: "#gut-eye-system" },
  { label: "Premium Ingredients", href: "#ingredients" },
  { label: "Success Stories", href: "#success-stories" },
]

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-center gap-2 border-b border-border bg-white py-2 text-xs font-medium tracking-wide text-primary">
        <span className="font-heading font-bold">CLICKBANK</span>
        <span className="text-primary/40">|</span>
        <ShieldCheck className="size-3.5" aria-hidden="true" />
        <span>TRUSTED &amp; SECURE</span>
      </div>

      <header className="bg-primary">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5"
        >
          <a href="#top" className="shrink-0">
            <Image
              src="/images/visiflora-logo.svg"
              alt="VisiFlora"
              width={239}
              height={52}
              className="h-8 w-auto md:h-9"
              priority
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium leading-snug text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            render={<a href="#buy" />}
            nativeButton={false}
            className="rounded-full bg-accent px-6 font-heading font-bold text-accent-foreground hover:bg-accent/90"
          >
            Get VisiFlora NOW
          </Button>
        </nav>
      </header>
    </div>
  )
}
