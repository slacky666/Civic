import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-border/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto h-14 w-full max-w-screen-2xl items-center">
            <MainNav />
            <MobileNav />
        </div>
    </header>
  )
}
