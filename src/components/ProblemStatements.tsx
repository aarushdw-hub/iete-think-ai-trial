import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, 
  Search, 
  Code2, 
  Sparkles, 
  ChevronRight, 
  CheckCircle, 
  Bot, 
  FileCode, 
  Layers,
  Send
} from 'lucide-react';
import { PROBLEM_STATEMENTS } from '../data/eventData';

interface ProblemStatementsProps {
  onOpenRegister: () => void;
}

export const ProblemStatements: React.FC<ProblemStatementsProps> = ({ onOpenRegister }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // AI Idea Assistant Interactive State
  const [userIdeaText, setUserIdeaText] = useState<string>('');
  const [evaluating, setEvaluating] = useState<boolean>(false);
  const [evalResult, setEvalResult] = useState<{
    score: number;
    feedback: string;
    suggestedTrack: string;
    matchedTechnologies: string[];
  } | null>(null);

  const categories = ['All', 'Generative AI & HealthTech', 'IoT & Smart Cities', 'FinTech & Cybersecurity', 'EdTech & Assistive AI', 'Open Innovation'];

  const filteredStatements = PROBLEM_STATEMENTS.filter((ps) => {
    const matchesCategory = selectedCategory === 'All' || ps.category === selectedCategory;
    const matchesSearch = ps.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ps.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ps.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleEvaluateIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userIdeaText.trim()) return;

    setEvaluating(true);
    setEvalResult(null);

    setTimeout(() => {
      setEvaluating(false);
      const textLower = userIdeaText.toLowerCase();

      let track = 'Open Innovation Track';
      if (textLower.includes('health') || textLower.includes('doctor') || textLower.includes('medical') || textLower.includes('patient')) {
        track = 'Generative AI for Healthcare & Diagnostics';
      } else if (textLower.includes('traffic') || textLower.includes('park') || textLower.includes('campus') || textLower.includes('iot')) {
        track = 'Smart Campus & Intelligent Infrastructure';
      } else if (textLower.includes('bank') || textLower.includes('fraud') || textLower.includes('security') || textLower.includes('crypto')) {
        track = 'AI-Powered Fraud Detection & FinTech Security';
      } else if (textLower.includes('learn') || textLower.includes('student') || textLower.includes('disable') || textLower.includes('sign')) {
        track = 'Adaptive Learning & Accessibility for Differently Abled';
      }

      setEvalResult({
        score: Math.floor(Math.random() * 15) + 84, // 84 to 98 score
        feedback: "Great technical feasibility! Your concept aligns well with Think AI 3.0 evaluation parameters regarding real-world impact and prototype feasibility.",
        suggestedTrack: track,
        matchedTechnologies: ["Python / FastAPI", "PyTorch / TensorFlow", "Gemini API", "React Tailwind UI"]
      });
    }, 1200);
  };

  return (
    <section id="problem-statements" className="py-20 relative z-10 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span className="font-semibold">AI INNOVATION TRACKS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            PROBLEM <span className="text-gradient-emerald">STATEMENTS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Choose a challenge domain below or enter your original project idea in our Open Innovation Track.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AI stack or keywords..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>

        {/* Problem Statements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredStatements.map((ps, index) => (
            <motion.div
              key={ps.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-semibold uppercase">
                    {ps.category}
                  </span>
                  <span className="text-[10px] font-mono text-pink-300 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-400/30">
                    {ps.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-mono text-white mb-3 group-hover:text-emerald-300 transition-colors leading-snug">
                  {ps.title}
                </h3>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                  {ps.description}
                </p>

                {/* Tech Badges */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono uppercase text-slate-500 mb-2 flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-emerald-400" />
                    Recommended AI Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ps.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 font-mono font-bold text-xs uppercase tracking-wider transition-all border border-slate-800 flex items-center justify-center gap-2 group-hover:border-emerald-400"
              >
                <span>Register for this Track</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* AI Idea Readiness & Pitch Checker Interactive Widget */}
        <div className="rounded-3xl p-6 sm:p-8 glass-card border border-purple-500/30 neon-glow-purple max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-mono text-white">
                AI PROJECT READINESS & TRACK MATCH EVALUATOR
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Type a short summary of your AI project idea below to test its alignment with Think AI 3.0 evaluation criteria.
              </p>
            </div>
          </div>

          <form onSubmit={handleEvaluateIdea} className="space-y-4">
            <div>
              <textarea
                rows={3}
                value={userIdeaText}
                onChange={(e) => setUserIdeaText(e.target.value)}
                placeholder="e.g. A computer vision model using OpenCV to detect medical anomalies in chest X-rays with a React frontend..."
                className="w-full p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 font-mono"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={evaluating || !userIdeaText.trim()}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-pink-500 to-purple-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-lg shadow-emerald-500/20 disabled:opacity-50 transition-all animate-shimmer"
              >
                {evaluating ? (
                  <>
                    <Bot className="w-4 h-4 animate-spin text-emerald-300" />
                    <span>Evaluating Feasibility...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-emerald-200" />
                    <span>Evaluate Idea Readiness</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Evaluation Result Display */}
          <AnimatePresence>
            {evalResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-5 rounded-2xl bg-slate-950 border border-emerald-500/40 text-left font-mono"
              >
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <span className="text-xs text-emerald-300 font-bold uppercase flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    FEASIBILITY ANALYSIS SCORE
                  </span>
                  <span className="text-lg font-black text-emerald-400">{evalResult.score}/100</span>
                </div>

                <div className="text-xs text-slate-300 mb-3 font-sans">
                  <span className="font-bold text-white">Recommended Track: </span>
                  <span className="text-emerald-300 font-mono font-bold">{evalResult.suggestedTrack}</span>
                </div>

                <p className="text-xs text-slate-400 font-sans mb-3">
                  {evalResult.feedback}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] text-slate-500">Suggested Stack:</span>
                  {evalResult.matchedTechnologies.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-emerald-500/10 text-emerald-300 text-[10px] rounded border border-emerald-400/30">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
