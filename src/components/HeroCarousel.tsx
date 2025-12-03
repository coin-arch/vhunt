import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Search, TrendingUp, Share2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import seoImage from "@/assets/carousel-seo.jpg";
import socialImage from "@/assets/carousel-social.jpg";
import contentImage from "@/assets/carousel-content.jpg";

const HeroCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const slides = [
    {
      title: "SEO Excellence",
      description: "Dominate search rankings with data-driven SEO strategies that deliver measurable results",
      icon: Search,
      image: seoImage,
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Social Media Mastery",
      description: "Engage audiences across all platforms with compelling content and strategic campaigns",
      icon: Share2,
      image: socialImage,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Viral Content Marketing",
      description: "Create content that resonates, spreads, and converts your target audience effectively",
      icon: TrendingUp,
      image: contentImage,
      color: "from-green-500/20 to-cyan-500/20",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} backdrop-blur-sm`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                      <div className="space-y-4 animate-fade-in-up">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow">
                          <slide.icon className="h-8 w-8 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-5xl font-bold text-foreground">
                          {slide.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                          {slide.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="flex gap-2 pt-4">
                          {slides.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full transition-all duration-300 ${
                                i === index
                                  ? "w-12 bg-accent"
                                  : "w-8 bg-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-accent/50 hover:bg-accent hover:text-white transition-all" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-accent/50 hover:bg-accent hover:text-white transition-all" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
