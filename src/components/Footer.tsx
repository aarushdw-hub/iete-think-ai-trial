import React from 'react';
import { 
  BrainCircuit, 
  Heart, 
  Linkedin, 
  Instagram, 
  Globe, 
  Mail, 
  MapPin, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020617] border-t border-white/10 pt-16 pb-12 overflow-hidden z-10">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-sky-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Branding & Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className="font-extrabold font-mono text-white text-xl">
                THINK <span className="text-emerald-400">AI 3.0</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Flagship AI Innovation Competition organized by IETE Student Forum (ISF) & Department of Electronics & Computer Science Engineering (ECS), TCET.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/iete-tcet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 flex items-center justify-center transition-all"
                aria-label="IETE TCET LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/iete_tcet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-400/50 flex items-center justify-center transition-all"
                aria-label="IETE TCET Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://tcetmumbai.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 flex items-center justify-center transition-all"
                aria-label="TCET Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-mono">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Competition</a></li>
              <li><a href="#timeline" className="hover:text-emerald-400 transition-colors">Event Timeline</a></li>
              <li><a href="#problem-statements" className="hover:text-emerald-400 transition-colors">Problem Tracks</a></li>
              <li><a href="#prizes" className="hover:text-emerald-400 transition-colors">Prize Pool ₹7,000</a></li>
              <li><a href="#fees" className="hover:text-emerald-400 transition-colors">Entry Fee Tiers</a></li>
              <li><a href="#rules" className="hover:text-emerald-400 transition-colors">Rules & FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Event Highlights */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              BENEFITS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
              <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-emerald-400" /> ₹7,000 Total Cash Prizes</li>
              <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-emerald-400" /> AICTE Activity Points</li>
              <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Offline TCET Presentation</li>
              <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-emerald-400" /> IETE Verified Certificates</li>
              <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Expert Jury Feedback</li>
            </ul>
          </div>

          {/* Col 4: Venue & Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              VENUE & ORGANIZERS
            </h4>
            <div className="space-y-3 text-xs text-slate-400 font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Thakur College of Engineering & Technology, Kandivali East, Mumbai 400101</span>
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>iete.tcet@tcetmumbai.in</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Think AI 3.0 • All Rights Reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>by <strong className="text-white">IETE Student Forum</strong>, Dept. of ECS, TCET</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
