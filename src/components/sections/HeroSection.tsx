import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NetworkVisualization } from "../ui/NetworkVisualization";

interface HeroSectionProps {
  title: string;
  tagline: string;
  backgroundImage: string;
}

export function HeroSection({ title, tagline, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Marble texture overlay */}
      <div className="marble-overlay" />
      
      {/* Light rays effect */}
      <div className="light-rays" />

      {/* Network Visualization */}
      <NetworkVisualization />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Premium Banking Service</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-bold leading-tight mb-6">
              <span className="text-foreground">{title.split(" ").slice(0, -1).join(" ")}</span>{" "}
              <span className="text-gradient-cyan">{title.split(" ").slice(-1)}</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              {tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#open-account"
                className="btn-primary-gradient flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Open an Account
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
