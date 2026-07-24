import React from 'react';
import { motion } from 'motion/react';
import { 
  BrainCircuit, 
  Code2, 
  Presentation, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  GraduationCap 
} from 'lucide-react';
import { ABOUT_HIGHLIGHTS, EVENT_DETAILS } from '../data/eventData';

export const AboutEvent: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    BrainCircuit,
    Code2,
    Presentation,
    Users
  };

  return (
    <section id="about" className="py-20 relative z-10 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span className="font-semibold">SECTION 01 • ABOUT THE EVENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            WHAT IS <span className="text-gradient-emerald">THINK AI 3.0?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Organized by the <span className="text-white font-semibold">IETE Student Forum (ISF)</span> in association with the <span className="text-white font-semibold">Department of Electronics & Computer Science Engineering (ECS)</span> at Thakur College of Engineering & Technology (TCET), Think AI 3.0 is a flagship national-level AI innovation venue.
          </p>
        </div>

        {/* 4 Core Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_HIGHLIGHTS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || BrainCircuit;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Glow accent corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />

                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-6 flex items-center justify-center shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Track Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* College & Department Endorsement Banner */}
        <div className="mt-16 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-mono">
                  Department of Electronics & Computer Science Engineering
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Thakur College of Engineering & Technology (TCET) • Autonomous Institute Affiliated to University of Mumbai
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" /> TCET Campus, Mumbai
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-400/30">
                IETE Approved
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
