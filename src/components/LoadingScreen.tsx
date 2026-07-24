import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING TCET IETE SYSTEM...');

  const logLines = [
    'Authenticating IETE Student Forum Protocols...',
    'Loading AI Innovation Competition Modules...',
    'Allocating ₹7,000 Prize Pool Security Vault...',
    'Connecting Department of ECS Servers...',
    'Think AI 3.0 System Ready!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        const lineIdx = Math.min(Math.floor((next / 100) * logLines.length), logLines.length - 1);
        setStatusText(logLines[lineIdx]);
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        className="fixed inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center p-4 overflow-hidden bg-cyber-grid"
      >
        {/* Glow ambient */}
        <div className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

        <div className="w-full max-w-md relative z-10 glass-card p-8 rounded-2xl border border-sky-500/30 neon-glow-cyan text-center">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-mono mb-6">
            <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
            <span>IETE ISF • DEPT OF ECS TCET</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2 font-mono">
            THINK <span className="text-sky-400">AI 3.0</span>
          </h1>
          <p className="text-xs font-mono text-slate-400 mb-8 tracking-widest uppercase">
            AI Innovation Competition Engine
          </p>

          {/* Progress Bar Container */}
          <div className="w-full bg-slate-950/80 rounded-full h-3 border border-slate-800 p-0.5 mb-4 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-purple-600 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Progress Percentage & Status */}
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-6">
            <span className="flex items-center gap-1 text-sky-400">
              <Terminal className="w-3.5 h-3.5" />
              {progress === 100 ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> SYSTEM READY
                </span>
              ) : (
                'LOADING BOOTSTRAP...'
              )}
            </span>
            <span className="text-sky-300 font-bold">{progress}%</span>
          </div>

          {/* Status Console Text */}
          <div className="bg-slate-950/90 rounded-lg p-3 border border-slate-800/80 text-left h-16 flex items-center">
            <p className="text-[11px] font-mono text-slate-300 animate-pulse flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-sky-400 flex-shrink-0" />
              <span>{statusText}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
