export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/black-professional-tax-team-office.jpg"
          alt="APACHE Financial Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  )
}
