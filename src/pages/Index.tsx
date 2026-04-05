import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TrustBar from "@/components/TrustBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroBanner />
    <TrustBar />
    <FeaturedProducts />
    <Footer />
  </div>
);

export default Index;
