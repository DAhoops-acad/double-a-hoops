import { Target, Brain, Flame, Crosshair, TrendingUp, Shield } from "lucide-react";

const specialties = [
  {
    icon: Target,
    title: "Technical Skills",
    description:
      "Master the fundamentals with focused drills on ball handling, shooting mechanics, footwork, and finishing at the rim. We break down every move to build muscle memory.",
    features: ["Ball Handling Mastery", "Shooting Form & Accuracy", "Footwork Fundamentals", "Finishing Techniques"],
  },
  {
    icon: Brain,
    title: "Game IQ",
    description:
      "Develop basketball intelligence through film study, decision-making exercises, and situational awareness training. See the game before it happens.",
    features: ["Court Vision Training", "Decision Making", "Defensive Reads", "Offensive Spacing"],
  },
  {
    icon: Flame,
    title: "Mental Toughness",
    description:
      "Build the confidence and resilience needed to perform under pressure. Learn to embrace challenges and develop a championship mindset.",
    features: ["Pressure Performance", "Confidence Building", "Goal Setting", "Competition Mindset"],
  },
];

export function TrainingSpecialties() {
  return (
    <section id="training" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-4">
            <Crosshair className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Our Training Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Complete Player <span className="text-primary">Development</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We don&apos;t just teach basketball—we develop well-rounded athletes who excel both on and off the court.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={specialty.title}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{specialty.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{specialty.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {specialty.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: TrendingUp, label: "Progressive Training", desc: "Skills build on each session" },
            { icon: Shield, label: "Safe Environment", desc: "Positive, supportive atmosphere" },
            { icon: Target, label: "Personal Attention", desc: "Small groups, big results" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-4 bg-secondary/50 rounded-lg p-4">
                <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
