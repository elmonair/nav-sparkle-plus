import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TrustBar from "@/components/TrustBar";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroBanner />
    <TrustBar />
    <GameGrid />
    <Footer />
  </div>
);

export default Index;
