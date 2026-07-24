import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  DollarSign, 
  Users, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Calculator,
  QrCode,
  ArrowRight
} from 'lucide-react';
import { FEE_PLANS, EVENT_DETAILS } from '../data/eventData';

interface EntryFeesProps {
  onOpenRegister: () => void;
}

export const EntryFees: React.FC<EntryFeesProps> = ({ onOpenRegister }) => {
  // Interactive Calculator State
  const [calcSize, setCalcSize] = useState<number>(2);
  const [isIeteMember, setIsIeteMember] = useState<boolean>(true);

  // Dynamic fee computation logic based on official combinations
  // IETE: Solo ₹80, Team (2-4) ₹150
  // Non-IETE: Solo ₹100, Team (2-4) ₹200
  const calculatedFee = calcSize === 1
    ? (isIeteMember ? 80 : 100)
    : (isIeteMember ? 150 : 200);

  const perPersonCost = (calculatedFee / calcSize).toFixed(1);

  return (
    <section id="fees" className="py-20 relative z-10 bg-slate-950/80 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span className="font-semibold">SECTION 05 • ENTRY FEES & PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            AFFORDABLE <span className="text-gradient-emerald">ENTRY TIERS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Transparent pricing designed for individual innovators and collaborative teams with special IETE Student Forum discounts.
          </p>
        </div>

        {/* 4 Cards Grid - Showing All Official Combinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEE_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass-card glass-card-hover rounded-2xl p-6 border relative flex flex-col justify-between ${
                plan.popular
                  ? 'border-emerald-400/60 neon-border-emerald bg-slate-900/90'
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-mono font-bold text-[10px] uppercase tracking-wider shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold uppercase ${
                    plan.isIete
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/30'
                      : 'bg-pink-500/10 text-pink-300 border border-pink-400/30'
                  }`}>
                    {plan.isIete ? 'IETE Member Discount' : 'Standard Non-IETE'}
                  </span>
                  <Users className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="text-lg font-bold font-mono text-white mb-2">
                  {plan.category}
                </h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold font-mono text-white text-gradient-emerald">
                      ₹{plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      / total fee
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 block mt-1">
                    {plan.perPersonRate}
                  </span>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-800 mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-mono font-bold text-xs uppercase tracking-wider transition-all border border-slate-700"
              >
                Select {plan.teamSize}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Interactive Dynamic Fee Calculator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 glass-card border border-emerald-500/30 neon-glow-emerald">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-mono text-white">
                INTERACTIVE TEAM FEE CALCULATOR
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Customize your team size and membership to instantly calculate your exact entry fee.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Controls */}
            <div className="space-y-6">
              {/* Select Team Size */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  1. Select Team Size (1 to 4 Members):
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((size) => (
                    <button
                      key={size}
                      onClick={() => setCalcSize(size)}
                      className={`py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                        calcSize === size
                          ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {size} {size === 1 ? 'Solo' : 'Mem'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggle IETE Membership */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  2. IETE Student Forum Membership Status:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsIeteMember(true)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all text-left flex items-center justify-between ${
                      isIeteMember
                        ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>IETE Member</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </button>

                  <button
                    onClick={() => setIsIeteMember(false)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all text-left flex items-center justify-between ${
                      !isIeteMember
                        ? 'bg-pink-500/20 border border-pink-400 text-pink-300'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>Non-IETE</span>
                    <Users className="w-4 h-4 text-pink-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Breakdown Box */}
            <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between text-center">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                  ESTIMATED TEAM ENTRY FEE
                </span>
                <div className="text-4xl font-black font-mono text-gradient-emerald mb-2">
                  ₹{calculatedFee} INR
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 py-1 px-3 rounded-full inline-block border border-emerald-400/20 mb-4">
                  ₹{perPersonCost} / member ({calcSize} {calcSize === 1 ? 'Person' : 'Members'})
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-pink-500 to-purple-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg shadow-emerald-500/20 transition-all animate-shimmer"
              >
                <QrCode className="w-4 h-4" />
                <span>Proceed to Pay ₹{calculatedFee} via UPI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
