import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  // Placeholder for partner logos - in a real app, these would be actual images
  const partners = [
    { name: "Partner 1", logo: "🏢" },
    { name: "Partner 2", logo: "🏭" },
    { name: "Partner 3", logo: "🏪" },
    { name: "Partner 4", logo: "🏬" },
    { name: "Partner 5", logo: "🏛️" },
    { name: "Partner 6", logo: "🏗️" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            We're proud to work with businesses of all sizes across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border-border/30 hover:border-border/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 flex items-center justify-center h-24">
                <div className="text-4xl opacity-60 hover:opacity-100 transition-opacity">
                  {partner.logo}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

