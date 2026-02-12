import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Award, TrendingUp, Users, Globe } from "lucide-react";

const messages = [
  { icon: Award, text: "Trusted by 100+ brands across 6 markets" },
  { icon: TrendingUp, text: "Average 310% pipeline growth for clients" },
  { icon: Users, text: "5+ years driving digital growth" },
  { icon: Globe, text: "4.6x average blended ROAS" },
];

export const TrustBar = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const Icon = messages[current].icon;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-brand-subtle border-b border-primary/20">
      <div className="container-wide h-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-sm text-foreground"
          >
            <Icon size={16} className="text-primary" />
            <span>{messages[current].text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
