import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Lightbulb, TrendingUp } from "lucide-react";
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

const values = [
  {
    icon: TrendingUp,
    title: "Growth-First Mindset",
    description: "Every strategy, every campaign, every decision is anchored in driving measurable growth for your business."
  },
  {
    icon: Lightbulb,
    title: "Innovation & AI",
    description: "We stay at the forefront of marketing technology, leveraging AI and automation to give you a competitive edge."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We don't work for you — we work with you. Your success is our success, and we're invested in the long game."
  }
];

export const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding pt-20 md:pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            aria-hidden
            className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-brand opacity-40 blur-3xl"
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
        <div className="container-wide">
          <motion.div 
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                5+ Years in the Market
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Built by <span className="text-gradient">Growth Marketers</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              TPM Digital was founded on a simple belief: marketing should drive real, 
              measurable growth. Not vanity metrics. Not empty promises. Real results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Are Drivers of the Market
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In a world where most agencies follow trends, we set them. For over five years, 
                  TPM Digital has been helping ambitious brands transform their marketing from 
                  a cost center into a growth engine.
                </p>
                <p>
                  Under the leadership of Shadrack Oguta, our team combines deep expertise in 
                  growth marketing with a forward-thinking approach to AI and automation. We don't 
                  just keep up with the market — we drive it.
                </p>
                <p>
                  From startups to established enterprises, we partner with businesses across 
                  East Africa and beyond, delivering strategy-led, execution-backed marketing 
                  that moves the needle.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">5+</div>
                <p className="text-muted-foreground">Years in Market</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">100+</div>
                <p className="text-muted-foreground">Brands Grown</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border col-span-2">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">∞</div>
                <p className="text-muted-foreground">Growth Potential</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives Us
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand-subtle flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* P.O.K.A*/}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            className="p-12 md:p-16 bg-card rounded-3xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                <Award size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Pride of Kenya Awards
                </h3>
                <p className="text-muted-foreground max-w-2xl">
                  Beyond client work, TPM Digital is proud to be behind the Pride of Kenya Awards — 
                  an annual platform recognising innovation, leadership, talent, and corporate 
                  excellence across Kenya. It's our way of contributing to the ecosystem that 
                  drives our nation forward.
                </p>
              </div>
            </div>
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
              Let's Grow Together
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to partner with a team that's as invested in your growth as you are?
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start the Conversation
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
