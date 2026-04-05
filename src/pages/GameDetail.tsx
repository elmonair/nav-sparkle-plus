import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Star, Calendar, Monitor, Shield, Clock } from "lucide-react";
import { games } from "@/data/games";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GameDetail = () => {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Game not found</h1>
          <Link to="/"><Button variant="secondary">Back to store</Button></Link>
        </div>
      </div>
    );
  }

  const allImages = [game.image, ...game.screenshots.filter((s) => s !== game.image)];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back link */}
      <div className="container pt-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to store
        </Link>
      </div>

      {/* Main content */}
      <div className="container py-8">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Left — images */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-card">
              <img
                src={allImages[selectedImage]}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`shrink-0 w-24 h-14 rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — buy panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{game.platform}</span>
                <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{game.category}</span>
              </div>
              <h1 className="text-3xl font-black text-foreground">{game.title}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium text-foreground">{game.rating}</span>
                </div>
                <span>·</span>
                <span>{game.developer}</span>
              </div>
            </div>

            {/* Price card */}
            <div className="rounded-lg bg-card border border-border p-5 space-y-4">
              <div className="flex items-end gap-3">
                {game.discount > 0 && (
                  <span className="bg-discount text-discount-foreground text-sm font-bold px-2.5 py-1 rounded">-{game.discount}%</span>
                )}
                <div>
                  {game.originalPrice > game.price && (
                    <span className="text-sm text-muted-foreground line-through block">€{game.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="text-3xl font-black text-primary">€{game.price.toFixed(2)}</span>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 gap-2" onClick={() => useCart.getState().addItem(game)}>
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { icon: Shield, text: "Money-back guarantee" },
                  { icon: Clock, text: "Instant delivery" },
                  { icon: Monitor, text: "Digital key" },
                  { icon: Calendar, text: game.releaseDate },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Developer</span><span className="text-foreground font-medium">{game.developer}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Publisher</span><span className="text-foreground font-medium">{game.publisher}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Release Date</span><span className="text-foreground font-medium">{game.releaseDate}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="about">
            <TabsList className="bg-secondary border border-border">
              <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">About</TabsTrigger>
              <TabsTrigger value="requirements" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">System Requirements</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-lg font-bold text-foreground">About This Game</h3>
                <p className="text-muted-foreground leading-relaxed">{game.description}</p>
              </div>
            </TabsContent>

            <TabsContent value="requirements" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
                {(["minimum", "recommended"] as const).map((tier) => (
                  <div key={tier} className="rounded-lg bg-card border border-border p-5 space-y-4">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                      {tier === "minimum" ? "Minimum" : "Recommended"}
                    </h4>
                    <dl className="space-y-3">
                      {Object.entries(game.systemRequirements[tier]).map(([key, value]) => (
                        <div key={key}>
                          <dt className="text-xs text-muted-foreground">{key}</dt>
                          <dd className="text-sm text-foreground font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GameDetail;
