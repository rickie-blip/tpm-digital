import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Megaphone, 
  FileText, 
  Search, 
  BarChart3, 
  Target, 
  Mail, 
  Globe, 
  ShoppingCart, 
  Bot, 
  Lightbulb,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const services = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "Strategic content and community management across all platforms."
  },
  {
    icon: FileText,
    title: "Content Strategy & Production",
    description: "Compelling content that resonates with your audience and drives action."
  },
  {
    icon: Search,
    title: "Competitor & Market Research",
    description: "Data-driven insights to position your brand ahead of the curve."
  },
  {
    icon: BarChart3,
    title: "Search Engine Optimization",
    description: "Technical and content SEO that improves visibility and rankings."
  },
  {
    icon: Target,
    title: "Media Buying & Paid Ads",
    description: "Performance-driven campaigns across Google, Meta, and beyond."
  },
  {
    icon: Target,
    title: "Funnel & Journey Design",
    description: "Optimized customer journeys that convert prospects into customers."
  },
  {
    icon: Mail,
    title: "Customer Retention",
    description: "Email marketing, SMS campaigns, and loyalty programs that keep customers engaged."
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Modern, responsive websites built for performance and conversion."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Growth",
    description: "End-to-end optimization for online stores and marketplaces."
  },
  {
    icon: Bot,
    title: "AI Automations & Systems",
    description: "Smart automation solutions that streamline your marketing operations."
  },
  {
    icon: Lightbulb,
    title: "Consultancy & Advisory",
    description: "Strategic guidance from experienced growth marketers."
  }
];

const process = [
  {
    title: "Discovery",
    description: "Deep audit of your market, offer, and funnel performance to find leverage."
  },
  {
    title: "Strategy",
    description: "Clear growth plan with goals, channels, budgets, and milestones."
  },
  {
    title: "Execution",
    description: "Launch, optimize, and scale across creative, media buying, and lifecycle."
  },
  {
    title: "Optimization",
    description: "Continuous testing and iteration to compound performance over time."
  }
];

export const Services = () => {
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
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-xl text-muted-foreground"
            >
              Comprehensive growth marketing solutions designed to scale your business. 
              From strategy to execution, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-gradient-brand-subtle transition-all duration-300">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
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
              Our Growth Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A clear, repeatable system that creates measurable momentum.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {process.map((step) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="p-6 bg-background rounded-2xl border border-border"
              >
                <div className="flex items-center gap-2 text-primary mb-4">
                  <CheckCircle2 size={18} />
                  <span className="text-sm uppercase tracking-wider text-muted-foreground">
                    Step
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="text-center p-12 md:p-16 bg-card rounded-3xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services 
              to meet your specific growth objectives.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Let's Talk
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
