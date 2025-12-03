import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const ServiceCard = ({ title, description, image, delay = 0 }: ServiceCardProps) => {
  return (
    <Card
      className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-card hover:shadow-accent/10 animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
