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
              Our tax preparation business will be a great opportunity for someone that is looking to start their own
              business. Tax Planning is the examination of a budgeting circumstance or plan from an assessment
              viewpoint. The motivation behind assessment arranging is to guarantee charge productivity. Through tax
              planning, all components of the monetary arrangement cooperate in the most tax-efficient way conceivable.
              Tax Planning is a fundamental piece of a money related arrangement. Over the years, FCI has evolved into a
              successful practice by providing the best of support you may not find in other tax accounting firms. We
              promise to be proactive in finding the best solutions for each particular situation. The decrease of tax
              liabilities and the expansion of the capacity to add to retirement plans are pivotal for progress.
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
                  <span className="text-xl font-bold">+1 786-471-1242</span>
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

      {/* Tax Planning for Retirement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Tax Planning for Retirement"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tax Planning for <span className="text-primary">Retirement Plans</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Saving via a retirement plan is a well-known approach to diminish your present assessment rate. A
                conventional IRA can limit the net salary by up to $6,500.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Turning in 2019, if meeting all capabilities, a the under age 50 gets a decrease of $19,000 and a man
                more than 50 gets a $25,000 decrease. In 2018, a 52-year-old man with a yearly salary of $50,000 and
                made a $6,000 commitment to a conventional IRA has a balanced gross income of $44,000. Contrasted with a
                man who did not add to an IRA, this individual's available gross income balance grew from $50,000 to
                $25,500.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                There are a few other retirement designs that an individual can use to help lower assessment
                commitments. 401(k) plans are mainstream with bigger organizations that have numerous representatives.
                Members in the arrangement can concede pay from their check legitimately into the organization's 401(k)
                plan. The best distinction is that the commitment furthest reaches dollar sum is a lot higher than that
                of an IRA.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Utilizing a similar model as over, the 52-year-old could contribute up to $25,000. Sparing at 70% of a
                similar age or more established, the commitment furthest reaches increments from $25,000 to $25,500 if
                age 50 or more established. The $25,000 commitment balance grew from $50,000 to $25,500.
              </p>
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
