import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const categoryFilters = [
  { label: "All", value: "all" },
  { label: "IPTV", value: "iptv" },
  { label: "Subscriptions", value: "subscriptions" },
  { label: "Gift Cards", value: "gift-cards" },
];

/** Show one product per subcategory (the cheapest / starter) for a clean overview */
function getFeatured(category: string) {
  const pool = category === "all" ? products : products.filter((p) => p.category === category);

  // Pick one representative per subcategory
  const seen = new Map<string, typeof products[0]>();
  for (const p of pool) {
    if (!seen.has(p.subcategory) || p.price < seen.get(p.subcategory)!.price) {
      seen.set(p.subcategory, p);
    }
  }
  return Array.from(seen.values());
}

const FeaturedProducts = () => {
  const [active, setActive] = useState("all");
  const featured = getFeatured(active);

  return (
    <section className="container py-12 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categoryFilters.map((cat) => (
          <Button
            key={cat.value}
            variant={active === cat.value ? "default" : "secondary"}
            size="sm"
            onClick={() => setActive(cat.value)}
            className={
              active === cat.value
                ? "bg-primary text-primary-foreground font-semibold"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }
          >
            {cat.label}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {featured.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
