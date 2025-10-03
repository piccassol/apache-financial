import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-primary mb-4">APACHE</div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Financial</div>
              <div className="text-xs opacity-80">& INVESTMENTS INC</div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner for tax preparation, accounting, and financial services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/careers" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/services/tax-prep"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Tax Preparation
                </a>
              </li>
              <li>
                <a
                  href="/services/accounting"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Accounting
                </a>
              </li>
              <li>
                <a
                  href="/services/bookkeeping"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Bookkeeping
                </a>
              </li>
              <li>
                <a
                  href="/services/consulting"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Business Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span className="opacity-80">
                  1350 NW 14th Street Suite 14
                  <br />
                  Miami, FL 33125
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="tel:+17864711242"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  +1 786-471-1242
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:info@apachefinancial.com"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  info@apachefinancial.com
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} APACHE Financial & Investments Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
