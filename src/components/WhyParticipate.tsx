import React from 'react';
import { motion } from 'motion/react';
import { 
  Coins, 
  Award, 
  FileCheck, 
  Globe2, 
  Network, 
  Sparkles, 
  Zap 
} from 'lucide-react';
import { WHY_PARTICIPATE_REASONS } from '../data/eventData';

export const WhyParticipate: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Coins,
    Award,
    FileCheck,
    Globe2,
    Network,
    Sparkles
  };

  return (
    <section className="py-20 relative z-10 bg-slate-950/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-semibold">SECTION 03 • WHY PARTICIPATE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            UNLOCK YOUR <span className="text-gradient-emerald">AI POTENTIAL</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Participating in Think AI 3.0 provides concrete value for your resume, technical skills, and academic profile.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_PARTICIPATE_REASONS.map((reason, index) => {
            const IconComponent = iconMap[reason.icon] || Sparkles;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-300">
                      {reason.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-slate-400 font-sans leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>THINK AI 3.0 ADVANTAGE</span>
                  <span className="text-emerald-400 font-bold">0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
