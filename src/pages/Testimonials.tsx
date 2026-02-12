import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Quote, Star, TrendingUp, Target, Briefcase } from "lucide-react";
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

const stats = [
  { label: "Years in market", value: "5+" },
  { label: "Campaigns delivered", value: "120+" },
  { label: "Avg. pipeline lift", value: "3.2x" },
  { label: "Client retention", value: "98%" }
];

const achievements = [
  {
    icon: Award,
    title: "Pride of Kenya Awards",
    description:
      "Founded and delivered a national platform celebrating innovation, leadership, and business excellence."
  },
  {
    icon: TrendingUp,
    title: "Growth Systems Built",
    description:
      "Designed multi-channel growth engines for brands across fintech, ecommerce, and B2B SaaS."
  },
  {
    icon: Target,
    title: "Performance Benchmarks",
    description:
      "Repeatedly exceeded targets on pipeline, ROAS, and conversion quality with measurable impact."
  }
];

const caseHighlights = [
  {
    industry: "Fintech scale-up",
    result: "+210% pipeline growth",
    detail: "Positioning, paid acquisition, and lifecycle automation in 6 months."
  },
  {
    industry: "Ecommerce brand",
    result: "4.1x blended ROAS",
    detail: "Full-funnel creative testing and conversion rate optimization."
  },
  {
    industry: "B2B SaaS",
    result: "3.5x MQL to SQL lift",
    detail: "Intent-based targeting and sales enablement alignment."
  }
];

const testimonials = [
  {
    quote:
      "TPM Digital built a growth system we can scale. The team is fast, accountable, and results-focused.",
    name: "Miriam O.",
    role: "Head of Growth",
    company: "Fintech",
    rating: 5
  },
  {
    quote:
      "We moved from ad spend guesswork to predictable revenue. Their strategy and execution are elite.",
    name: "Daniel K.",
    role: "CEO",
    company: "Ecommerce",
    rating: 5
  },
  {
    quote:
      "The positioning work alone transformed our pipeline. TPM feels like an extension of our team.",
    name: "Aisha M.",
    role: "Marketing Lead",
    company: "B2B SaaS",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative section-padding pt-20 md:pt-24 overflow-hidden">
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
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                Proof of impact
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Testimonials and <span className="text-gradient">Achievements</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Results are the only marketing that matters. Here is how we have helped
              ambitious brands build momentum and sustain growth.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start a Conversation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/services">See Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Achievements */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements that compound
            </h2>
            <p className="text-lg text-muted-foreground">
              We focus on systems that create repeatable wins, not one-off spikes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {achievements.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="p-8 rounded-2xl border border-border bg-background"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand-subtle flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Highlights */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent wins</h2>
              <p className="text-lg text-muted-foreground">
                A snapshot of the growth outcomes we deliver across industries.
              </p>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Briefcase size={20} />
              <span className="text-sm uppercase tracking-wider">Selected work</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseHighlights.map((item) => (
              <motion.div
                key={item.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-2xl border-gradient bg-card"
              >
                <p className="text-sm text-muted-foreground mb-3">{item.industry}</p>
                <h3 className="text-2xl font-semibold mb-3">{item.result}</h3>
                <p className="text-muted-foreground">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What clients say
            </h2>
            <p className="text-lg text-muted-foreground">
              High trust, high standards, and measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-border bg-background flex flex-col gap-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={20} className="text-muted-foreground" />
                </div>
                <p className="text-muted-foreground leading-relaxed">"{item.quote}"</p>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.role} · {item.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build your growth story?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let us define the plan, launch the work, and deliver the numbers.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start the Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
