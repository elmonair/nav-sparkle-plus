import psGiftCard from "@/assets/ps-giftcard.jpg";
import gcXbox from "@/assets/gc-xbox.jpg";
import gcNintendo from "@/assets/gc-nintendo.jpg";
import iptvStrong8k from "@/assets/iptv-strong8k.jpg";
import iptvTrex from "@/assets/iptv-trex.jpg";
import iptvNeo from "@/assets/iptv-neo.jpg";
import iptvCrystal from "@/assets/iptv-crystal.jpg";
import iptvMagnum from "@/assets/iptv-magnum.jpg";
import subSpotify from "@/assets/sub-spotify.jpg";
import subYoutube from "@/assets/sub-youtube.jpg";
import subNetflix from "@/assets/sub-netflix.jpg";
import subShahid from "@/assets/sub-shahid.jpg";

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
  // ── IPTV ──
  { id: "iptv-strong8k-1m", title: "Strong 8K IPTV – 1 Month", category: "iptv", subcategory: "strong-8k", price: 9.99, image: iptvStrong8k, description: "8K quality IPTV streaming with 10,000+ channels.", badge: "Best Seller" },
  { id: "iptv-strong8k-3m", title: "Strong 8K IPTV – 3 Months", category: "iptv", subcategory: "strong-8k", price: 24.99, originalPrice: 29.97, discount: 17, image: iptvStrong8k, description: "3-month 8K IPTV package." },
  { id: "iptv-strong8k-6m", title: "Strong 8K IPTV – 6 Months", category: "iptv", subcategory: "strong-8k", price: 44.99, originalPrice: 59.94, discount: 25, image: iptvStrong8k, description: "6-month 8K IPTV package." },
  { id: "iptv-strong8k-12m", title: "Strong 8K IPTV – 12 Months", category: "iptv", subcategory: "strong-8k", price: 79.99, originalPrice: 119.88, discount: 33, image: iptvStrong8k, description: "Full year of 8K IPTV streaming.", badge: "Best Value" },

  { id: "iptv-trex-1m", title: "Trex IPTV – 1 Month", category: "iptv", subcategory: "trex", price: 8.99, image: iptvTrex, description: "Reliable IPTV with 8,000+ channels and VOD." },
  { id: "iptv-trex-3m", title: "Trex IPTV – 3 Months", category: "iptv", subcategory: "trex", price: 22.99, originalPrice: 26.97, discount: 15, image: iptvTrex, description: "3-month Trex IPTV package." },
  { id: "iptv-trex-6m", title: "Trex IPTV – 6 Months", category: "iptv", subcategory: "trex", price: 39.99, originalPrice: 53.94, discount: 26, image: iptvTrex, description: "6-month Trex IPTV package." },
  { id: "iptv-trex-12m", title: "Trex IPTV – 12 Months", category: "iptv", subcategory: "trex", price: 69.99, originalPrice: 107.88, discount: 35, image: iptvTrex, description: "Full year of Trex IPTV.", badge: "Best Value" },

  { id: "iptv-neo-1m", title: "Neo IPTV – 1 Month", category: "iptv", subcategory: "neo", price: 9.99, image: iptvNeo, description: "Premium IPTV with 12,000+ channels worldwide." },
  { id: "iptv-neo-3m", title: "Neo IPTV – 3 Months", category: "iptv", subcategory: "neo", price: 25.99, originalPrice: 29.97, discount: 13, image: iptvNeo, description: "3-month Neo IPTV package." },
  { id: "iptv-neo-6m", title: "Neo IPTV – 6 Months", category: "iptv", subcategory: "neo", price: 45.99, originalPrice: 59.94, discount: 23, image: iptvNeo, description: "6-month Neo IPTV package." },
  { id: "iptv-neo-12m", title: "Neo IPTV – 12 Months", category: "iptv", subcategory: "neo", price: 82.99, originalPrice: 119.88, discount: 31, image: iptvNeo, description: "Full year of Neo IPTV.", badge: "Best Value" },

  { id: "iptv-crystal-1m", title: "Crystal IPTV – 1 Month", category: "iptv", subcategory: "crystal", price: 7.99, image: iptvCrystal, description: "Crystal-clear IPTV streaming with 6,000+ channels." },
  { id: "iptv-crystal-3m", title: "Crystal IPTV – 3 Months", category: "iptv", subcategory: "crystal", price: 19.99, originalPrice: 23.97, discount: 17, image: iptvCrystal, description: "3-month Crystal IPTV package." },
  { id: "iptv-crystal-6m", title: "Crystal IPTV – 6 Months", category: "iptv", subcategory: "crystal", price: 34.99, originalPrice: 47.94, discount: 27, image: iptvCrystal, description: "6-month Crystal IPTV package." },
  { id: "iptv-crystal-12m", title: "Crystal IPTV – 12 Months", category: "iptv", subcategory: "crystal", price: 59.99, originalPrice: 95.88, discount: 37, image: iptvCrystal, description: "Full year of Crystal IPTV.", badge: "Best Value" },

  { id: "iptv-magnum-1m", title: "Magnum IPTV – 1 Month", category: "iptv", subcategory: "magnum", price: 10.99, image: iptvMagnum, description: "Premium IPTV with 15,000+ channels and 4K support.", badge: "New" },
  { id: "iptv-magnum-3m", title: "Magnum IPTV – 3 Months", category: "iptv", subcategory: "magnum", price: 27.99, originalPrice: 32.97, discount: 15, image: iptvMagnum, description: "3-month Magnum IPTV package." },
  { id: "iptv-magnum-6m", title: "Magnum IPTV – 6 Months", category: "iptv", subcategory: "magnum", price: 49.99, originalPrice: 65.94, discount: 24, image: iptvMagnum, description: "6-month Magnum IPTV package." },
  { id: "iptv-magnum-12m", title: "Magnum IPTV – 12 Months", category: "iptv", subcategory: "magnum", price: 89.99, originalPrice: 131.88, discount: 32, image: iptvMagnum, description: "Full year of Magnum IPTV.", badge: "Best Value" },

  { id: "spotify-individual", title: "Spotify Premium Individual", category: "subscriptions", subcategory: "spotify", price: 9.99, image: subSpotify, description: "Ad-free music streaming for one account." },
  { id: "spotify-duo", title: "Spotify Premium Duo", category: "subscriptions", subcategory: "spotify", price: 14.99, image: subSpotify, description: "Two Premium accounts for couples under one roof." },
  { id: "spotify-family", title: "Spotify Premium Family", category: "subscriptions", subcategory: "spotify", price: 16.99, image: subSpotify, description: "Up to 6 Premium accounts for family members.", badge: "Best Value" },

  { id: "youtube-premium-1m", title: "YouTube Premium – 1 Month", category: "subscriptions", subcategory: "youtube", price: 13.99, image: subYoutube, description: "Ad-free videos, background play, and YouTube Music." },
  { id: "youtube-premium-12m", title: "YouTube Premium – 12 Months", category: "subscriptions", subcategory: "youtube", price: 139.99, originalPrice: 167.88, discount: 17, image: subYoutube, description: "Full year of YouTube Premium.", badge: "Best Value" },

  { id: "netflix-premium-1m", title: "Netflix Premium – 1 Month", category: "subscriptions", subcategory: "netflix", price: 22.99, image: subNetflix, description: "4K Ultra HD streaming on up to 4 screens." },
  { id: "netflix-premium-12m", title: "Netflix Premium – 12 Months", category: "subscriptions", subcategory: "netflix", price: 229.99, originalPrice: 275.88, discount: 17, image: subNetflix, description: "Full year of Netflix Premium.", badge: "Best Value" },

  { id: "shahid-vip-1m", title: "Shahid VIP – 1 Month", category: "subscriptions", subcategory: "shahid", price: 9.99, image: subShahid, description: "Arabic and international entertainment on demand." },
  { id: "shahid-vip-3m", title: "Shahid VIP – 3 Months", category: "subscriptions", subcategory: "shahid", price: 24.99, originalPrice: 29.97, discount: 17, image: subShahid, description: "3-month Shahid VIP subscription." },
  { id: "shahid-vip-12m", title: "Shahid VIP – 12 Months", category: "subscriptions", subcategory: "shahid", price: 79.99, originalPrice: 119.88, discount: 33, image: subShahid, description: "Full year of Shahid VIP.", badge: "Best Value" },

  // ── Gift Cards > PlayStation ──
  { id: "ps-gc-10", title: "PlayStation Gift Card €10", category: "gift-cards", subcategory: "playstation", price: 10.00, image: psGiftCard, description: "PSN Store Credit" },
  { id: "ps-gc-20", title: "PlayStation Gift Card €20", category: "gift-cards", subcategory: "playstation", price: 20.00, image: psGiftCard, description: "PSN Store Credit" },
  { id: "ps-gc-50", title: "PlayStation Gift Card €50", category: "gift-cards", subcategory: "playstation", price: 50.00, image: psGiftCard, description: "PSN Store Credit", badge: "Best Seller" },
  { id: "ps-gc-100", title: "PlayStation Gift Card €100", category: "gift-cards", subcategory: "playstation", price: 100.00, image: psGiftCard, description: "PSN Store Credit" },

  // ── Gift Cards > Xbox ──
  { id: "xbox-gc-10", title: "Xbox Gift Card €10", category: "gift-cards", subcategory: "xbox", price: 10.00, image: gcXbox, description: "Xbox Store Credit" },
  { id: "xbox-gc-20", title: "Xbox Gift Card €20", category: "gift-cards", subcategory: "xbox", price: 20.00, image: gcXbox, description: "Xbox Store Credit" },
  { id: "xbox-gc-50", title: "Xbox Gift Card €50", category: "gift-cards", subcategory: "xbox", price: 50.00, image: gcXbox, description: "Xbox Store Credit", badge: "Best Seller" },
  { id: "xbox-gc-100", title: "Xbox Gift Card €100", category: "gift-cards", subcategory: "xbox", price: 100.00, image: gcXbox, description: "Xbox Store Credit" },

  // ── Gift Cards > Nintendo ──
  { id: "nintendo-gc-10", title: "Nintendo eShop Card €10", category: "gift-cards", subcategory: "nintendo", price: 10.00, image: gcNintendo, description: "Nintendo eShop Credit" },
  { id: "nintendo-gc-20", title: "Nintendo eShop Card €20", category: "gift-cards", subcategory: "nintendo", price: 20.00, image: gcNintendo, description: "Nintendo eShop Credit" },
  { id: "nintendo-gc-50", title: "Nintendo eShop Card €50", category: "gift-cards", subcategory: "nintendo", price: 50.00, image: gcNintendo, description: "Nintendo eShop Credit", badge: "Best Seller" },
];

/** Filter products by category and optional subcategory */
export function getProducts(category: string, subcategory?: string): Product[] {
  return products.filter(
    (p) => p.category === category && (!subcategory || p.subcategory === subcategory)
  );
}
