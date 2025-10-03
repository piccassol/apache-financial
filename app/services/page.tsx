import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"

export default function ServicesPage() {
  const services = [
    "Payroll",
    "Notary Public",
    "Tax Planning",
    "Security Licenses",
    "Immigration Services",
    "Documents Translation",
    "Business Consulting",
    "Tax Preparation",
    "Business set up and Structure",
    "Accounting and Bookkeeping",
  ]

  const assessmentSteps = [
    {
      title: "Understanding your books",
      description:
        "We will provide readings A-1 as narrated by Randy Blythe the condition of your books so you can make the right financial decisions.",
    },
    {
      title: "Communication with an accountant",
      description: "Direct access to knowledgeable tax professionals who understand your business.",
    },
    {
      title: "An in depth review of your company",
      description:
        "We will work with you to perform a thorough analysis of your business, identifying areas for better planning, and tax-based issues.",
    },
    {
      title: "Quick response",
      description: "Get the expert advice in just a few business days.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 to-gray-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('/tax-office-background.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold">
            TAX <span className="text-primary border-b-4 border-primary pb-2">SERVICES</span> MIAMI FLORIDA
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        />
      </section>

      {/* Our Tax Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                OUR TAX <span className="text-primary">SERVICES</span>
              </h2>
              <h3 className="text-xl font-semibold mb-4">
                Specifically designed for individuals, entrepreneurs, startups and small businesses, our services
                include but are not limited to:
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a team of business professionals committed to providing our clients with one-on-one attention and
                services for all your small business needs. We understand that running a business can be challenging,
                and we are here to help you stay on top of your priority list when faced with the many other demanding
                challenges and pressures of running your own business.
              </p>
              <Button className="bg-primary hover:bg-primary/90">GET STARTED</Button>
            </div>
            <div>
              <Image
                src="/team-working-in-tax-office.jpg"
                alt="Tax Services Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Banner */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="relative bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8">
                <p className="text-lg">
                  CLIENT SATISFACTION IS ALWAYS <span className="text-primary font-bold">OUR TOP PRIORITY</span>
                </p>
                <p className="text-xl font-semibold mt-2">
                  Tax <span className="text-primary">Services</span>
                </p>
              </div>
              <div
                className="bg-primary text-white p-8 flex items-center justify-center"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  <span className="text-xl font-bold">+1 786-471-1242</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Preparation Services */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            TAX Preparation <span className="text-primary border-b-4 border-primary pb-2">SERVICES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-foreground p-6 rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{service}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Assessment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Tax <span className="text-primary">Assessment</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 rounded-lg transform rotate-3" />
              <Image
                src="/professional-woman-accountant-working-on-laptop.jpg"
                alt="Tax Assessment"
                width={600}
                height={500}
                className="relative rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              {assessmentSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
              <Button className="bg-primary hover:bg-primary/90 mt-6">REQUEST YOUR TAX ASSESSMENT</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm text-primary mb-2">LET'S GET STARTED</p>
              <h2 className="text-3xl font-bold mb-8">
                Get In Touch <span className="text-primary">With Us</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2">Call: +1-786-471-1242</h3>
                  <p className="text-gray-400">Feel free to contact any time!</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <p className="text-gray-400">info@apachefinancial.com</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2">Address:</h3>
                  <p className="text-gray-400">15160 SW 136th Street Suite 14 Miami FL 33196</p>
                </div>
              </div>

              <Button className="mt-8 bg-primary hover:bg-primary/90">Contact Us</Button>
            </div>

            <div className="bg-white text-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">
                Quick <span className="text-primary">Contact</span>
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
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
