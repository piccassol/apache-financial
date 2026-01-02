import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import Header from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 to-gray-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            Contact <span className="text-primary">Tax Preparation Service</span>
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        />
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left - Contact Info */}
            <div>
              <p className="text-sm text-primary mb-2 font-semibold">LET'S GET STARTED</p>
              <h2 className="text-4xl font-bold mb-12">
                Get In Touch <span className="text-primary">With Us</span>
              </h2>

              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Call: +1-757-746-5015</h3>
                    <p className="text-muted-foreground">Feel free to contact any time!</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Email</h3>
                    <p className="text-muted-foreground">info@apachefinancials.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Address:</h3>
                    <p className="text-muted-foreground">925 NE 143rd Street, North Miami, FL 33161</p>
                  </div>
                </div>
              </div>

              <Button className="mt-12 bg-primary hover:bg-primary/90 text-lg px-8 py-6">Contact Us</Button>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-gray-50 p-10 rounded-lg">
              <h3 className="text-3xl font-bold mb-8">
                Contact <span className="text-primary">Tax Preparation Service</span>
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-4 py-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-4 py-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
