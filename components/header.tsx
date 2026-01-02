"use client"

import Link from "next/link"
import Image from "next/image"
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
      <div className="bg-black border-b border-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+17864711242" className="flex items-center gap-2 hover:text-[#C9A961] transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+1 757-746-5015</span>
            </a>
            <a href="mailto:info@apachefinancial.com" className="flex items-center gap-2 hover:text-[#C9A961] transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@apachefinancials.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-[#C9A961] transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-[#C9A961] transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/apache.png"
                alt="Apache Financial LLC"
                width={180}
                height={60}
                className="h-18 w-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white hover:text-[#C9A961] font-medium transition-colors">
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-white border-gray-800">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/apache.png"
                      alt="Apache Financial LLC"
                      width={120}
                      height={40}
                      className="h-12 w-auto"
                    />
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
                      className="text-lg font-medium text-white hover:text-[#C9A961] hover:bg-gray-900 py-3 px-4 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="space-y-4">
                    <a href="tel:+17864711242" className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#C9A961] transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+1 757-746-5015</span>
                    </a>
                    <a href="mailto:info@apachefinancial.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#C9A961] transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>info@apachefinancials.com</span>
                    </a>
                    <div className="flex items-center gap-4 pt-4">
                      <a href="#" className="text-gray-300 hover:text-[#C9A961] transition-colors">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-[#C9A961] transition-colors">
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