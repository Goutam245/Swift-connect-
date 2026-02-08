import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  delay: number;
}

export function NetworkVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Generate random nodes
  const nodes: Node[] = Array.from({ length: 12 }, (_, i) => ({
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    vx: (Math.random() - 0.5) * 0.02,
    vy: (Math.random() - 0.5) * 0.02,
    delay: i * 0.2,
  }));

  // Generate connections between nearby nodes
  const connections: Array<{ from: number; to: number }> = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 35) {
        connections.push({ from: i, to: j });
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <svg className="w-full h-full opacity-40">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(189 100% 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(180 100% 50%)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map((conn, index) => (
          <motion.line
            key={`line-${index}`}
            x1={`${nodes[conn.from].x}%`}
            y1={`${nodes[conn.from].y}%`}
            x2={`${nodes[conn.to].x}%`}
            y2={`${nodes[conn.to].y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.g key={`node-${index}`}>
            {/* Outer glow */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="8"
              fill="none"
              stroke="hsl(189 100% 50%)"
              strokeWidth="1"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Inner node */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="hsl(189 100% 50%)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: node.delay }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
