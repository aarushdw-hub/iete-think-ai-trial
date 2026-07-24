import React from 'react';
import { motion } from 'motion/react';

export const FloatingAIShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Floating Ring */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-12 left-[8%] w-64 h-64 rounded-full border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-pink-500/10 blur-[1px]"
      >
        <div className="absolute inset-4 rounded-full border border-emerald-400/30 border-dashed animate-spin" style={{ animationDuration: '30s' }} />
      </motion.div>

      {/* Top Right Orbital Mesh Octagon */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          rotate: [0, -120, -240],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-[5%] w-72 h-72 rounded-3xl border border-pink-500/20 bg-pink-600/5 backdrop-blur-3xl rotate-45 flex items-center justify-center"
      >
        <div className="w-48 h-48 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 rotate-12" />
      </motion.div>

      {/* Center Left Floating Glowing Core */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          scale: [0.9, 1.1, 0.9],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-[2%] w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]"
      />

      {/* Bottom Right Floating Core */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]"
      />

      {/* Cyber Grid Perspective Grid Plane in Bottom */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
