import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content:
        "VHunt transformed our digital presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. Highly recommended!",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Global Solutions",
      content:
        "Working with VHunt has been a game-changer. Their PPC campaigns delivered exceptional ROI, and their team is always responsive and professional.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "EcoBrand",
      content:
        "The content marketing strategies from VHunt helped us build a strong brand presence. Our engagement rates have skyrocketed, and we've seen significant growth in our customer base.",
      rating: 5,
      image: "👩‍💻",
    },
    {
      name: "David Thompson",
      role: "VP of Marketing",
      company: "InnovateCorp",
      content:
        "VHunt's comprehensive digital marketing approach is outstanding. They understand our business goals and deliver results that exceed expectations every time.",
      rating: 5,
      image: "👨‍💻",
    },
    {
      name: "Lisa Anderson",
      role: "CMO",
      company: "RetailMax",
      content:
        "Their social media marketing expertise helped us connect with our audience in ways we never imagined. The viral campaigns they created boosted our brand awareness significantly.",
      rating: 5,
      image: "👩‍🎨",
    },
    {
      name: "James Wilson",
      role: "Business Owner",
      company: "LocalBiz Pro",
      content:
        "As a small business, we needed cost-effective solutions. VHunt delivered exactly that - professional services at competitive prices with measurable results.",
      rating: 5,
      image: "👨‍🎓",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 lg:py-32 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">What Our </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to
                say about working with VHunt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-accent/30" />
                  </div>

                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "10+", label: "Years Experience" },
                { value: "15+", label: "Countries Served" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;

