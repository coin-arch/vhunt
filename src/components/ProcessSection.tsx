import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Analysis",
      description: "We dive deep into your business, market, and competitors to understand your unique needs and opportunities.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy Development",
      description: "Our experts craft a customized digital marketing strategy aligned with your business goals and target audience.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementation",
      description: "We execute your strategy with precision, using cutting-edge tools and best practices to maximize results.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Optimization & Growth",
      description: "Continuous monitoring, analysis, and optimization ensure your campaigns improve and scale over time.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              How We Work
            </span>{" "}
            <span className="text-foreground">With You</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process ensures your digital marketing success from
            strategy to execution and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-accent opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={index} className="relative">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in-up h-full">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 text-6xl font-bold text-accent/10">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {!isLast && (
                  <div className="hidden lg:block absolute top-24 -right-3 w-6 h-0.5 bg-gradient-accent opacity-20 z-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

