export function Services() {
  const services = [
    {
      title: "Tax Preparation & Planning",
      description:
        "Expert tax preparation services for individuals and businesses. We ensure accuracy and maximize your refunds while staying compliant with all regulations.",
      image: "/tax-documents-calculator-and-pen-on-desk.jpg",
    },
    {
      title: "Accounting",
      description:
        "Comprehensive accounting services including bookkeeping, financial statements, and payroll management to keep your business running smoothly.",
      image: "/accounting-ledger-with-financial-charts-and-graphs.jpg",
    },
    {
      title: "Bookkeeping",
      description:
        "Professional bookkeeping services to maintain accurate financial records, track expenses, and provide insights into your business performance.",
      image: "/business-person-reviewing-financial-reports-and-ch.jpg",
    },
  ]

  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Our <span className="text-primary">Expertise</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        We provide comprehensive financial services tailored to your needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
