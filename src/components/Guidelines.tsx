import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  CheckSquare, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Users, 
  FileText, 
  Code, 
  Sparkles 
} from 'lucide-react';
import { RULES_CHECKLIST, FAQS } from '../data/eventData';

export const Guidelines: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'faqs'>('checklist');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');
  const [selectedRuleCategory, setSelectedRuleCategory] = useState<string>('all');

  const filteredRules = selectedRuleCategory === 'all'
    ? RULES_CHECKLIST
    : RULES_CHECKLIST.filter((rule) => rule.category === selectedRuleCategory);

  return (
    <section id="rules" className="py-20 relative z-10 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-semibold">SECTION 06 • GUIDELINES & FAQS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            RULES & <span className="text-gradient-emerald">INSTRUCTIONS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Review the official guidelines, eligibility criteria, and frequently asked questions for Think AI 3.0.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === 'checklist'
                  ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Rules & Checklist</span>
            </button>

            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === 'faqs'
                  ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Rules Checklist Cards */}
        {activeTab === 'checklist' && (
          <div>
            {/* Rule Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: 'all', label: 'All Rules' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'submission', label: 'Submission Format' },
                { id: 'presentation', label: 'TCET Presentation' },
                { id: 'conduct', label: 'Code of Conduct' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedRuleCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    selectedRuleCategory === cat.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRules.map((rule, idx) => (
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                        0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 uppercase border border-slate-800">
                        {rule.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-mono text-white mb-2">
                      {rule.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {rule.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>MANDATORY REQUIREMENT</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 2: Expandable FAQ Accordion */}
        {activeTab === 'faqs' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq) => {
              const isExpanded = expandedFaq === faq.id;

              return (
                <div
                  key={faq.id}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 flex-shrink-0 font-mono font-bold text-xs">
                        ?
                      </div>
                      <span className="text-base font-bold font-mono text-white">
                        {faq.question}
                      </span>
                    </div>

                    <div className="text-emerald-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-0 border-t border-slate-800/80 text-sm text-slate-400 font-sans leading-relaxed"
                      >
                        <p className="mt-4">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
