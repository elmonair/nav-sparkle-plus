import { Search, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/store/cart";

type NavItem = {
  label: string;
  slug: string;
  subcategories?: { label: string; slug: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Games",
    slug: "games",
    subcategories: [
      { label: "Action", slug: "action" },
      { label: "Adventure", slug: "adventure" },
      { label: "Racing", slug: "racing" },
      { label: "Strategy", slug: "strategy" },
      { label: "Survival", slug: "survival" },
      { label: "Horror", slug: "horror" },
      { label: "RPG", slug: "rpg" },
      { label: "Sports", slug: "sports" },
    ],
  },
  {
    label: "IPTV",
    slug: "iptv",
    subcategories: [
      { label: "Strong 8K IPTV", slug: "strong-8k" },
      { label: "Trex IPTV", slug: "trex" },
      { label: "Neo IPTV", slug: "neo" },
      { label: "Crystal IPTV", slug: "crystal" },
    ],
  },
  {
    label: "Gift Cards",
    slug: "gift-cards",
    subcategories: [
      { label: "PlayStation", slug: "playstation" },
      { label: "Xbox", slug: "xbox" },
      { label: "Nintendo", slug: "nintendo" },
    ],
  },
  {
    label: "Subscriptions",
    slug: "subscriptions",
    subcategories: [
      { label: "Spotify Premium", slug: "spotify" },
      { label: "YouTube Premium", slug: "youtube" },
      { label: "Netflix Premium", slug: "netflix" },
      { label: "Shahid VIP", slug: "shahid" },
    ],
  },
  {
    label: "Deals",
    slug: "deals",
    subcategories: [
      { label: "Flash Sales", slug: "flash-sales" },
      { label: "Weekly Deals", slug: "weekly-deals" },
      { label: "Under $10", slug: "under-10" },
      { label: "Under $20", slug: "under-20" },
      { label: "Bundles", slug: "bundles" },
    ],
  },
];

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const scheduleClose = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  const menuItems = navItems.filter((i) => i.subcategories);

  return (
    <div className="relative flex items-center gap-0.5">
      {navItems.map((item) => (
        <Link key={item.slug} to={`/category/${item.slug}`}>
          <Button
            variant="ghost"
            size="sm"
            className="text-secondary-foreground hover:text-foreground hover:bg-secondary/60 gap-1 transition-colors"
            onMouseEnter={item.subcategories ? open : undefined}
            onMouseLeave={item.subcategories ? scheduleClose : undefined}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
            {item.subcategories && (
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            )}
          </Button>
        </Link>
      ))}

      {isOpen && (
        <div
          className="absolute left-0 top-full mt-3 z-[60] rounded-xl border border-border/60 bg-card/98 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.03]"
          onMouseEnter={open}
          onMouseLeave={scheduleClose}
          style={{ minWidth: "max-content" }}
        >
          <div className="grid grid-cols-5 divide-x divide-border/40">
            {menuItems.map((item) => (
              <div key={item.slug} className="px-2 py-3 min-w-[155px]">
                <Link
                  to={`/category/${item.slug}`}
                  className="block px-3 py-1.5 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                <div className="space-y-0.5">
                  {item.subcategories!.map((sub) => (
                    <Link
                      key={sub.slug}
                      to={`/category/${item.slug}/${sub.slug}`}
                      className="block px-3 py-1.5 text-[13px] rounded-md text-popover-foreground/90 hover:bg-primary/10 hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
          <Link to="/" className="text-xl font-black tracking-tight text-gradient-primary">
            GAMEKEYS
          </Link>
          <nav className="hidden md:flex items-center">
            <MegaMenu />
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
