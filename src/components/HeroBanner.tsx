import { motion } from "framer-motion";
import { Zap, Tv, CreditCard, Music, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-digital-store.jpg";

const highlights = [
  { icon: Tv, label: "IPTV" },
  { icon: Music, label: "Subscriptions" },
  { icon: CreditCard, label: "Gift Cards" },
  { icon: Gamepad2, label: "Game Keys" },
];

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Digital store" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Instant Digital Delivery</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-foreground">
            Your One-Stop{" "}
            <span className="text-gradient-primary">Digital Store</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            IPTV subscriptions, streaming services, gift cards, and game keys — all at unbeatable prices with instant delivery.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/category/iptv">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-8">
                Browse IPTV
              </Button>
            </Link>
            <Link to="/category/gift-cards">
              <Button size="lg" variant="outline" className="font-bold border-border hover:bg-muted px-8">
                Gift Cards
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-2">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
