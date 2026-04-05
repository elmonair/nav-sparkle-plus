import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import type { Product } from "@/data/products";
import type { Game } from "@/data/games";

const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCart((s) => s.addItem);

  const handleAddToCart = () => {
    const asGame: Game = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice ?? product.price,
      discount: product.discount ?? 0,
      platform: "",
      category: product.category,
      rating: 5,
      description: product.description,
      screenshots: [],
      releaseDate: "",
      developer: "",
      publisher: "",
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
        {product.badge && (
          <div className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-2 py-1 rounded-sm">
            {product.badge}
          </div>
        )}
        {product.discount && product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-xs font-medium px-2 py-1 rounded-sm">
            -{product.discount}%
          </div>
        )}
      </div>
      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-sm text-foreground truncate">{product.title}</h3>
        <p className="text-xs text-muted-foreground">{product.description}</p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-primary">€{product.price.toFixed(2)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-muted-foreground line-through">€{product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" variant="default" className="h-8 text-xs gap-1" onClick={handleAddToCart}>
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
