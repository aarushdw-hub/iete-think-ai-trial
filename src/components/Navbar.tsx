import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight, 
  Trophy, 
  Clock, 
  Calendar, 
  DollarSign, 
  HelpCircle, 
  PhoneCall,
  UserPlus
} from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: Sparkles },
    { name: 'About', href: '#about', icon: BrainCircuit },
    { name: 'Timeline', href: '#timeline', icon: Clock },
    { name: 'Prizes', href: '#prizes', icon: Trophy },
    { name: 'Entry Fees', href: '#fees', icon: DollarSign },
    { name: 'Guidelines', href: '#rules', icon: HelpCircle },
    { name: 'Contact', href: '#contact', icon: PhoneCall },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-900/50">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-pink-500 to-purple-500 transition-all duration-150 shadow-[0_0_12px_rgba(0,255,157,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-emerald-950/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Institution Branding */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-pink-500 to-purple-600 p-0.5 shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-white text-lg font-mono leading-none">
                  THINK <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]">AI 3.0</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-400/30">
                  TCET • ISF
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-sans tracking-wide">
                Dept of ECS • TCET Mumbai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors flex items-center gap-1.5"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Action Buttons & Registration Status */}
          <div className="flex items-center gap-3">
            {/* Live Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-semibold tracking-wide">REGISTRATIONS OPEN</span>
            </div>

            {/* Register CTA Button */}
            <button
              onClick={onOpenRegister}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 animate-shimmer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-pink-500 to-purple-600 rounded-full animate-pulse-glow" />
              <span className="relative px-4 py-2 rounded-full bg-[#030712] group-hover:bg-transparent transition-colors duration-300 flex items-center gap-2 text-xs font-bold text-white tracking-wide uppercase">
                <UserPlus className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white transition-colors" />
                <span>Register Now</span>
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 md:hidden bg-[#030712]/95 border-b border-white/10 backdrop-blur-2xl px-4 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <span>NAVIGATION</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  LIVE
                </span>
              </div>

              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-emerald-400 hover:bg-slate-800/80 text-sm font-medium transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <IconComponent className="w-4 h-4 text-emerald-400" />
                      {link.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-pink-500 to-purple-600 text-white font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 animate-shimmer"
                >
                  <UserPlus className="w-4 h-4" />
                  Register Team Now (₹7,000 Pool)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
