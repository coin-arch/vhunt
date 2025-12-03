import { Card, CardContent } from "@/components/ui/card";
import { Globe, MapPin, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

const GlobalMap = () => {
  // Google Maps embed centered on Hyderabad, India (VHunt Headquarters)
  // Coordinates: 17.3850° N, 78.4867° E
  // Zoom level: 12 (city level view)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.348639417!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebddfb%3A0x9bb1ceaac71ff000!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  const locations = [
    {
      country: "India",
      city: "Hyderabad",
      status: "Headquarters",
      clients: "200+",
      icon: "🇮🇳",
    },
    {
      country: "Middle East Asia",
      city: "Dubai",
      status: "Active",
      clients: "150+",
      icon: "🇦🇪",
    },
    {
      country: "South East Asia",
      city: "Singapore",
      status: "Active",
      clients: "120+",
      icon: "🇸🇬",
    },
    {
      country: "Sri Lanka",
      city: "Colombo",
      status: "Active",
      clients: "80+",
      icon: "🇱🇰",
    },
    {
      country: "Bangladesh",
      city: "Dhaka",
      status: "Active",
      clients: "60+",
      icon: "🇧🇩",
    },
  ];

  const stats = [
    { label: "Countries", value: "15+", icon: Globe },
    { label: "Active Clients", value: "500+", icon: Users },
    { label: "Years Experience", value: "10+", icon: Clock },
    { label: "Growth Rate", value: "30-40%", icon: TrendingUp },
  ];

  const upcomingLocations = [
    "Africa",
    "Latin America",
    "European Regions",
  ];

  return (
    <section id="map" className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Global Reach
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With operations spanning across continents, we bring digital
            excellence to businesses worldwide
          </p>
        </div>

        {/* Main Content: Map + Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map Section - Half Width */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-border/50 animate-zoom-in group hover:shadow-glow transition-all duration-500">
            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-accent opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 animate-pulse-glow" />
            
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full transition-transform duration-700 group-hover:scale-[1.02] relative z-10"
              title="VHunt Global Reach Map - Hyderabad Office"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent z-10" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/30 rounded-2xl transition-all duration-500 z-20 pointer-events-none" />
            
            {/* Floating location pin indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none animate-float-gentle">
              <div className="w-6 h-6 bg-accent rounded-full border-4 border-white shadow-glow animate-pulse-glow" />
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Headquarters Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 text-3xl">
                    🇮🇳
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-bold text-foreground">Headquarters</h3>
                    </div>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      Hyderabad, Telangana
                    </p>
                    <p className="text-muted-foreground text-sm">
                      India
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      <span className="font-semibold text-foreground">200+</span> active clients
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Global Locations
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.slice(1).map((location, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {location.icon}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {location.city}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {location.country}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-medium">
                      {location.status}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {location.clients} clients
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Locations */}
        <Card className="bg-gradient-accent/10 border-accent/20 backdrop-blur-sm animate-fade-in-up">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Expanding Globally
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're continuously expanding our reach to serve clients worldwide
                </p>
                <div className="flex flex-wrap gap-2">
                  {upcomingLocations.map((location, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2 text-accent">
                <ArrowRight className="h-6 w-6 animate-pulse" />
                <span className="text-lg font-semibold">Coming Soon</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Operating in:</span>{" "}
            India • Middle East Asia • South East Asia • Sri Lanka • Bangladesh
          </p>
          <p className="text-xs text-muted-foreground">
            <a
              href="https://www.google.com/maps/search/Hyderabad,+Telangana,+India/@17.3850,78.4867,12z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
