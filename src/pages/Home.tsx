import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsPreview />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;

