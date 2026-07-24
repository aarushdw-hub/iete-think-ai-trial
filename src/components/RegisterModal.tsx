import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  QrCode, 
  CheckCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldCheck, 
  Send, 
  Sparkles,
  ArrowRight,
  Download,
  AlertCircle
} from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [teamSize, setTeamSize] = useState<number>(2);
  const [isIete, setIsIete] = useState<boolean>(true);
  const [transactionId, setTransactionId] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const calculatedFee = teamSize === 1
    ? (isIete ? 80 : 100)
    : (isIete ? 150 : 200);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleSimulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId.trim()) return;
    setFormSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative z-10 w-full max-w-3xl glass-card rounded-3xl border border-emerald-500/40 p-6 sm:p-8 neon-glow-emerald overflow-hidden bg-[#020617]/95 shadow-2xl my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!formSubmitted ? (
            <div>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-semibold">OFFICIAL REGISTRATION PORTAL</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-mono text-white">
                  REGISTER FOR <span className="text-gradient-emerald">THINK AI 3.0</span>
                </h2>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  IETE Student Forum • Department of ECS • TCET Mumbai
                </p>
              </div>

              {/* Step By Step Workflow */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: QR Code & UPI Details */}
                <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-3">
                      STEP 1: SCAN & PAY ENTRY FEE
                    </span>

                    {/* Custom SVG Stylized QR Code Placeholder */}
                    <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl shadow-xl mb-4 flex flex-col items-center justify-center relative group">
                      <div className="w-full h-full border-4 border-slate-900 rounded-xl flex flex-col items-center justify-center p-2 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-mono text-center">
                        <QrCode className="w-16 h-16 text-emerald-400 mb-1" />
                        <span className="text-[11px] font-bold text-white uppercase">IETE TCET UPI</span>
                        <span className="text-[9px] text-emerald-300 font-bold">{EVENT_DETAILS.upiId}</span>
                        <span className="text-[10px] text-amber-400 font-bold mt-1">₹{calculatedFee} INR</span>
                      </div>
                    </div>

                    {/* Copy UPI Box */}
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono text-slate-300 truncate">
                        UPI ID: <span className="text-emerald-300 font-bold">{EVENT_DETAILS.upiId}</span>
                      </span>
                      <button
                        onClick={handleCopyUpi}
                        className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-400 hover:text-slate-950 text-[11px] font-mono font-bold transition-colors flex items-center gap-1 flex-shrink-0"
                      >
                        {copiedUpi ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy UPI</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Fee Selector Controls */}
                    <div className="space-y-3 text-left">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>Team Size:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((sz) => (
                            <button
                              key={sz}
                              onClick={() => setTeamSize(sz)}
                              className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                                teamSize === sz ? 'bg-emerald-400 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>IETE Member:</span>
                        <button
                          onClick={() => setIsIete(!isIete)}
                          className={`px-3 py-0.5 rounded text-[11px] font-mono font-bold ${
                            isIete ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400' : 'bg-slate-950 text-slate-400'
                          }`}
                        >
                          {isIete ? 'YES (Discounted)' : 'NO (Standard)'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-300 font-mono flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Calculated Fee: ₹{calculatedFee} INR</span>
                  </div>
                </div>

                {/* Right Column: Submission Form & Google Form Redirect */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-3">
                      STEP 2: FILL REGISTRATION FORM
                    </span>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                      After completing the UPI payment of <span className="text-emerald-300 font-bold font-mono">₹{calculatedFee}</span>, copy your UTR / Transaction Reference Number and complete the registration form.
                    </p>

                    {/* Quick Registration Form Simulation */}
                    <form onSubmit={handleSimulateSubmit} className="space-y-4 mb-6">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                          Enter 12-Digit UPI Transaction ID / UTR:
                        </label>
                        <input
                          type="text"
                          required
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          placeholder="e.g. 423819203941"
                          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-emerald-400"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!transactionId.trim()}
                        className="w-full py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Confirm & Generate Seat Pass</span>
                      </button>
                    </form>

                    <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-slate-800"></div>
                      <span className="flex-shrink mx-4 text-[10px] font-mono text-slate-500 uppercase">OR VIA OFFICIAL GOOGLE FORM</span>
                      <div className="flex-grow border-t border-slate-800"></div>
                    </div>

                    {/* External Google Form Button */}
                    <a
                      href={EVENT_DETAILS.googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-pink-500 to-purple-600 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:brightness-110 animate-shimmer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open Google Registration Form</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="pt-4 text-center text-[11px] text-slate-400 font-mono">
                    Official ISF TCET Event Verification Desk
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Confirmation Receipt State */
            <div className="text-center py-8 font-mono">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                REGISTRATION INITIATED!
              </h3>

              <p className="text-xs text-slate-300 font-sans max-w-md mx-auto mb-6">
                Your transaction ref <span className="text-emerald-300 font-bold">{transactionId}</span> has been logged for Think AI 3.0. Please complete the final form submission if you haven't already.
              </p>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 max-w-sm mx-auto text-left mb-6 text-xs text-slate-300 space-y-2">
                <div>Event: <span className="text-emerald-300 font-bold">Think AI 3.0</span></div>
                <div>Venue: <span className="text-white">TCET Campus, Mumbai</span></div>
                <div>Fee Paid: <span className="text-amber-300 font-bold">₹{calculatedFee} INR</span></div>
                <div>Status: <span className="text-emerald-400 font-bold">Verification Pending</span></div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs uppercase"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
