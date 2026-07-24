import React from 'react';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Building2, 
  UserCheck,
  ExternalLink
} from 'lucide-react';
import { CONTACT_PERSONS, EVENT_DETAILS } from '../data/eventData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative z-10 bg-slate-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono mb-3">
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="font-semibold">SECTION 07 • EVENT HELPLINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            GET IN <span className="text-gradient-emerald">TOUCH</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Have questions regarding registration, payment verification, or team rules? Reach out to the student chairs & faculty.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CONTACT_PERSONS.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold uppercase">
                    {person.role}
                  </span>
                  <UserCheck className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="text-xl font-bold font-mono text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {person.name}
                </h3>

                <p className="text-xs text-slate-400 font-sans mb-6 leading-relaxed">
                  {person.title}
                </p>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  {/* Call Button */}
                  <a
                    href={`tel:${person.phone.replace(/[^0-9+]/g, '')}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-mono text-xs font-semibold flex items-center justify-between transition-colors border border-slate-800"
                  >
                    <span className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{person.phone}</span>
                    </span>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 group-hover:text-slate-950">Call</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={person.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 font-mono text-xs font-semibold flex items-center justify-between transition-colors border border-emerald-500/30"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Chat</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue Location Banner with Google Maps link */}
        <div className="rounded-3xl p-8 glass-card border border-white/10 relative overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-1">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-mono text-white mb-1">
                TCET CAMPUS LOCATION
              </h4>
              <p className="text-sm text-slate-300 font-sans">
                Thakur College of Engineering and Technology, A-Block, Thakur Educational Campus, Shyamnarayan Trivedi Marg, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Thakur+College+of+Engineering+and+Technology+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-300 transition-colors flex items-center gap-2 flex-shrink-0 shadow-lg shadow-emerald-500/20"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
