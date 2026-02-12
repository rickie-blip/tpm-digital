import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import tpmLogo from "@/assets/tpm-logo.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@tpm.digital?_r=1&_t=ZS-93rO7xzcWN2X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v12.4a2.67 2.67 0 1 1-2.67-2.67c.27 0 .53.04.78.12V8.68a5.8 5.8 0 0 0-.78-.05A5.79 5.79 0 1 0 15.82 14V8.1a7.93 7.93 0 0 0 4.67 1.51V6.69h-.9Z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/tpmdigital",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M18.9 2H22l-6.77 7.74L23 22h-6.8l-5.34-6.99L4.7 22H1.6l7.24-8.28L1 2h6.98l4.83 6.38L18.9 2Zm-2.38 18h1.88L6.98 3.9H4.96L16.52 20Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tpm-digital",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.15 1.45-2.15 2.95v5.68H9.32V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1ArzYn5n5y/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M13.5 21v-8h2.5l.5-3h-3V8.2c0-.82.28-1.38 1.46-1.38H16V4.14c-.2-.03-.9-.08-1.72-.08-2.55 0-4.28 1.56-4.28 4.42V10H7.5v3H10v8h3.5Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tpm_digital?igsh=Ym45dTBoMWNjZTc2",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      ),
    },
  ];

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
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Visit us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
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
