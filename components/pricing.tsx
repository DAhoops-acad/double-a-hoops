import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Start <span className="text-primary">Free</span>, Grow Strong
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Try your first session completely free. No commitment, no pressure—just basketball.
          </p>
        </div>

        {/* Centered Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="relative bg-card border-2 border-primary rounded-2xl p-8 shadow-lg shadow-primary/10">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-current" />
                Most Popular
              </div>
            </div>

            {/* Card Header */}
            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold text-foreground mb-2">Training Sessions</h3>
              <p className="text-muted-foreground">1-on-1 or small group training</p>
            </div>

            {/* Pricing */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-8">
              <div className="flex items-baseline justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">First Session</div>
                  <div className="text-5xl font-bold text-primary">$0</div>
                  <div className="text-sm text-muted-foreground">FREE</div>
                </div>
                <div className="text-2xl text-muted-foreground">→</div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">After That</div>
                  <div className="text-5xl font-bold text-foreground">$20</div>
                  <div className="text-sm text-muted-foreground">per session</div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                50% of every session goes to charity
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {[
                "60-minute dedicated training session",
                "Personalized skill assessment",
                "Progress tracking & feedback",
                "Flexible scheduling",
                "All ages & skill levels welcome",
                "Equipment provided",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6">
              <a href="#contact">Claim Your Free Session</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
