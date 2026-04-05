import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import game6 from "@/assets/game-6.jpg";

export type Game = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  platform: string;
  category: string;
  rating: number;
  description: string;
  screenshots: string[];
  releaseDate: string;
  developer: string;
  publisher: string;
  systemRequirements: {
    minimum: Record<string, string>;
    recommended: Record<string, string>;
  };
};

export const games: Game[] = [
  {
    id: "1", title: "Neon Blade 2077", image: game1, price: 12.99, originalPrice: 59.99, discount: 78, platform: "PC", category: "Action", rating: 4.5,
    description: "Dive into a sprawling cyberpunk metropolis where every choice shapes your destiny. As a mercenary outlaw, you'll navigate a neon-drenched underworld filled with corporate conspiracies, street gangs, and cutting-edge technology. Upgrade your cybernetic implants, master an arsenal of futuristic weapons, and unravel a mystery that threatens the entire city.",
    screenshots: [game1, game4, game6],
    releaseDate: "2025-11-15", developer: "NeonForge Studios", publisher: "Digital Horizon",
    systemRequirements: {
      minimum: { OS: "Windows 10 64-bit", Processor: "Intel Core i5-9400F", Memory: "8 GB RAM", Graphics: "NVIDIA GTX 1060 6GB", Storage: "70 GB" },
      recommended: { OS: "Windows 11 64-bit", Processor: "Intel Core i7-12700K", Memory: "16 GB RAM", Graphics: "NVIDIA RTX 3070", Storage: "70 GB SSD" },
    },
  },
  {
    id: "2", title: "Last Dawn", image: game2, price: 24.99, originalPrice: 49.99, discount: 50, platform: "PC", category: "Survival", rating: 4.2,
    description: "Survive in a post-apocalyptic wasteland where resources are scarce and danger lurks around every corner. Build shelters, craft weapons, and form alliances with other survivors. Every decision matters as you fight to see another sunrise in this unforgiving open-world survival experience.",
    screenshots: [game2, game5, game1],
    releaseDate: "2025-08-22", developer: "Ashfall Games", publisher: "Endurance Interactive",
    systemRequirements: {
      minimum: { OS: "Windows 10 64-bit", Processor: "Intel Core i5-8400", Memory: "8 GB RAM", Graphics: "NVIDIA GTX 1050 Ti", Storage: "50 GB" },
      recommended: { OS: "Windows 11 64-bit", Processor: "Intel Core i7-11700", Memory: "16 GB RAM", Graphics: "NVIDIA RTX 3060", Storage: "50 GB SSD" },
    },
  },
  {
    id: "3", title: "Turbo Drift X", image: game3, price: 9.99, originalPrice: 39.99, discount: 75, platform: "PC", category: "Racing", rating: 4.0,
    description: "Feel the rush of high-speed racing across breathtaking mountain roads, coastal highways, and urban circuits. With over 80 licensed vehicles and a deep customization system, Turbo Drift X delivers the most exhilarating arcade racing experience ever crafted.",
    screenshots: [game3, game2, game4],
    releaseDate: "2025-06-10", developer: "Velocity Works", publisher: "Apex Racing Games",
    systemRequirements: {
      minimum: { OS: "Windows 10 64-bit", Processor: "Intel Core i3-9100", Memory: "6 GB RAM", Graphics: "NVIDIA GTX 960", Storage: "35 GB" },
      recommended: { OS: "Windows 11 64-bit", Processor: "Intel Core i5-12400", Memory: "12 GB RAM", Graphics: "NVIDIA RTX 3060", Storage: "35 GB SSD" },
    },
  },
  {
    id: "4", title: "Stellar Frontier", image: game4, price: 19.99, originalPrice: 59.99, discount: 67, platform: "PC", category: "Adventure", rating: 4.8,
    description: "Embark on an interstellar journey across uncharted galaxies. Explore alien worlds teeming with bioluminescent life, ancient civilizations, and cosmic mysteries. Pilot your customizable starship, build outposts, and uncover the secrets of a universe that stretches beyond imagination.",
    screenshots: [game4, game6, game3],
    releaseDate: "2026-01-20", developer: "Cosmos Interactive", publisher: "Starlight Publishing",
    systemRequirements: {
      minimum: { OS: "Windows 10 64-bit", Processor: "Intel Core i5-10400", Memory: "12 GB RAM", Graphics: "NVIDIA GTX 1070", Storage: "80 GB" },
      recommended: { OS: "Windows 11 64-bit", Processor: "Intel Core i9-13900K", Memory: "32 GB RAM", Graphics: "NVIDIA RTX 4070", Storage: "80 GB SSD" },
    },
  },
  {
    id: "5", title: "Kingdom Siege", image: game5, price: 14.99, originalPrice: 44.99, discount: 67, platform: "PC", category: "Strategy", rating: 4.3,
    description: "Command vast armies in epic medieval battles. Build your kingdom from a humble village to a mighty empire. Forge alliances, research technologies, and lead your troops into massive real-time battles with thousands of units clashing on screen.",
    screenshots: [game5, game1, game2],
    releaseDate: "2025-09-05", developer: "Iron Crown Studios", publisher: "Regal Games",
    systemRequirements: {
      minimum: { OS: "Windows 10 64-bit", Processor: "Intel Core i5-8600", Memory: "8 GB RAM", Graphics: "NVIDIA GTX 1060", Storage: "45 GB" },
      recommended: { OS: "Windows 11 64-bit", Processor: "Intel Core i7-12700", Memory: "16 GB RAM", Graphics: "NVIDIA RTX 3060 Ti", Storage: "45 GB SSD" },
    },
  },
  {
    id: "6", title: "Hollow Manor", image: game6, price: 7.99, originalPrice: 29.99, discount: 73, platform: "PC", category: "Horror", rating: 4.6,
    description: "Enter a decrepit Victorian mansion haunted by unspeakable horrors. Armed with only a flashlight and your wits, uncover the dark history of Hollow Manor while evading terrifying entities that stalk the shadows. Every creak, whisper, and flicker could be your last warning.",
    screenshots: [game6, game4, game1],
    releaseDate: "2025-10-31", developer: "Dreadlight Games", publisher: "Nightfall Entertainment",
    systemRequirements: {
      minimum: { OS: "Windows 10 64-bit", Processor: "Intel Core i5-7500", Memory: "8 GB RAM", Graphics: "NVIDIA GTX 1050", Storage: "25 GB" },
      recommended: { OS: "Windows 11 64-bit", Processor: "Intel Core i7-10700", Memory: "16 GB RAM", Graphics: "NVIDIA RTX 2070", Storage: "25 GB SSD" },
    },
  },
  {
    id: "7", title: "Neon Blade: DLC Pack", image: game1, price: 4.99, originalPrice: 14.99, discount: 67, platform: "Xbox", category: "Action", rating: 4.1,
    description: "Expand your Neon Blade experience with three new story chapters, additional weapons, and exclusive cybernetic upgrades. Journey into the depths of the city's underground and face the most dangerous factions yet.",
    screenshots: [game1, game3, game5],
    releaseDate: "2026-02-14", developer: "NeonForge Studios", publisher: "Digital Horizon",
    systemRequirements: {
      minimum: { OS: "Windows 10 64-bit", Processor: "Intel Core i5-9400F", Memory: "8 GB RAM", Graphics: "NVIDIA GTX 1060 6GB", Storage: "15 GB" },
      recommended: { OS: "Windows 11 64-bit", Processor: "Intel Core i7-12700K", Memory: "16 GB RAM", Graphics: "NVIDIA RTX 3070", Storage: "15 GB SSD" },
    },
  },
  {
    id: "8", title: "Last Dawn: Survival Edition", image: game2, price: 29.99, originalPrice: 69.99, discount: 57, platform: "PlayStation", category: "Survival", rating: 4.4,
    description: "The definitive Last Dawn experience, bundled with all DLC expansions, exclusive gear, and the brand-new co-op survival mode. Face the wasteland with friends in this complete edition of the award-winning survival game.",
    screenshots: [game2, game6, game3],
    releaseDate: "2026-03-01", developer: "Ashfall Games", publisher: "Endurance Interactive",
    systemRequirements: {
      minimum: { OS: "Windows 10 64-bit", Processor: "Intel Core i5-8400", Memory: "8 GB RAM", Graphics: "NVIDIA GTX 1050 Ti", Storage: "65 GB" },
      recommended: { OS: "Windows 11 64-bit", Processor: "Intel Core i7-11700", Memory: "16 GB RAM", Graphics: "NVIDIA RTX 3060", Storage: "65 GB SSD" },
    },
  },
];

export const categories = ["All", "Action", "Survival", "Racing", "Adventure", "Strategy", "Horror"];
export const platforms = ["All", "PC", "Xbox", "PlayStation", "Nintendo"];
