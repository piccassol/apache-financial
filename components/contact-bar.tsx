import { Phone, MapPin, Mail } from "lucide-react"

export function ContactBar() {
  return (
    <div className="relative -mt-20 z-10 container mx-auto px-4">
      <div className="bg-primary text-primary-foreground rounded-lg shadow-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="tel:+17577465015" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
            <div className="bg-white/20 p-4 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <div className="font-semibold text-lg">Call Us Now</div>
              <div className="text-sm">+1 757-746-5015</div>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-full">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <div className="font-semibold text-lg">Office Location</div>
              <div className="text-sm">925 NE 143rd Street, North Miami, FL 33161</div>
            </div>
          </div>

          <a
            href="mailto:info@apachefinancials.com"
            className="flex items-center gap-4 hover:opacity-90 transition-opacity"
          >
            <div className="bg-white/20 p-4 rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <div className="font-semibold text-lg">Email Us</div>
              <div className="text-sm">info@apachefinancials.com</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
