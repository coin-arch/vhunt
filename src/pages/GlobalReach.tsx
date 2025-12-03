import Navbar from "@/components/Navbar";
import GlobalMap from "@/components/GlobalMap";
import Footer from "@/components/Footer";

const GlobalReachPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <GlobalMap />
      </div>
      <Footer />
    </div>
  );
};

export default GlobalReachPage;

