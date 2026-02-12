import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, LineChart, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const studies = [
  {
    title: "Fintech scale-up",
    result: "+310% pipeline growth",
    timeline: "6 months",
    summary:
      "Repositioned the offer, rebuilt paid acquisition, and automated lifecycle to move from inconsistent leads to predictable revenue.",
    highlights: ["New ICP messaging", "Multi-channel paid system", "Lifecycle automation"]
  },
  {
    title: "Ecommerce brand",
    result: "4.6x blended ROAS",
    timeline: "90 days",
    summary:
      "Creative testing system and conversion optimization across product pages lifted revenue without increasing spend.",
    highlights: ["Creative velocity", "Landing page CRO", "Retention flows"]
  },
  {
    title: "B2B SaaS",
    result: "+210% SQL volume",
    timeline: "4 months",
    summary:
      "Intent-based targeting, improved nurture, and sales alignment accelerated qualified pipeline growth.",
    highlights: ["Intent targeting", "Nurture redesign", "Sales enablement"]
  }
];

export const CaseStudies = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding pt-20 md:pt-24">
        <div className="absolute inset-0 pointer-events-none">
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
        <div className="container-wide relative z-10">
          <motion.div className="max-w-4xl" initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                Proof, not promises
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Case <span className="text-gradient">Studies</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-2xl">
              A closer look at the strategy, execution, and outcomes behind our growth work.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start a Conversation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Studies */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {studies.map((study) => (
              <motion.div
                key={study.title}
                variants={fadeUp}
                className="p-8 rounded-2xl border border-border bg-card flex flex-col gap-6"
              >
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span className="inline-flex items-center gap-2">
                    <Briefcase size={16} />
                    {study.title}
                  </span>
                  <span>{study.timeline}</span>
                </div>
                <h3 className="text-2xl font-semibold">{study.result}</h3>
                <p className="text-muted-foreground">{study.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {study.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex items-center justify-center gap-3 text-muted-foreground">
              <LineChart size={18} />
              <Target size={18} />
              <Zap size={18} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want a result like this?</h2>
            <p className="text-muted-foreground mb-8">
              We can design a growth system that fits your market, budget, and timeline.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Growth Plan
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
