import { Button } from "@/components/ui/button"

export function Welcome() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-primary"> Apache Financial Tax Preparation</span> Service
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">Apache Financial</span> – As a
              trusted, family-owned financial firm, we are dedicated to delivering the{" "}
              <span className="font-semibold text-foreground">best tax services in Miami, Florida</span>, along with tailored business consulting. Our focus is always on quality, value, and meeting the unique needs of each client. For nearly a decade, our team of experienced accountants has guided individuals and businesses through challenging times with expertise and care.{" "}
              <span className="font-semibold text-foreground">Client satisfaction remains our highest priority.</span>
            </p>

            <p>
              We take a proactive approach to finding the right solutions for every situation. Over the years, Apache Financial has grown into a thriving practice by offering the kind of personalized support that sets us apart from other{" "}
              <span className="font-semibold text-foreground">tax accounting services in the area</span>.
            </p>
          </div>

          <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            READ MORE
          </Button>
        </div>

        <div className="relative">
          <img
            src="/professional-accountant-working-at-desk-with-calcu.jpg"
            alt="Tax Professional at Work"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      <div className="mt-16 border-2 border-primary rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="text-2xl font-bold text-foreground">Best Tax Preparation Service </span>
          <span className="text-2xl font-bold text-primary">Lauderhill Florida</span>
        </div>
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          +1 757-746-5015
        </Button>
      </div>
    </section>
  )
}