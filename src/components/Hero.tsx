import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  Award, 
  Users, 
  MapPin, 
  Calendar,
  CheckCircle,
  QrCode
} from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { EVENT_DETAILS, STATS } from '../data/eventData';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Glow background radial elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-pink-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Organization Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-mono mb-6 shadow-xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">IETE STUDENT FORUM</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">DEPT OF ECS, TCET MUMBAI</span>
          </motion.div>

          {/* Main Title THINK AI 3.0 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase font-mono leading-none mb-4"
          >
            THINK <span className="text-gradient-emerald drop-shadow-[0_0_40px_rgba(0,255,157,0.5)]">AI 3.0</span>
          </motion.h1>

          {/* Subtitle & Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 tracking-wide font-sans mb-4"
          >
            AI Innovation Competition
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 font-sans leading-relaxed"
          >
            Unleash machine intelligence, engineer futuristic AI prototypes, and compete for total prizes worth <span className="text-amber-300 font-bold">₹7,000</span> & <span className="text-emerald-300 font-bold">AICTE Activity Points</span> at Thakur College of Engineering & Technology.
          </motion.p>

          {/* Prize Pool Hero Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/40 text-amber-300 mb-8 backdrop-blur-md shadow-lg shadow-amber-500/10"
          >
            <Trophy className="w-6 h-6 text-amber-400 animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="text-left">
              <div className="text-[10px] font-mono uppercase text-amber-300/80">Total Cash Prize Pool</div>
              <div className="text-2xl font-black font-mono text-gradient-gold">₹7,000 INR</div>
            </div>
          </motion.div>

          {/* Live Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <CountdownTimer />
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            {/* Primary Register Button */}
            <button
              onClick={onOpenRegister}
              className="animate-shimmer w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-pink-500 to-purple-600 text-white font-bold text-base tracking-wide uppercase hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 group border border-emerald-300/40"
            >
              <Sparkles className="w-5 h-5 text-emerald-200 group-hover:rotate-12 transition-transform" />
              <span>Register Team Now</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Problem Statements Button */}
            <a
              href="#problem-statements"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-all hover:border-emerald-500/40"
            >
              <BrainCircuit className="w-5 h-5 text-emerald-400" />
              <span>Explore Problem Tracks</span>
            </a>
          </motion.div>

          {/* Location & Venue Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono"
          >
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>TCET Campus, Kandivali East, Mumbai</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
              <Calendar className="w-3.5 h-3.5 text-pink-400" />
              <span>Presentation: August 28, 2026</span>
            </span>
          </motion.div>
        </div>

        {/* Floating Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto"
        >
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-4 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white text-gradient-emerald">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
