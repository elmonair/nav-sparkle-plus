import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/store/cart";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggle, totalItems } = useCart();
  const count = totalItems();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-black tracking-tight text-gradient-primary">
            GAMEKEYS
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {["Games", "Gift Cards", "Subscriptions", "Deals"].map((item) => (
              <Button key={item} variant="ghost" size="sm" className="text-secondary-foreground hover:text-foreground hover:bg-secondary">
                {item}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className={`${searchOpen ? "flex" : "hidden"} md:flex items-center`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search games..."
                className="w-48 lg:w-72 pl-9 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
              />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground" onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground" onClick={toggle}>
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                {count}
              </span>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
