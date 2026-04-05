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
      className="group rounded-lg overflow-hidden bg-card card-glow hover:card-glow-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          width={640}
          height={860}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {product.badge && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
            {product.badge}
          </div>
        )}
        {product.discount && product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-[11px] font-bold px-2 py-0.5 rounded-md shadow-md">
            -{product.discount}%
          </div>
        )}
        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[10px] font-medium uppercase tracking-widest text-white/70 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
            {product.subcategory.split("-").join(" ")}
          </span>
        </div>
      </div>
      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors duration-200">{product.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-extrabold tracking-tight text-primary">€{product.price.toFixed(2)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[11px] text-muted-foreground/60 line-through">€{product.originalPrice.toFixed(2)}</span>
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
