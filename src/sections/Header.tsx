import LogoIcon from "@/assets/logo.svg"
import MenuIcon from "@/assets/icon-menu.svg"
import { Button } from "@/components/button"

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border rounded-lg border-white/15 md:py-2.5 md:px-5 max-w-2xl mx-auto ">
          <div>
            {/* To make the border of the Logo inline-flex to make it in center aligfned with Logo */}
            <div className="border h-10 w-10 rounded-xl border-white/15 inline-flex justify-center items-center">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm ">
              <a
                className="text-white/70 hover:text-white hover:y-10 transition "
                href="#"
              >
                Features
              </a>
              <a
                className="text-white/70 hover:text-white transition "
                href="#"
              >
                Developers
              </a>
              <a
                className="text-white/70 hover:text-white transition "
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-white/70 hover:text-white transition "
                href="#"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button />
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}
