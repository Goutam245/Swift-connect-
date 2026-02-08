import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface UseCase {
  icon: ReactNode;
  title: string;
  description: string;
}

interface UseCasesSectionProps {
  useCases: UseCase[];
}

export function UseCasesSection({ useCases }: UseCasesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 section-light overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 mb-6">
            Typical Use Cases
          </h2>
          <p className="text-lg text-slate-600">
            Real-world applications for institutional and corporate clients
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/5"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 text-cyan-600">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-outfit font-semibold text-slate-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
