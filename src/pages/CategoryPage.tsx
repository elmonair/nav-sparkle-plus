import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { games } from "@/data/games";
import GameCard from "@/components/GameCard";

const categoryTitles: Record<string, string> = {
  games: "Games",
  iptv: "IPTV",
  "gift-cards": "Gift Cards",
  subscriptions: "Subscriptions",
  deals: "Deals",
};

const subcategoryDescriptions: Record<string, string> = {
  // Games
  action: "High-octane action games with intense combat and thrilling gameplay.",
  adventure: "Explore vast worlds and uncover hidden stories.",
  racing: "Feel the speed with the best racing titles.",
  strategy: "Outsmart your opponents with tactical gameplay.",
  survival: "Test your limits in harsh survival environments.",
  horror: "Face your fears in spine-chilling horror games.",
  rpg: "Immerse yourself in deep role-playing experiences.",
  sports: "Compete in your favorite sports virtually.",
  // IPTV
  "live-tv": "Stream live television channels from around the world.",
  "movies-series": "Access thousands of movies and TV series on demand.",
  "sports-channels": "Never miss a game with dedicated sports channels.",
  "premium-packages": "Get the best content with premium IPTV packages.",
  "family-plans": "Affordable plans for the whole family.",
  // Gift Cards
  steam: "Steam wallet gift cards for PC gaming.",
  playstation: "PlayStation Store gift cards.",
  xbox: "Xbox gift cards for games and subscriptions.",
  nintendo: "Nintendo eShop gift cards.",
  "epic-games": "Epic Games Store gift cards.",
  // Subscriptions
  "game-pass": "Xbox Game Pass subscriptions.",
  "ps-plus": "PlayStation Plus memberships.",
  "ea-play": "EA Play subscriptions.",
  "ubisoft-plus": "Ubisoft+ subscriptions.",
  "nintendo-online": "Nintendo Switch Online memberships.",
  // Deals
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

  // Filter games based on category/subcategory when applicable
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

        {showGames && filteredGames.length > 0 ? (
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
