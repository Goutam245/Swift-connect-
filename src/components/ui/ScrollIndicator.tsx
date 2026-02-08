import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">
        Scroll to explore
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-5 h-5 text-primary/60" />
      </motion.div>
    </motion.div>
  );
}
