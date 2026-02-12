import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustBar } from "./TrustBar";
import tpmLogo from "@/assets/tpm-logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <TrustBar />
      <header className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={tpmLogo} alt="TPM Digital" className="h-8 w-8 sm:h-12 sm:w-12 rounded-lg object-cover" />
            <span className="font-bold text-lg sm:text-xl text-foreground">TPM Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block ml-6">
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
};
