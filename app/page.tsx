import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ContactBar } from "@/components/contact-bar"
import { Welcome } from "@/components/welcome"
import { Stats } from "@/components/stats"
import { Reviews } from "@/components/reviews"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ContactBar />
      <Welcome />
      <Stats />
      <Reviews />
      <Services />
      <Footer />
    </main>
  )
}
