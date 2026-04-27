import { Award, Users, Quote } from "lucide-react";

const coaches = [
  {
    name: "Aarush",
    role: "Head Coach & Co-Founder",
    bio: "Aarush has been playing basketball for 3 years and is currently playing for HoopRight's AAU program. He was the leading scorer for the Mountain View Spartans Freshman team this past season. Aarush has a great passion for the game and is ready to share his love for basketball with the next generation.",
    specialties: ["Shooting Mechanics", "Ball Handling", "Game IQ"],
    initial: "A",
    image: "/images/coach-aarush.jpg",
  },
  {
    name: "Aneesh",
    role: "Head Coach & Co-Founder",
    bio: "Aneesh started playing basketball in 1st grade on his ymca team with friends but started taking it seriously when he joined an aau team in third grade. Aneesh fell in love with the game through watching the warriors winning championships and inspiring all Bay Area kids to pick up a basketball. Aneesh has always loved teaching and whether it’s academics or sports Aneesh can connect with kids and give them some of the knowledge he has.",
    specialties: ["Offensive Moves", "Defense", "Mental Toughness"],
    initial: "A",
    image: "/images/coach-aneesh.jpg",
  },
];

export function AboutCoaches() {
  return (
    <section id="coaches" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Meet the Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            About the <span className="text-primary">Coaches</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated mentors committed to developing the next generation of basketball players and leaders.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
            >
              {/* Avatar & Info */}
              <div className="flex items-start gap-4 mb-6">
                {coach.image ? (
                  <img
                    src={coach.image}
                    alt={`Coach ${coach.name}`}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {coach.initial}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-foreground">Coach {coach.name}</h3>
                  <p className="text-primary font-medium">{coach.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground leading-relaxed mb-6">{coach.bio}</p>

              {/* Specialties */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Specialties</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-secondary px-3 py-1 rounded-full text-sm text-muted-foreground"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote / Philosophy */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-secondary/50 border border-border rounded-xl p-8">
            <Quote className="w-10 h-10 text-primary mx-auto mb-4 opacity-50" />
            <blockquote className="text-xl sm:text-2xl text-foreground font-medium mb-4 text-balance">
              &quot;We believe every young player has the potential to be great. Our job is to
              help them discover it, develop it, and own it.&quot;
            </blockquote>
            <cite className="text-muted-foreground">— Coaches Aarush & Aneesh</cite>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "Discipline", desc: "The foundation of growth" },
            { value: "Respect", desc: "For the game & others" },
            { value: "Effort", desc: "100% every session" },
            { value: "Fun", desc: "Love what you do" },
          ].map((item) => (
            <div key={item.value} className="text-center">
              <div className="text-lg font-bold text-primary mb-1">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
