import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Founded in 2012 with a vision for digital excellence",
    "Sixth year of lucrative growth journey",
    "30-40% year-over-year revenue growth",
    "Operations across 5+ countries and expanding",
    "Digital marketing experts with proven results",
    "Single window for all digital requirements",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">We Hunt The </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Best Digital Solutions
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              An advanced technology company devoted to delivering the best
              quality digital marketing approaches. We are digital marketing
              experts offering a single window for all your digital growth
              needs.
            </p>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Founded in 2012, VHunt has touched the sixth year of its
                lucrative journey. As a bootstrapped firm, the company has
                consistently maintained a 30-40% growth in revenue
                year-over-year. Today, VHunt's operations span across India,
                Middle East Asia, South East Asia, Sri Lanka, and Bangladesh
                territories.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-muted-foreground italic">
              "In order to explore more markets, the company's next targets are
              to expand operations into Africa, Latin America, and European
              regions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
