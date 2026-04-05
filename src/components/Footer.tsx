import midoshopLogo from "@/assets/midoshop-logo-icon.png";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1 space-y-3">
          <img src={midoshopLogo} alt="MidoShop" className="h-8 object-contain" />
          <p className="text-sm text-muted-foreground">The best deals on digital game keys, gift cards, and subscriptions.</p>
        </div>
        {[
          { title: "Marketplace", links: ["PC Games", "Xbox Games", "PS Games", "Nintendo"] },
          { title: "Support", links: ["Help Center", "Contact Us", "Refund Policy", "FAQ"] },
          { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
        ].map((col) => (
          <div key={col.title} className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 MidoShop. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
