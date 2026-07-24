import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-slate-900/90 hover:bg-sky-500 hover:text-slate-950 text-sky-400 border border-sky-400/30 shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
