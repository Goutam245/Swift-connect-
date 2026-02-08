import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { ArrowRight, Server, BookOpen, Shield, Zap } from "lucide-react";

const services = [
  {
    title: "IP 2 IP Interbank Transfer",
    tagline: "Secure server-to-server interbank transfer workflows",
    description: "Direct interbank connectivity for institutional-grade flows with enhanced security and faster execution.",
    path: "/ip-to-ip-interbank-transfer",
    icon: <Server className="w-8 h-8" />,
    features: ["Direct Connectivity", "Near Real-Time", "Institutional Grade"],
  },
  {
    title: "Ledger 2 Ledger Transfer",
    tagline: "Controlled transfers between accounting ledgers",
    description: "Movement of value between internal ledgers and supported DLT/blockchain environments.",
    path: "/ledger-to-ledger-transfer",
    icon: <BookOpen className="w-8 h-8" />,
    features: ["Audit-Friendly", "DLT Support", "Full Traceability"],
  },
];

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prominence Bank | Premium Institutional Banking Services</title>
        <meta 
          name="description" 
          content="Prominence Bank offers premium institutional banking services including IP 2 IP Interbank Transfers and Ledger 2 Ledger Transfers for qualified account holders." 
        />
      </Helmet>

      <Layout>
        {/* Hero Section - Clean, Premium Design */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background - Clean gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, #050B15 0%, #0A1628 50%, #0D1B2A 100%)",
            }}
          />
          
          {/* Subtle gradient orbs for depth */}
          <GradientOrbs />
          
          {/* Floating particles - very subtle */}
          <FloatingParticles />

          {/* Glass morphism overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 201, 255, 0.05) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
            <motion.div 
              className="max-w-[900px] mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Premium Badge */}
              <motion.div 
                variants={itemVariants}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-primary border border-primary/30 bg-primary/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,201,255,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Premium Banking Services
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-[72px] font-outfit font-bold leading-[1.1] tracking-[-0.02em] mb-6"
                style={{
                  textShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
                }}
              >
                <span className="text-white">Institutional Banking</span>
                <br />
                <span className="bg-gradient-to-r from-[#00C9FF] to-[#00FFFF] bg-clip-text text-transparent">
                  Reimagined
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.div 
                variants={itemVariants}
                className="max-w-[680px] mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-[#B0B8C4] leading-relaxed">
                  Premium transfer services for institutional clients and high-net-worth individuals.
                </p>
                <p className="text-base md:text-lg text-[#8A94A6] leading-relaxed">
                  Secure, compliant, and built for the modern financial landscape.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="#services"
                  className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-[#050B15] text-base bg-gradient-to-r from-[#00C9FF] to-[#00FFFF] shadow-[0_8px_32px_rgba(0,201,255,0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,201,255,0.45)] hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-10 py-4 rounded-xl font-semibold text-base text-[#00C9FF] border-2 border-[#00C9FF]/50 bg-transparent transition-all duration-300 hover:bg-[#00C9FF]/10 hover:border-[#00C9FF]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-24 section-dark">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-foreground mb-6">
                Our <span className="text-gradient-cyan">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Specialized transfer solutions for institutional and corporate clients
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.path}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={service.path} className="block h-full">
                    <div className="card-premium h-full group-hover:border-primary/50 transition-all duration-500">
                      {/* Icon */}
                      <div className="icon-container mb-6 group-hover:bg-primary/20 transition-colors">
                        <div className="text-primary">{service.icon}</div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-outfit font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-primary/80 font-medium mb-3">{service.tagline}</p>
                      <p className="text-muted-foreground mb-6">{service.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span key={feature} className="tag-pill">
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Learn More */}
                      <div className="flex items-center text-primary font-medium group/link">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 section-light">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 mb-6">
                Why Choose Prominence Bank
              </h2>
              <p className="text-lg text-slate-600">
                Built for institutions that demand excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Bank-Grade Security",
                  description: "Multi-layered security protocols with continuous monitoring and encryption.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Fast Execution",
                  description: "Streamlined processes for efficient institutional-grade transactions.",
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Direct Connectivity",
                  description: "Secure connections with counterparty institutions for seamless transfers.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="card-light text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 text-cyan-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-outfit font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 section-dark overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="relative container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-foreground mb-6">
                Ready to get <span className="text-gradient-cyan">started</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Open an account to access our premium institutional banking services.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#open-account"
                  className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-[#050B15] text-base bg-gradient-to-r from-[#00C9FF] to-[#00FFFF] shadow-[0_8px_32px_rgba(0,201,255,0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,201,255,0.45)] hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Open an Account
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-10 py-4 rounded-xl font-semibold text-base text-[#00C9FF] border-2 border-[#00C9FF]/50 bg-transparent transition-all duration-300 hover:bg-[#00C9FF]/10 hover:border-[#00C9FF]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
