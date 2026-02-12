import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const socialLinks = [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@tpm.digital?_r=1&_t=ZS-93rO7xzcWN2X",
      handle: "@tpm.digital",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v12.4a2.67 2.67 0 1 1-2.67-2.67c.27 0 .53.04.78.12V8.68a5.8 5.8 0 0 0-.78-.05A5.79 5.79 0 1 0 15.82 14V8.1a7.93 7.93 0 0 0 4.67 1.51V6.69h-.9Z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/tpmdigital",
      handle: "@tpmdigital",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M18.9 2H22l-6.77 7.74L23 22h-6.8l-5.34-6.99L4.7 22H1.6l7.24-8.28L1 2h6.98l4.83 6.38L18.9 2Zm-2.38 18h1.88L6.98 3.9H4.96L16.52 20Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tpm-digital",
      handle: "TPM Digital",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.15 1.45-2.15 2.95v5.68H9.32V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1ArzYn5n5y/",
      handle: "TPM Digital",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M13.5 21v-8h2.5l.5-3h-3V8.2c0-.82.28-1.38 1.46-1.38H16V4.14c-.2-.03-.9-.08-1.72-.08-2.55 0-4.28 1.56-4.28 4.42V10H7.5v3H10v8h3.5Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tpm_digital?igsh=Ym45dTBoMWNjZTc2",
      handle: "@tpm_digital",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Let's <span className="text-gradient">Connect</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-xl text-muted-foreground"
            >
              Ready to drive your growth? We'd love to hear about your project and 
              explore how we can help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <div className="p-12 bg-card rounded-2xl border border-border text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="heroOutline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", company: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-card border-border h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-card border-border h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-card border-border resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* WhatsApp CTA */}
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prefer WhatsApp?</h3>
                    <p className="text-muted-foreground mb-4">
                      Get a faster response by messaging us directly on WhatsApp.
                    </p>
                    <Button variant="whatsapp" size="lg" asChild>
                      <a href="https://wa.me/254740968503" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={18} />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                    <address className="text-muted-foreground not-italic">
                      Hughes Building<br />
                      Banda Street<br />
                      Nairobi, Kenya
                    </address>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-primary">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v12.4a2.67 2.67 0 1 1-2.67-2.67c.27 0 .53.04.78.12V8.68a5.8 5.8 0 0 0-.78-.05A5.79 5.79 0 1 0 15.82 14V8.1a7.93 7.93 0 0 0 4.67 1.51V6.69h-.9Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Stay updated with our latest work and insights.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                          aria-label={`Visit us on ${social.name}`}
                        >
                          {social.icon}
                          {social.handle}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
