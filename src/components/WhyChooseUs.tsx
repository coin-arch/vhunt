import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Globe, Users, TrendingUp, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Recognized for outstanding digital marketing results and client satisfaction",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across 15+ countries with localized strategies for maximum impact",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "10+ years of combined experience with proven track records in digital marketing",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "30-40% year-over-year growth for our clients with measurable ROI",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "500+ satisfied clients who trust us with their digital marketing needs",
    },
    {
      icon: CheckCircle2,
      title: "Comprehensive Solutions",
      description: "Single window for all your digital marketing requirements under one roof",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              VHunt?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another digital marketing agency. We're your partners in growth,
            committed to delivering exceptional results that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Years Experience", suffix: "" },
            { value: "500+", label: "Happy Clients", suffix: "" },
            { value: "98%", label: "Success Rate", suffix: "" },
            { value: "15+", label: "Countries", suffix: "" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

