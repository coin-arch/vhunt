import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Note: Users should add their Mapbox token as a secret
const MAPBOX_TOKEN = "pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNtNTdqa2t6bzBnZTQybHF4Y21zOXVqNjcifQ.X8VqhZ0G3bT_RFqQRqPrOQ";

const GlobalMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Set explicit dimensions for Mapbox
    if (mapContainer.current) {
      mapContainer.current.style.width = "100%";
      mapContainer.current.style.height = "100%";
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v11",
        zoom: 11,
        center: [78.4867, 17.3850], // Hyderabad, India
        pitch: 30,
      });

      // Handle map errors
      map.current.on("error", (e: any) => {
        console.error("Mapbox error:", e);
        setMapError("Failed to load map. Please check your Mapbox token.");
      });

      // Wait for map to load before adding controls and markers
      map.current.on("load", () => {
        if (!map.current) return;

        // Add navigation controls
        map.current.addControl(
          new mapboxgl.NavigationControl({
            visualizePitch: true,
          }),
          "top-right"
        );

        // Enable scroll zoom for city-level navigation
        map.current.scrollZoom.enable();

        // Add markers for locations
        const locations = [
          { name: "Hyderabad", coords: [78.4867, 17.3850] },
          { name: "India", coords: [77.209, 28.6139] },
          { name: "Middle East", coords: [51.5074, 25.2048] },
          { name: "South East Asia", coords: [100.5018, 13.7563] },
          { name: "Sri Lanka", coords: [79.8612, 6.9271] },
          { name: "Bangladesh", coords: [90.4125, 23.8103] },
        ];

        locations.forEach((location) => {
          const el = document.createElement("div");
          el.className = "marker";
          el.style.width = "20px";
          el.style.height = "20px";
          el.style.borderRadius = "50%";
          el.style.backgroundColor = "hsl(195, 100%, 45%)";
          el.style.border = "3px solid white";
          el.style.boxShadow = "0 0 20px hsl(195, 100%, 45%)";
          el.style.cursor = "pointer";

          new mapboxgl.Marker(el)
            .setLngLat(location.coords as [number, number])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div style="padding: 8px; font-weight: bold; color: hsl(215, 85%, 15%);">${location.name}</div>`
              )
            )
            .addTo(map.current!);
        });
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError("Failed to initialize map. Please check your Mapbox token.");
      return;
    }

    // Rotation animation (disabled for city-level view)
    // Uncomment below if you want globe rotation at low zoom levels
    /*
    const secondsPerRevolution = 180;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;
    let spinEnabled = false; // Disabled to keep focus on Hyderabad

    function spinGlobe() {
      if (!map.current) return;

      const zoom = map.current.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif =
            (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on("mousedown", () => {
      userInteracting = true;
    });

    map.current.on("dragstart", () => {
      userInteracting = true;
    });

    map.current.on("mouseup", () => {
      userInteracting = false;
      spinGlobe();
    });

    map.current.on("touchend", () => {
      userInteracting = false;
      spinGlobe();
    });

    map.current.on("moveend", () => {
      spinGlobe();
    });

    spinGlobe();
    */

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section id="map" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Global Reach
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With operations spanning across continents, we bring digital
            excellence to businesses worldwide
          </p>
        </div>

        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-border/50 animate-scale-in">
          <div 
            ref={mapContainer} 
            className="absolute inset-0 w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent z-10" />
          {mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/90 z-20">
              <div className="text-center p-4">
                <p className="text-destructive font-semibold mb-2">{mapError}</p>
                <p className="text-sm text-muted-foreground">
                  Get a free token from{" "}
                  <a 
                    href="https://account.mapbox.com/access-tokens/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mapbox
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Operating in:</span>{" "}
            India • Middle East Asia • South East Asia • Sri Lanka • Bangladesh
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Next expansion targets: Africa, Latin America, and European regions
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
