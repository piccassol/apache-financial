"use client"

import Link from "next/link"
import { Phone, Mail, Facebook, Linkedin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Tax Services" },
    { href: "/packages", label: "Plans and Packages" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+17864711242" className="flex items-center gap-2 hover:opacity-80">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+1 786-471-1242</span>
            </a>
            <a href="mailto:info@apachefinancial.com" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@apachefinancial.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-80">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary">APACHE</div>
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold text-foreground">Financial</div>
                <div className="text-xs">& INVESTMENTS INC</div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-foreground hover:text-primary font-medium">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-bold text-primary">APACHE</div>
                    <div className="text-xs text-muted-foreground">
                      <div className="font-semibold text-foreground">Financial</div>
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t">
                  <div className="space-y-4">
                    <a href="tel:+17864711242" className="flex items-center gap-3 text-sm hover:text-primary">
                      <Phone className="h-4 w-4" />
                      <span>+1 786-471-1242</span>
                    </a>
                    <a href="mailto:info@apachefinancial.com" className="flex items-center gap-3 text-sm hover:text-primary">
                      <Mail className="h-4 w-4" />
                      <span>info@apachefinancial.com</span>
                    </a>
                    <div className="flex items-center gap-4 pt-4">
                      <a href="#" className="hover:text-primary">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

export { Header }