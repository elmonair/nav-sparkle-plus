import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import type { Game } from "@/data/games";
import psGiftCard from "@/assets/ps-giftcard.jpg";

const categoryTitles: Record<string, string> = {
  games: "Games",
  iptv: "IPTV",
  "gift-cards": "Gift Cards",
  subscriptions: "Subscriptions",
  deals: "Deals",
};

const subcategoryDescriptions: Record<string, string> = {
  action: "High-octane action games with intense combat and thrilling gameplay.",
  adventure: "Explore vast worlds and uncover hidden stories.",
  racing: "Feel the speed with the best racing titles.",
  strategy: "Outsmart your opponents with tactical gameplay.",
  survival: "Test your limits in harsh survival environments.",
  horror: "Face your fears in spine-chilling horror games.",
  rpg: "Immerse yourself in deep role-playing experiences.",
  sports: "Compete in your favorite sports virtually.",
  "live-tv": "Stream live television channels from around the world.",
  "movies-series": "Access thousands of movies and TV series on demand.",
  "sports-channels": "Never miss a game with dedicated sports channels.",
  "premium-packages": "Get the best content with premium IPTV packages.",
  "family-plans": "Affordable plans for the whole family.",
  steam: "Steam wallet gift cards for PC gaming.",
  playstation: "PlayStation Store gift cards for games, add-ons, and subscriptions.",
  xbox: "Xbox gift cards for games and subscriptions.",
  nintendo: "Nintendo eShop gift cards.",
  "epic-games": "Epic Games Store gift cards.",
  "game-pass": "Xbox Game Pass subscriptions.",
  "ps-plus": "PlayStation Plus memberships.",
  "ea-play": "EA Play subscriptions.",
  "ubisoft-plus": "Ubisoft+ subscriptions.",
  "nintendo-online": "Nintendo Switch Online memberships.",
  "flash-sales": "Limited-time flash sales — grab them before they're gone!",
  "weekly-deals": "Fresh deals every week.",
  "under-10": "Great games for under $10.",
  "under-20": "Premium games for under $20.",
  bundles: "Save more with game bundles.",
};

type GiftCardProduct = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: number;
};

const playstationGiftCards: GiftCardProduct[] = [
  { id: "ps-gc-10", title: "PlayStation Gift Card €10", subtitle: "PSN Store Credit", image: psGiftCard, price: 10.00 },
  { id: "ps-gc-20", title: "PlayStation Gift Card €20", subtitle: "PSN Store Credit", image: psGiftCard, price: 20.00 },
  { id: "ps-gc-50", title: "PlayStation Gift Card €50", subtitle: "PSN Store Credit", image: psGiftCard, price: 50.00 },
  { id: "ps-gc-100", title: "PlayStation Gift Card €100", subtitle: "PSN Store Credit", image: psGiftCard, price: 100.00 },
];

const GiftCardCard = ({ product }: { product: GiftCardProduct }) => {
  const addItem = useCart((s) => s.addItem);

  const handleAddToCart = () => {
    const asGame: Game = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      originalPrice: product.price,
      discount: 0,
      platform: "PlayStation",
      category: "Gift Card",
      rating: 5,
      description: product.subtitle,
      screenshots: [],
      releaseDate: "",
      developer: "Sony",
      publisher: "Sony Interactive Entertainment",
      systemRequirements: { minimum: {}, recommended: {} },
    };
    addItem(asGame);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group rounded-lg overflow-hidden bg-card card-glow hover:card-glow-hover transition-shadow duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          width={640}
          height={860}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-xs font-medium px-2 py-1 rounded-sm">
          PlayStation
        </div>
      </div>
      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-sm text-foreground truncate">{product.title}</h3>
        <p className="text-xs text-muted-foreground">{product.subtitle}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-primary">€{product.price.toFixed(2)}</span>
          <Button size="sm" variant="default" className="h-8 text-xs gap-1" onClick={handleAddToCart}>
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const CategoryPage = () => {
  const { category, subcategory } = useParams();

  const catTitle = category ? categoryTitles[category] || category : "";
  const subTitle = subcategory
    ? subcategory
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : null;

  const description = subcategory
    ? subcategoryDescriptions[subcategory] || `Browse our ${subTitle} collection.`
    : `Explore our full ${catTitle} catalog.`;

  const filteredGames = games.filter((game) => {
    if (category === "games" && subcategory) {
      return game.category.toLowerCase() === subcategory.toLowerCase();
    }
    if (category === "deals") {
      if (subcategory === "under-10") return game.price < 10;
      if (subcategory === "under-20") return game.price < 20;
      if (subcategory === "bundles") return game.title.toLowerCase().includes("edition") || game.title.toLowerCase().includes("pack");
      return game.discount > 50;
    }
    if (category === "games") return true;
    return false;
  });

  const showGames = category === "games" || category === "deals";
  const showPlayStationGiftCards = category === "gift-cards" && subcategory === "playstation";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span>/</span>
            <a href={`/category/${category}`} className="hover:text-foreground transition-colors">{catTitle}</a>
            {subTitle && (
              <>
                <span>/</span>
                <span className="text-foreground">{subTitle}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            {subTitle || catTitle}
          </h1>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>

        {showPlayStationGiftCards ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {playstationGiftCards.map((product) => (
              <GiftCardCard key={product.id} product={product} />
            ))}
          </div>
        ) : showGames && filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : showGames && filteredGames.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No items found in this category yet.</p>
            <p className="text-sm mt-2">Check back soon for new additions!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!subcategory ? (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                <p className="text-lg">Browse subcategories above to find what you're looking for.</p>
              </div>
            ) : (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <p className="text-lg font-medium text-foreground">{subTitle}</p>
                  <p className="text-sm">{description}</p>
                  <p className="text-xs">Products coming soon!</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
