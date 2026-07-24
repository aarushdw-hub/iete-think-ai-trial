import React from 'react';
import { motion } from 'motion/react';
import { 
  UserPlus, 
  FileText, 
  UploadCloud, 
  Presentation, 
  Trophy, 
  Clock, 
  MapPin, 
  Calendar,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/eventData';

export const Timeline: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    UserPlus,
    FileText,
    UploadCloud,
    Presentation,
    Trophy
  };

  const handleAddToCalendar = (eventTitle: string, dateStr: string) => {
    const text = encodeURIComponent(`Think AI 3.0: ${eventTitle}`);
    const details = encodeURIComponent(`IETE ISF & Dept of ECS TCET Think AI 3.0 Event Milestone.`);
    const location = encodeURIComponent(`TCET Campus, Kandivali East, Mumbai`);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="timeline" className="py-20 relative z-10 bg-[#030712]">
      {/* Background glow line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-400 text-xs font-mono mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-semibold">SECTION 02 • EVENT TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            ROADMAP TO <span className="text-gradient-pink">VICTORY</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Follow the key milestones from registration to the grand offline presentation at TCET.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Connecting Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 -translate-x-1/2 hidden sm:block">
            <div className="w-full h-1/2 bg-gradient-to-b from-emerald-400 via-pink-500 to-amber-400 rounded-full animate-pulse" />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {TIMELINE_EVENTS.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || Calendar;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-2 border-emerald-400 shadow-lg shadow-emerald-500/20 my-1">
                    <IconComponent className="w-5 h-5 text-emerald-400" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-0' : 'sm:pl-0'
                  }`}>
                    <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 relative group">
                      {/* Top status indicator */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                          item.status === 'completed'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : item.status === 'active'
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 animate-pulse'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          {item.status === 'active' ? '• LIVE STAGE' : item.status.toUpperCase()}
                        </span>

                        <button
                          onClick={() => handleAddToCalendar(item.title, item.date)}
                          className="text-[11px] font-mono text-slate-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                          title="Add milestone to Google Calendar"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>+ Calendar</span>
                        </button>
                      </div>

                      <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mb-3">
                        <span className="flex items-center gap-1 text-slate-300">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          {item.date} • {item.time}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-pink-400" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-slate-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
