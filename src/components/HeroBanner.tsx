import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroGames from "@/assets/hero-games.jpg";
import heroGiftCards from "@/assets/hero-giftcards.jpg";
import heroSubscriptions from "@/assets/hero-subscriptions.jpg";
import heroIptv from "@/assets/hero-iptv.jpg";

const slides = [
  {
    image: heroGames,
    badge: "Game Keys",
    title: "PC & Console Game Keys",
    highlight: "Instant Activation",
    description:
      "Get the latest titles at unbeatable prices. Steam, Origin, and Epic keys delivered to your inbox in seconds.",
    cta: "Shop Game Keys",
    link: "/category/games",
  },
  {
    image: heroGiftCards,
    badge: "Gift Cards",
    title: "PlayStation & Xbox",
    highlight: "Gift Cards",
    description:
      "Top up your PSN or Xbox wallet instantly. Available in €10, €20, €50, and €100 denominations.",
    cta: "Browse Gift Cards",
    link: "/category/gift-cards",
  },
  {
    image: heroSubscriptions,
    badge: "Subscriptions",
    title: "Premium Streaming",
    highlight: "Subscriptions",
    description:
      "Spotify, YouTube Premium, Shahid VIP and more — all at the best prices with instant delivery.",
    cta: "View Subscriptions",
    link: "/category/subscriptions",
  },
  {
    image: heroIptv,
    badge: "IPTV",
    title: "Premium IPTV",
    highlight: "Subscriptions",
    description:
      "10,000+ live channels in up to 8K quality. Choose from Strong, Trex, Neo, Crystal, and Magnum providers.",
    cta: "Explore IPTV",
    link: "/category/iptv",
  },
];

const AUTOPLAY_INTERVAL = 6000;

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative py-16 md:py-24 lg:py-32">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5">
              <span className="text-sm font-semibold text-primary">{slide.badge}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-foreground">
              {slide.title}{" "}
              <span className="text-gradient-primary">{slide.highlight}</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {slide.description}
            </p>

            <Link to={slide.link}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-8 mt-2"
              >
                {slide.cta}
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/40 text-foreground hover:bg-background/80 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/40 text-foreground hover:bg-background/80 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
