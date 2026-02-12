import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, TrendingUp, Target, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const reasons = [
  {
    icon: TrendingUp,
    title: "Strategy-Led Growth",
    description: "We don't just execute campaigns — we architect growth strategies that drive measurable results."
  },
  {
    icon: Target,
    title: "Market Drivers",
    description: "We are not market-driven. We are drivers of the market. Setting trends, not following them."
  },
  {
    icon: Zap,
    title: "Execution Excellence",
    description: "From strategy to implementation, we deliver with precision and speed that matches your ambitions."
  },
  {
    icon: Users,
    title: "Growth Partners",
    description: "More than an agency — we become an extension of your team, invested in your success."
  }
];

const stats = [
  { label: "Pipeline growth", value: "310%" },
  { label: "Avg. blended ROAS", value: "4.6x" },
  { label: "Brands scaled", value: "100+" },
  { label: "Markets served", value: "6" }
];

export const Home = () => {
  const [showPill, setShowPill] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const reveal = () => {
      setShowPill(true);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
      hideTimerRef.current = setTimeout(() => setShowPill(false), 2000);
    };

    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "mousemove",
      "touchstart",
      "keydown"
    ];

    events.forEach((event) => window.addEventListener(event, reveal, { passive: true }));

    return () => {
      events.forEach((event) => window.removeEventListener(event, reveal));
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden px-4 sm:px-6 pt-8 md:pt-12 pb-12 md:pb-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <motion.div
            aria-hidden
            className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-brand opacity-45 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-32 -left-28 h-[28rem] w-[28rem] rounded-full bg-gradient-brand-subtle opacity-55 blur-3xl"
            animate={{ x: [0, 25, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-wide relative z-10 w-full">
          <motion.div 
            className="max-w-4xl mx-auto text-center sm:text-left"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 sm:mb-6"
              animate={showPill ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-muted rounded-full text-xs sm:text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                5+ Years in the Market
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 sm:mb-8"
            >
              Home of{" "}
              <span className="text-gradient">Marketing</span>
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto sm:mx-0 mb-8 sm:mb-10"
            >
              Your growth partner for the digital age. Strategy-led, execution-backed 
              marketing that transforms ambitious brands into market leaders.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center sm:justify-start">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://wa.me/254740968503" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why TPM Digital */}
      <section className="section-padding bg-card px-4 sm:px-6">
        <div className="container-wide">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Why <span className="text-gradient">TPM Digital</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Built by growth marketers, for brands that demand more than the ordinary.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group p-6 sm:p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-brand-subtle flex items-center justify-center mb-4 sm:mb-6 group-hover:glow-cyan transition-all duration-300">
                  <reason.icon size={24} className="text-primary sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Performance Band */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 bg-card rounded-2xl border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-brand-subtle opacity-30" />
        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Drive Your Growth?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto">
              Let's build something remarkable together. Start the conversation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
