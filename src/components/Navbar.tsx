import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
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
      { label: "Magnum IPTV", slug: "magnum" },
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

/* ── Desktop nav with simple dropdowns ── */
const NavDropdownItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const close = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  if (!item.subcategories) {
    return (
      <Link to={`/category/${item.slug}`}>
        <Button variant="ghost" size="sm" className="text-secondary-foreground hover:text-foreground hover:bg-secondary/60 transition-colors">
          {item.label}
        </Button>
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <Link to={`/category/${item.slug}`}>
        <Button variant="ghost" size="sm" className="text-secondary-foreground hover:text-foreground hover:bg-secondary/60 gap-1 transition-colors">
          {item.label}
          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </Link>
      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-[60] min-w-[180px] rounded-lg border border-border/40 bg-background/95 backdrop-blur-md shadow-xl shadow-black/40 py-1.5">
          {item.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              to={`/category/${item.slug}/${sub.slug}`}
              className="block px-3.5 py-2 text-[13px] text-muted-foreground hover:bg-accent/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopNav = () => (
  <div className="flex items-center gap-0.5">
    {navItems.map((item) => (
      <NavDropdownItem key={item.slug} item={item} />
    ))}
  </div>
);

/* ── Mobile sidebar drawer ── */
const MobileSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-[80] h-full w-72 bg-background border-r border-border shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link to="/" className="text-lg font-black text-gradient-primary" onClick={onClose}>
            MIDOSHOP
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-65px)] py-2">
          {navItems.map((item) => (
            <div key={item.slug}>
              {item.subcategories ? (
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  onClick={() => toggleExpand(item.slug)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                      expandedSlug === item.slug ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={`/category/${item.slug}`}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}

              {item.subcategories && expandedSlug === item.slug && (
                <div className="bg-secondary/30">
                  {item.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      to={`/category/${item.slug}/${sub.slug}`}
                      className="block px-8 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                      onClick={onClose}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggle, totalItems } = useCart();
  const count = totalItems();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground shrink-0"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="text-lg sm:text-xl font-black tracking-tight text-gradient-primary">
              MIDOSHOP
            </Link>
            <nav className="hidden md:flex items-center">
              <MegaMenu />
            </nav>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className={`${searchOpen ? "flex" : "hidden"} md:flex items-center`}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="w-40 sm:w-48 lg:w-72 pl-9 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                />
              </div>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground shrink-0" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground shrink-0" onClick={toggle}>
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                  {count}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground shrink-0 hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
