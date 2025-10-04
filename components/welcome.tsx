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
              family-owned-and-operated financial provider, is committed to providing the{" "}
              <span className="font-semibold text-foreground">Best Tax Service in Miami Florida</span> and business consulting to our
              clients by focusing on quality, value, and their specific needs. For almost a decade, our experienced and
              knowledgeable accountants have been helping individuals and businesses navigate the challenging times.{" "}
              <span className="font-semibold text-foreground">Client satisfaction is always our priority.</span>
            </p>

            <p>
              We promise to be proactive in finding the best solutions for each particular situation. Over the years,
              FCI has evolved into a successful practice by providing the kind of support you may not find at other{" "}
              <span className="font-semibold text-foreground">tax accounting services near me</span>.
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
          <span className="text-2xl font-bold text-primary">Miami Florida</span>
        </div>
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          +1 786-471-1242
        </Button>
      </div>
    </section>
  )
}
