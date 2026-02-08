import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, FileCheck, AlertTriangle } from "lucide-react";

interface ComplianceSectionProps {
  eligibilityText: string;
  disclaimerText: string;
}

export function ComplianceSection({ eligibilityText, disclaimerText }: ComplianceSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const compliancePoints = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "KYC/AML Compliance",
      description: "Rigorous identity verification and anti-money laundering procedures"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Sanctions Screening",
      description: "Real-time screening against global sanctions lists"
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Transaction Monitoring",
      description: "Continuous monitoring of all transaction activities"
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Final Bank Approval",
      description: "Every transaction requires internal risk assessment"
    },
  ];

  return (
    <section ref={ref} className="relative py-24 section-dark overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-foreground mb-6">
            Eligibility & <span className="text-gradient-cyan">Compliance</span>
          </h2>
        </motion.div>

        {/* Main Compliance Box */}
        <motion.div
          className="compliance-box max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center bg-primary/10 border border-primary/30">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-outfit font-semibold text-foreground mb-3">
                Account Holder Requirement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {eligibilityText}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Compliance Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {compliancePoints.map((point, index) => (
            <motion.div
              key={index}
              className="card-premium text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-primary/10 border border-primary/30 text-primary">
                {point.icon}
              </div>
              <h4 className="font-outfit font-semibold text-foreground mb-2">
                {point.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-8">
            <span className="font-medium text-foreground/80">Public Disclaimer:</span> {disclaimerText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
