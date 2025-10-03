export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Angled background */}
      <div className="absolute inset-0 bg-primary transform -skew-y-2 origin-top-left" />

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-foreground mb-16">EXPLORE US</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="text-6xl font-bold text-primary mb-4">15+</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Years of Experience
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="text-6xl font-bold text-primary mb-4">25+</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Professional Coaches
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="text-6xl font-bold text-primary mb-4">5</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Nationwide Offices
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="text-6xl font-bold text-primary mb-4">5000+</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Satisfied Customers
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">SAVE TAX +</div>
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">BUILD WEALTH</div>
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground">= ELSS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
