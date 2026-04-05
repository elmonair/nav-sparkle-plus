import { Shield, Clock, CreditCard, Headphones } from "lucide-react";

const items = [
  { icon: Shield, label: "Secure Payments" },
  { icon: Clock, label: "Instant Delivery" },
  { icon: CreditCard, label: "Best Prices" },
  { icon: Headphones, label: "24/7 Support" },
];

const TrustBar = () => (
  <section className="border-y border-border bg-secondary/30">
    <div className="container py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
