import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { FloatingAIShapes } from './components/FloatingAIShapes';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEvent } from './components/AboutEvent';
import { Timeline } from './components/Timeline';
import { WhyParticipate } from './components/WhyParticipate';
import { Prizes } from './components/Prizes';
import { EntryFees } from './components/EntryFees';
import { ProblemStatements } from './components/ProblemStatements';
import { Guidelines } from './components/Guidelines';
import { Contact } from './components/Contact';
import { RegisterModal } from './components/RegisterModal';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 relative font-sans selection:bg-sky-400 selection:text-slate-950">
      {/* Cyberpunk Boot Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Futuristic Mouse Cursor Glow */}
      <CustomCursor />

      {/* Interactive Background Neural Particles */}
      <ParticleBackground />

      {/* Floating 3D Geometric AI Shapes */}
      <FloatingAIShapes />

      {/* Fixed Sticky Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />
        <AboutEvent />
        <Timeline />
        <WhyParticipate />
        <Prizes onOpenRegister={() => setIsRegisterOpen(true)} />
        <EntryFees onOpenRegister={() => setIsRegisterOpen(true)} />
        <ProblemStatements onOpenRegister={() => setIsRegisterOpen(true)} />
        <Guidelines />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}
