import { Star } from "lucide-react"

export function Reviews() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="text-primary">Reviews</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {/* Google Reviews */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold">Google</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="text-3xl font-bold mb-2">5.0</div>
            <div className="text-muted-foreground mb-6">Based on 110 reviews</div>

            <div className="space-y-4">
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-semibold text-primary">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold">John Davis</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Best accountant ever getting my taxes done! My taxes were done in no time and I got a great refund.
                  Highly recommend!
                </p>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-semibold text-primary">
                    MR
                  </div>
                  <div>
                    <div className="font-semibold">Maria Rodriguez</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Simone is such a great guy! I filed my taxes with him and he always... read more
                </p>
              </div>
            </div>
          </div>

          {/* Facebook Reviews */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-[#1877F2]">facebook</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="text-3xl font-bold mb-2">5.0</div>
            <div className="text-muted-foreground mb-6">Based on customer reviews</div>

            <div className="space-y-4">
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-semibold text-primary">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Kim</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Professional service and great attention to detail. They helped me maximize my deductions and saved me
                  money!
                </p>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-semibold text-primary">
                    TC
                  </div>
                  <div>
                    <div className="font-semibold">Thomas Chen</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Been using APACHE Financial for 3 years now. Always reliable and professional... read more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
