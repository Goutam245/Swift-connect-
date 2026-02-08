import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 section-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <span className="text-primary text-sm font-medium">Get Started Today</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-foreground mb-6">
            Become an account holder to{" "}
            <span className="text-gradient-cyan">access this service</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Open an account online or contact Prominence Bank for eligibility review. 
            Our team is ready to assist you with your institutional banking needs.
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

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border/30 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-outfit font-bold text-primary">24/7</div>
              <div className="text-muted-foreground text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-outfit font-bold text-primary">100+</div>
              <div className="text-muted-foreground text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-outfit font-bold text-primary">$10B+</div>
              <div className="text-muted-foreground text-sm">Transactions Processed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
