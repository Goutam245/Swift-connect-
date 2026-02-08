import { motion } from "framer-motion";

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-left orb */}
      <motion.div
        className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 201, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Bottom-right orb */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 201, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Center subtle orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 201, 255, 0.04) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Diagonal light beam from top-right */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[800px] opacity-[0.03]"
        style={{
          background: "linear-gradient(225deg, rgba(0, 201, 255, 0.3) 0%, transparent 60%)",
          transform: "skewX(-15deg) translateX(50%)",
        }}
      />
    </div>
  );
}
