import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, TrendingUp, Heart, Clock, DollarSign, GraduationCap, MapPin } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Tax Accountant",
      department: "Tax Services",
      location: "Miami, FL",
      type: "Full-time",
      description:
        "Lead tax preparation and planning for high-net-worth individuals and businesses. Provide strategic tax advice and ensure compliance with federal and state regulations.",
    },
    {
      title: "Financial Analyst",
      department: "Financial Planning",
      location: "Miami, FL",
      type: "Full-time",
      description:
        "Analyze financial data, create forecasts, and provide insights to help clients make informed investment decisions. Work closely with senior advisors on portfolio management.",
    },
    {
      title: "Bookkeeping Specialist",
      department: "Accounting",
      location: "Miami, FL",
      type: "Full-time",
      description:
        "Manage day-to-day bookkeeping operations for multiple clients. Maintain accurate financial records, reconcile accounts, and prepare monthly financial statements.",
    },
    {
      title: "Client Relations Manager",
      department: "Client Services",
      location: "Miami, FL",
      type: "Full-time",
      description:
        "Build and maintain strong relationships with clients. Serve as the primary point of contact, ensuring exceptional service delivery and client satisfaction.",
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance-based bonuses and profit sharing opportunities.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs and gym memberships.",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and generous paid time off to recharge and refresh.",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuing education support, certification reimbursement, and mentorship programs.",
    },
  ]

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, delivering exceptional results for our clients.",
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency and honesty, building trust through ethical practices and accountability.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, fostering an environment where diverse perspectives drive innovation.",
    },
    {
      title: "Growth",
      description: "We invest in our people, providing opportunities for continuous learning and career advancement.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted/30 via-background to-muted/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Users className="h-3 w-3 mr-1" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Build Your Career at APACHE Financial</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Join a team of dedicated professionals committed to delivering exceptional financial services. We're
              looking for talented individuals who share our passion for excellence and client success.
            </p>
            <Button size="lg" className="text-lg px-8">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join APACHE Financial?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're more than just a workplace—we're a community of professionals dedicated to making a difference in
              our clients' financial lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Help individuals and businesses achieve their financial goals and build lasting prosperity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work alongside experienced professionals in a supportive environment that values teamwork.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advance your career with clear pathways for promotion and leadership development opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Benefits Package</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We invest in our team members' well-being and success with a robust benefits program designed to support
              you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These principles guide everything we do and shape the culture we've built at APACHE Financial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our current opportunities and find the perfect role to advance your career in financial services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline" className="gap-1">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                    <Button className="md:flex-shrink-0">Apply Now</Button>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've designed a straightforward, transparent hiring process to help you showcase your talents and learn
              about our team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply</h3>
              <p className="text-muted-foreground leading-relaxed">
                Submit your application and resume through our online portal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Review</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team reviews your qualifications and experience carefully.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview</h3>
              <p className="text-muted-foreground leading-relaxed">
                Meet with our team to discuss your skills and career goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Offer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive your offer and join the APACHE Financial family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                View All Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
