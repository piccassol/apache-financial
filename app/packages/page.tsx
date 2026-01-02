import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"

export default function PackagesPage() {
  const beginnerFeatures = [
    "IRS Registration: Assistance with PTIN and/or EFIN applications",
    "Tax Preparation Software: All-in-one, and 1 year plan tax season",
    "Each Additional Licensed Borrowed",
    "Tax Preparation Training via Professional Tax Software",
    "Year-Round, Live Person, Support (24/7 during tax season)",
  ]

  const intermediateFeatures = [
    "IRS Registration: Assistance with PTIN and/or EFIN applications",
    "Bank Products: Third, Checks, Direct Deposit and Issue Debit Cards On-Site",
    "Tax Preparation Software: All-in-one, and 1 year plan tax season",
    "Personal Check",
    "Tax Preparation Training via Professional Tax Software",
    "Year-Round, Live Person, Support (24/7 during tax season)",
    "Unlimited Financial Analysis Report",
  ]

  const advancedFeatures = [
    "Electronic Record Storage for your Tax Business",
    "Audit Protection Program (up to $10 extra per return)",
    "Unlimited Financial Analysis Report",
    "Charge up to $999 Prep Fees",
    "Use Your Own Prep Fees Name",
    "Additional Bonuses Included",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 to-gray-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary">Partnership</span> Packages
          </h1>
          <p className="text-xl">
            We are the most complete and trusted and we are Dedicated, efficient, friendly project managers!
          </p>
          <p className="text-lg mt-2">Let's Start the Conversation!</p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        />
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Start Your Tax <span className="text-primary">Business</span> Today!
          </h2>
          <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
              Launch your own tax preparation venture with Apache Financial's comprehensive support packages. Gain access to
              professional tools, training, and resources to build a successful business. Tax planning involves evaluating your
              financial situation from a strategic perspective. The purpose of tax planning is to ensure fiscal efficiency.
              Through proper tax planning, all elements of your financial strategy work together in the most tax-advantaged manner
              possible. Tax planning forms an essential component of any sound financial arrangement. Over the years, Apache
              Financial has grown into a thriving practice by providing exceptional support you won't find elsewhere. We
              remain committed to proactively identifying optimal solutions for every unique scenario. Minimizing tax obligations
              and maximizing your ability to contribute to retirement plans are critical for achieving lasting success.
            </p>
          </div>
        </div>
      </section>

      {/* Beginner Package */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
            {/* Left - Package Name */}
            <div
              className="bg-primary text-white p-12 flex items-center justify-center relative overflow-hidden"
              style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
            >
              <div className="text-center relative z-10">
                <h3 className="text-3xl font-bold mb-2">BEGINNER</h3>
                <p className="text-xl">PACKAGE</p>
              </div>
            </div>

            {/* Middle - Features */}
            <div className="bg-white p-8 border-2 border-gray-200 rounded-lg">
              <ul className="space-y-4">
                {beginnerFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Price */}
            <div className="bg-primary text-white p-12 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">
                  <sup className="text-3xl">$</sup>199
                </div>
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-0">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Banner */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-white border-2 border-gray-200 rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8">
                <p className="text-lg">
                  CLIENT SATISFACTION IS ALWAYS <span className="text-primary font-bold">OUR TOP PRIORITY</span>
                </p>
              </div>
              <div
                className="bg-primary text-white p-8 flex items-center justify-center"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  <span className="text-xl font-bold">+1 757-746-5015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate Package */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
            {/* Left - Price */}
            <div className="bg-gray-700 text-white p-12 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">
                  <sup className="text-3xl">$</sup>499
                </div>
                <Button variant="outline" className="bg-white text-gray-700 hover:bg-gray-100 border-0">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Middle - Features */}
            <div className="bg-white p-8 border-2 border-gray-200 rounded-lg">
              <ul className="space-y-4">
                {intermediateFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Package Name */}
            <div
              className="bg-gray-700 text-white p-12 flex items-center justify-center relative overflow-hidden"
              style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <div className="text-center relative z-10">
                <h3 className="text-3xl font-bold mb-2">INTERMEDIATE</h3>
                <p className="text-xl">PACKAGE</p>
              </div>
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
                  <h3 className="font-bold text-xl mb-2">Call: +1-757-746-5015</h3>
                  <p className="text-gray-400">Feel free to contact any time!</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <p className="text-gray-400">info@apachefinancials.com</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2">Address:</h3>
                  <p className="text-gray-400">925 NE 143rd Street, North Miami, FL 33161</p>
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
