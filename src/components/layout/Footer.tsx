import { Link } from "react-router-dom";
import { MessageCircle, Instagram } from "lucide-react";
import tpmLogo from "@/assets/tpm-logo.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={tpmLogo} alt="TPM Digital" className="h-12 w-12 rounded-lg object-cover" />
              <span className="font-bold text-xl text-foreground">TPM Digital</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Home of Marketing. We are not market-driven — we are drivers of the market. 
              Strategy-led, execution-backed growth for ambitious brands.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle size={18} className="text-[#25D366]" />
                <a 
                  href="https://wa.me/254740968503" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  +254 740 968 503
                </a>
              </div>
              <a 
                href="https://www.instagram.com/tpm_digital?igsh=MTF3MDJ4NGEzMDJxdQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Case Studies", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Location</h4>
            <address className="text-muted-foreground not-italic">
              Hughes Building<br />
              Banda Street<br />
              Nairobi, Kenya
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} TPM Digital. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            5+ years driving market growth
          </p>
        </div>
      </div>
    </footer>
  );
};
