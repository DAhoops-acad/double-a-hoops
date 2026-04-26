import { Mail, Calendar, CheckCircle, MessageSquare } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfsRdj0880eZiMh1a0esgsMETeU13QDQJMK7eBRrTzzteNe5A/viewform?embedded=true";

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-4">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get Started</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Ready to <span className="text-primary">Elevate</span> Your Game?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form and we&apos;ll reach out to schedule your FREE first session. Let&apos;s start building a better basketball player today.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium">doubleahoopsacademy@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                  <div className="text-foreground font-medium">Weekdays 4-8pm, Weekends 9am-6pm</div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {["Free First Session", "No Commitment", "All Ages Welcome"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Google Form Embed */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="700"
              className="border-0"
              title="Book a Session - Double A Hoops Academy"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
