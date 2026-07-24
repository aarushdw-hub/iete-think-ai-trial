import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, CheckCircle2, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRIZES } from '../data/eventData';

interface PrizesProps {
  onOpenRegister: () => void;
}

export const Prizes: React.FC<PrizesProps> = ({ onOpenRegister }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="prizes" className="py-20 relative z-10 bg-[#020617] overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>SECTION 04 • PRIZE POOL ₹7,000</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            REWARDING <span className="text-gradient-gold">EXCELLENCE</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-sans">
            Top 3 podium teams take home cash prizes, trophies, certificates, and direct industry networking perks.
          </p>
        </div>

        {/* 3 Prize Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRIZES.map((prize, index) => {
            const isGold = prize.trophyType === 'gold';
            const isSilver = prize.trophyType === 'silver';
            const isBronze = prize.trophyType === 'bronze';

            let cardBorder = 'border-white/10';
            let amountGradient = 'text-white';
            let badgeBg = 'bg-slate-800 text-slate-300 border border-slate-700';

            if (isGold) {
              cardBorder = 'border-amber-500/60 bg-gradient-to-b from-slate-900/95 via-amber-950/20 to-slate-900/95';
              amountGradient = 'text-gradient-gold';
              badgeBg = 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black shadow-md shadow-amber-500/20';
            } else if (isSilver) {
              cardBorder = 'border-slate-400/40 bg-gradient-to-b from-slate-900/95 via-slate-800/20 to-slate-900/95';
              amountGradient = 'text-gradient-silver';
              badgeBg = 'bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-bold';
            } else if (isBronze) {
              cardBorder = 'border-orange-500/40 bg-gradient-to-b from-slate-900/95 via-orange-950/20 to-slate-900/95';
              amountGradient = 'text-gradient-bronze';
              badgeBg = 'bg-gradient-to-r from-orange-400 to-amber-700 text-white font-bold';
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={triggerConfetti}
                className={`glass-card glass-card-hover rounded-3xl p-8 border relative flex flex-col justify-between cursor-pointer group hover:-translate-y-2 transition-all duration-300 ${cardBorder} ${
                  isGold ? 'lg:-translate-y-4 shadow-2xl shadow-amber-500/15' : ''
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider ${badgeBg}`}>
                    {prize.badgeText}
                  </span>

                  <Trophy className={`w-8 h-8 ${prize.iconColor} group-hover:rotate-12 transition-transform duration-300 drop-shadow-md`} />
                </div>

                {/* Amount Header */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1 tracking-widest font-semibold">
                    {prize.rank}
                  </span>
                  <div className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${amountGradient}`}>
                    {prize.currency}{prize.amount.toLocaleString()}
                  </div>
                  <span className="text-xs text-slate-400 font-sans mt-1.5 block">
                    Cash Prize + Trophy & Merit Certificate
                  </span>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 pt-6 border-t border-slate-800/80 mb-8">
                  <div className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-wider mb-3">
                    REWARD INCLUSIONS:
                  </div>
                  {prize.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        isGold ? 'text-amber-400' : isSilver ? 'text-slate-300' : 'text-orange-400'
                      }`} />
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA trigger inside card */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerConfetti();
                    onOpenRegister();
                  }}
                  className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isGold
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/25 animate-shimmer'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/80 hover:border-slate-500'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim {prize.rank}</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Participation Assurance Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
          <span className="text-emerald-400 font-bold">100% CERTIFICATE GUARANTEE:</span> All participating teams who present their abstract & prototype on Presentation Day receive official hardcopy certificates with AICTE Activity Points.
        </div>
      </div>
    </section>
  );
};
