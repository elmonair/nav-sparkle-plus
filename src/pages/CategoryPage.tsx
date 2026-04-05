import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { games } from "@/data/games";
import { getProducts } from "@/data/products";
import GameCard from "@/components/GameCard";
import ProductCard from "@/components/ProductCard";

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
  "strong-8k": "8K quality IPTV streaming with 10,000+ channels worldwide.",
  trex: "Reliable IPTV service with 8,000+ channels and VOD content.",
  neo: "Premium IPTV with 12,000+ channels and crystal-clear streaming.",
  crystal: "Crystal-clear IPTV streaming with 6,000+ channels.",
  playstation: "PlayStation Store gift cards for games, add-ons, and subscriptions.",
  xbox: "Xbox gift cards for games and subscriptions.",
  nintendo: "Nintendo eShop gift cards.",
  spotify: "Spotify Premium plans — ad-free music streaming.",
  youtube: "YouTube Premium — ad-free videos and YouTube Music.",
  netflix: "Netflix Premium — 4K streaming on multiple screens.",
  shahid: "Shahid VIP — Arabic and international entertainment on demand.",
  "flash-sales": "Limited-time flash sales — grab them before they're gone!",
  "weekly-deals": "Fresh deals every week.",
  "under-10": "Great games for under $10.",
  "under-20": "Premium games for under $20.",
  bundles: "Save more with game bundles.",
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

  // Games & deals use the existing games data
  const isGamesCategory = category === "games" || category === "deals";

  const filteredGames = isGamesCategory
    ? games.filter((game) => {
        if (category === "games" && subcategory) {
          return game.category.toLowerCase() === subcategory.toLowerCase();
        }
        if (category === "deals") {
          if (subcategory === "under-10") return game.price < 10;
          if (subcategory === "under-20") return game.price < 20;
          if (subcategory === "bundles")
            return game.title.toLowerCase().includes("edition") || game.title.toLowerCase().includes("pack");
          return game.discount > 50;
        }
        return true;
      })
    : [];

  // All other categories use the central products data
  const categoryProducts = !isGamesCategory && category ? getProducts(category, subcategory) : [];

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

        {/* Games / Deals grid */}
        {isGamesCategory && filteredGames.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        {isGamesCategory && filteredGames.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No items found in this category yet.</p>
            <p className="text-sm mt-2">Check back soon for new additions!</p>
          </div>
        )}

        {/* Product grid for gift-cards, subscriptions, iptv */}
        {!isGamesCategory && categoryProducts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!isGamesCategory && categoryProducts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            {!subcategory ? (
              <p className="text-lg">Browse subcategories above to find what you're looking for.</p>
            ) : (
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎮</span>
                </div>
                <p className="text-lg font-medium text-foreground">{subTitle}</p>
                <p className="text-sm">{description}</p>
                <p className="text-xs">Products coming soon!</p>
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
