import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-game.jpg";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Featured game" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-lg space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Flash Sale — Up to 78% OFF</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-foreground">
            Dragon's Wrath: <span className="text-gradient-primary">Reborn</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The ultimate RPG experience. Claim your key at the lowest price and dive into an epic adventure.
          </p>

          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-8">
              Buy Now — €12.99
            </Button>
            <div className="text-muted-foreground">
              <span className="line-through text-sm">€59.99</span>
              <span className="ml-2 text-sm font-bold text-discount">-78%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
