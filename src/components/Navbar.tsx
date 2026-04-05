import { Search, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/store/cart";

type NavItem = {
  label: string;
  subcategories?: string[];
};

const navItems: NavItem[] = [
  {
    label: "Games",
    subcategories: ["Action", "Adventure", "Racing", "Strategy", "Survival", "Horror", "RPG", "Sports"],
  },
  {
    label: "Gift Cards",
    subcategories: ["Steam", "PlayStation", "Xbox", "Nintendo", "Epic Games"],
  },
  {
    label: "Subscriptions",
    subcategories: ["Game Pass", "PS Plus", "EA Play", "Ubisoft+", "Nintendo Online"],
  },
  {
    label: "Deals",
    subcategories: ["Flash Sales", "Weekly Deals", "Under $10", "Under $20", "Bundles"],
  },
];

const NavDropdown = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="text-secondary-foreground hover:text-foreground hover:bg-secondary gap-1"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
      >
        {item.label}
        {item.subcategories && (
          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        )}
      </Button>
      {open && item.subcategories && (
        <div
          className="absolute top-full left-0 mt-1 w-48 rounded-lg border border-border bg-popover p-1 shadow-xl animate-in fade-in-0 zoom-in-95 duration-150"
          onMouseLeave={() => setOpen(false)}
        >
          {item.subcategories.map((sub) => (
            <button
              key={sub}
              className="w-full text-left px-3 py-2 text-sm rounded-md text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {sub}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

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
            {navItems.map((item) => (
              <NavDropdown key={item.label} item={item} />
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
