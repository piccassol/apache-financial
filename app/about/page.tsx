import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Header from "@/components/header"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jean Boursiquot",
      title: "CEO & Founder",
      role: "Certified Public Accountant",
      email: "jeanboursiquot@apachefinancials.com",
      image: "/professional-black-male-accountant-headshot.jpg",
    },
  ]

  const galleryImages = [
    "/modern-tax-office-workspace.jpg",
    "/team-meeting-in-financial-office.jpg",
    "/accountants-working-together.jpg",
    "/professional-tax-consultation.jpg",
    "/financial-planning-session.jpg",
    "/tax-preparation-workspace.jpg",
  ]

  const testimonials = [
    {
      quote: "Jean is truly exceptional. He helped me fix my credit and guided me through buying my first home. His professionalism and patience made the process smooth and stress-free.",
      author: "Maria T., Miami, FL",
    },
    {
      quote: "I’ve worked with other tax preparers before, but Jean’s attention to detail and genuine care for his clients set him apart. Highly recommend!",
      author: "David R., Fort Lauderdale, FL",
    },
    {
      quote: "Jean helped me get back on track financially. His credit repair services were effective, and he explained everything clearly. I trust him completely.",
      author: "Sandra M., West Palm Beach, FL",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 to-gray-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('/professional-office-background.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Meet <span className="text-primary">Our Team</span>
          </h1>
          <p className="text-xl">Experienced Experts!</p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        />
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-bold mb-6">
                About <span className="text-primary">Us</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As a family-owned and operated financial firm, we are dedicated to delivering personalized service
                that prioritizes your unique requirements. We recognize that each client brings distinct financial circumstances
                to the table, and our team adapts accordingly. For nearly ten years, our skilled and knowledgeable professionals
                have been supporting businesses and individuals through their most complex financial challenges. Ensuring
                our clients' complete satisfaction remains at the core of everything we do.
              </p>
            </div>
            <div>
              <Image
                src="/tax-documents-and-calculator-on-desk.jpg"
                alt="Tax Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our <span className="text-primary">Story</span>
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apache Financial LLC was established with one clear objective: to provide outstanding financial services
              that place client satisfaction at the forefront. For more than ten years, we have been committed to offering
              thorough tax preparation, accounting, credit restoration, and real estate assistance to individuals and
              families across the South Florida region.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our difference lies in our dedication to individualized service and forward-thinking problem resolution.
              We firmly believe that every client merits tailored solutions designed specifically for their financial
              circumstances. Our methodology merges professional knowledge with authentic concern, guaranteeing you
              receive the backing and direction necessary to reach your financial objectives. As we expand and develop,
              our commitment to quality and client prosperity remains steadfast.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section with Bio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet The <span className="text-primary">CEO</span>
          </h2>
          <div className="flex justify-center max-w-md mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <div className="flex justify-center pt-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{member.title}</p>
                  <p className="text-sm text-muted-foreground mb-3">( {member.role} )</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${member.email}`} className="hover:text-primary">
                      {member.email}
                    </a>
                  </div>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              About <span className="text-primary">Jean G. Boursiquot</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Greetings! I'm Jean G. Boursiquot, a versatile professional proudly serving the South Florida community as a Licensed Real Estate Agent, Certified Tax Preparer, and Credit Restoration Expert. Having relocated from Haiti to the United States in 2000, I served with distinction in the U.S. Navy, cultivating the discipline and commitment that continue to steer my professional practice.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Drawing from over six years of experience in helping individuals and families attain financial independence, I have supported hundreds of clients in rebuilding their credit, preparing precise tax filings, and maneuvering through real estate transactions with assurance. My purpose is straightforward: to simplify life for others by delivering truthful, principled, and individualized assistance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am enthusiastic about continuous learning, development, and broadening my capabilities to serve my community more effectively. Beyond work, I appreciate exploring new destinations, relaxing at the beach, and maintaining an active lifestyle through various sports. I maintain that every obstacle presents an opportunity for growth—and I carry this perspective into each client engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over six years of experience helping individuals and families achieve financial empowerment, I’ve assisted hundreds of clients in restoring their credit, preparing accurate tax returns, and navigating real estate transactions with confidence. My mission is simple: to make life easier for others by offering honest, ethical, and personalized support.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I’m passionate about learning, growing, and diversifying my expertise to better serve my community. Outside of work, I enjoy traveling, spending time at the beach, and staying active through sports. I believe every setback is a setup for a comeback—and I bring that mindset into every client interaction.
            </p>
            <p className="text-muted-foreground leading-relaxed font-bold">
              Let’s work together to build a stronger financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What <span className="text-primary">Clients Are Saying</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary transition-colors"
              >
                <p className="text-muted-foreground leading-relaxed mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-bold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
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