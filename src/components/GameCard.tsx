import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Game } from "@/data/games";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group rounded-lg overflow-hidden bg-card card-glow hover:card-glow-hover transition-shadow duration-300"
    >
      <Link to={`/game/${game.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={game.image}
            alt={game.title}
            loading="lazy"
            width={640}
            height={860}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {game.discount > 0 && (
            <div className="absolute top-2 left-2 bg-discount text-discount-foreground text-xs font-bold px-2 py-1 rounded-sm">
              -{game.discount}%
            </div>
          )}
          <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-xs font-medium px-2 py-1 rounded-sm">
            {game.platform}
          </div>
        </div>
        <div className="p-3 space-y-2">
          <h3 className="font-semibold text-sm text-foreground truncate">{game.title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">€{game.price.toFixed(2)}</span>
            {game.originalPrice > game.price && (
              <span className="text-xs text-muted-foreground line-through">€{game.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard;
