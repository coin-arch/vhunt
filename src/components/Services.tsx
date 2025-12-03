import ServiceCard from "./ServiceCard";
import contentImage from "@/assets/service-content.jpg";
import visionImage from "@/assets/service-vision.jpg";
import marketingImage from "@/assets/service-marketing.jpg";

const Services = () => {
  const services = [
    {
      title: "About Us",
      description:
        "Prominently a content aggregator and publishing company in the digital space, dedicated to providing world-class quality content to audiences worldwide.",
      image: contentImage,
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to become a single window for all your digital marketing requirements. Let's drive your online growth with the best marketing solutions and results.",
      image: visionImage,
    },
    {
      title: "Our Services",
      description:
        "SEO, PPC, SMO, SMM, Content Marketing, Viral Marketing, and comprehensive digital/online/website marketing are our core services that deliver measurable results.",
      image: marketingImage,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Why Choose
            </span>{" "}
            <span className="text-foreground">VHunt?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we can transform your digital presence with our
            comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
