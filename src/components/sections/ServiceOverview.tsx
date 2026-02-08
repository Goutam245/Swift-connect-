import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ServiceOverviewProps {
  description: string;
  benefits: Array<{
    icon: ReactNode;
    title: string;
    description: string;
  }>;
}

export function ServiceOverview({ description, benefits }: ServiceOverviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 section-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 mb-6">
            Service Overview
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="card-light group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 group-hover:from-cyan-500/20 group-hover:to-cyan-600/10 transition-all duration-300">
                <div className="text-cyan-600">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-lg font-outfit font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
