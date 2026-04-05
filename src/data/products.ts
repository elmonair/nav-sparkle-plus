import psGiftCard from "@/assets/ps-giftcard.jpg";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import game6 from "@/assets/game-6.jpg";

export type Product = {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  description: string;
  badge?: string;
};

export const products: Product[] = [
  // ── Gift Cards > PlayStation ──
  { id: "ps-gc-10", title: "PlayStation Gift Card €10", category: "gift-cards", subcategory: "playstation", price: 10.00, image: psGiftCard, description: "PSN Store Credit" },
  { id: "ps-gc-20", title: "PlayStation Gift Card €20", category: "gift-cards", subcategory: "playstation", price: 20.00, image: psGiftCard, description: "PSN Store Credit" },
  { id: "ps-gc-50", title: "PlayStation Gift Card €50", category: "gift-cards", subcategory: "playstation", price: 50.00, image: psGiftCard, description: "PSN Store Credit", badge: "Best Seller" },
  { id: "ps-gc-100", title: "PlayStation Gift Card €100", category: "gift-cards", subcategory: "playstation", price: 100.00, image: psGiftCard, description: "PSN Store Credit" },

  // ── Gift Cards > Steam ──
  { id: "steam-gc-10", title: "Steam Gift Card €10", category: "gift-cards", subcategory: "steam", price: 10.00, image: game1, description: "Steam Wallet Credit" },
  { id: "steam-gc-20", title: "Steam Gift Card €20", category: "gift-cards", subcategory: "steam", price: 20.00, image: game1, description: "Steam Wallet Credit" },
  { id: "steam-gc-50", title: "Steam Gift Card €50", category: "gift-cards", subcategory: "steam", price: 50.00, image: game1, description: "Steam Wallet Credit", badge: "Best Seller" },
  { id: "steam-gc-100", title: "Steam Gift Card €100", category: "gift-cards", subcategory: "steam", price: 100.00, image: game1, description: "Steam Wallet Credit" },

  // ── Gift Cards > Xbox ──
  { id: "xbox-gc-10", title: "Xbox Gift Card €10", category: "gift-cards", subcategory: "xbox", price: 10.00, image: game3, description: "Xbox Store Credit" },
  { id: "xbox-gc-25", title: "Xbox Gift Card €25", category: "gift-cards", subcategory: "xbox", price: 25.00, image: game3, description: "Xbox Store Credit" },
  { id: "xbox-gc-50", title: "Xbox Gift Card €50", category: "gift-cards", subcategory: "xbox", price: 50.00, image: game3, description: "Xbox Store Credit" },

  // ── Gift Cards > Nintendo ──
  { id: "nintendo-gc-15", title: "Nintendo eShop Card €15", category: "gift-cards", subcategory: "nintendo", price: 15.00, image: game5, description: "Nintendo eShop Credit" },
  { id: "nintendo-gc-25", title: "Nintendo eShop Card €25", category: "gift-cards", subcategory: "nintendo", price: 25.00, image: game5, description: "Nintendo eShop Credit" },
  { id: "nintendo-gc-50", title: "Nintendo eShop Card €50", category: "gift-cards", subcategory: "nintendo", price: 50.00, image: game5, description: "Nintendo eShop Credit" },

  // ── Gift Cards > Epic Games ──
  { id: "epic-gc-10", title: "Epic Games Gift Card €10", category: "gift-cards", subcategory: "epic-games", price: 10.00, image: game4, description: "Epic Games Store Credit" },
  { id: "epic-gc-25", title: "Epic Games Gift Card €25", category: "gift-cards", subcategory: "epic-games", price: 25.00, image: game4, description: "Epic Games Store Credit" },

  // ── Subscriptions ──
  { id: "game-pass-1m", title: "Xbox Game Pass Ultimate – 1 Month", category: "subscriptions", subcategory: "game-pass", price: 14.99, image: game3, description: "Access hundreds of games on console, PC, and cloud.", badge: "Best Seller" },
  { id: "game-pass-3m", title: "Xbox Game Pass Ultimate – 3 Months", category: "subscriptions", subcategory: "game-pass", price: 39.99, originalPrice: 44.97, discount: 11, image: game3, description: "3-month Game Pass Ultimate membership." },
  { id: "ps-plus-1m", title: "PS Plus Essential – 1 Month", category: "subscriptions", subcategory: "ps-plus", price: 9.99, image: psGiftCard, description: "Online multiplayer and monthly free games." },
  { id: "ps-plus-12m", title: "PS Plus Essential – 12 Months", category: "subscriptions", subcategory: "ps-plus", price: 59.99, originalPrice: 119.88, discount: 50, image: psGiftCard, description: "Full year of PS Plus Essential.", badge: "Best Value" },
  { id: "ea-play-1m", title: "EA Play – 1 Month", category: "subscriptions", subcategory: "ea-play", price: 4.99, image: game2, description: "Access EA's vault of games and trials." },
  { id: "ea-play-12m", title: "EA Play – 12 Months", category: "subscriptions", subcategory: "ea-play", price: 29.99, originalPrice: 59.88, discount: 50, image: game2, description: "Full year of EA Play." },
  { id: "ubi-plus-1m", title: "Ubisoft+ – 1 Month", category: "subscriptions", subcategory: "ubisoft-plus", price: 14.99, image: game4, description: "Access Ubisoft's full game library." },
  { id: "nintendo-online-3m", title: "Nintendo Switch Online – 3 Months", category: "subscriptions", subcategory: "nintendo-online", price: 7.99, image: game5, description: "Online play and classic game library." },
  { id: "nintendo-online-12m", title: "Nintendo Switch Online – 12 Months", category: "subscriptions", subcategory: "nintendo-online", price: 19.99, originalPrice: 31.96, discount: 37, image: game5, description: "Full year of Nintendo Switch Online." },

  // ── IPTV ──
  { id: "iptv-live-1m", title: "Live TV – 1 Month", category: "iptv", subcategory: "live-tv", price: 9.99, image: game6, description: "Stream live television channels worldwide.", badge: "New" },
  { id: "iptv-live-3m", title: "Live TV – 3 Months", category: "iptv", subcategory: "live-tv", price: 24.99, originalPrice: 29.97, discount: 17, image: game6, description: "3-month live TV streaming package." },
  { id: "iptv-movies-1m", title: "Movies & Series – 1 Month", category: "iptv", subcategory: "movies-series", price: 12.99, image: game6, description: "Thousands of movies and TV series on demand." },
  { id: "iptv-sports-1m", title: "Sports Channels – 1 Month", category: "iptv", subcategory: "sports-channels", price: 14.99, image: game6, description: "Dedicated sports channels and live events.", badge: "New" },
  { id: "iptv-premium-1m", title: "Premium Package – 1 Month", category: "iptv", subcategory: "premium-packages", price: 24.99, image: game6, description: "All channels, movies, series, and sports in one package.", badge: "Best Value" },
  { id: "iptv-premium-6m", title: "Premium Package – 6 Months", category: "iptv", subcategory: "premium-packages", price: 119.99, originalPrice: 149.94, discount: 20, image: game6, description: "6-month premium IPTV package." },
  { id: "iptv-family-1m", title: "Family Plan – 1 Month", category: "iptv", subcategory: "family-plans", price: 19.99, image: game6, description: "Up to 4 simultaneous streams for the whole family." },
];

/** Filter products by category and optional subcategory */
export function getProducts(category: string, subcategory?: string): Product[] {
  return products.filter(
    (p) => p.category === category && (!subcategory || p.subcategory === subcategory)
  );
}
