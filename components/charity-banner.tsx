import { Heart, ExternalLink } from "lucide-react";

export function CharityBanner() {
  return (
    <section className="relative py-16 bg-primary/10 border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              <span className="text-primary">50%</span> of Profits Go to Vibha Charity
            </h2>
            <p className="text-muted-foreground text-lg">
              When you train with us, you&apos;re not just improving your game—you&apos;re helping
              children in need. Half of every dollar we earn supports{" "}
              <a
                href="https://vibha.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Vibha
                <ExternalLink className="w-4 h-4" />
              </a>
              , a nonprofit dedicated to educating underprivileged children.
            </p>
          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
}
