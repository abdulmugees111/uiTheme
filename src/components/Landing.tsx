import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { PawPrint, TreePine } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden bg-surface">
      {/* Background Tonal Layering */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-tertiary-container/10 rounded-full blur-[80px]" />
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full h-64 bg-surface-container-low/40 rounded-[100%] blur-[60px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center text-center max-w-md"
      >
        <div className="relative mb-12 group">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150 group-hover:bg-primary/20 transition-all duration-700" />
          <div className="relative flex flex-col items-center">
            <div className="flex items-center justify-center mb-4 text-primary">
              <PawPrint size={96} strokeWidth={2.5} fill="currentColor" />
            </div>
            <h1 className="text-primary font-headline font-black text-7xl md:text-8xl tracking-tighter leading-none italic">
              PACE
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary block">The Living Narrative</span>
          <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface tracking-tight">
            Find Your <span className="text-secondary italic">Roar.</span>
          </h2>
          <p className="text-on-surface-variant px-4 leading-relaxed">
            Join the communal movement protecting the wild through sustainable action and high-energy fitness tracking.
          </p>
        </div>

        <div className="mt-12 w-full max-w-xs space-y-4">
          <button 
            onClick={() => navigate('/login')}
            className="w-full bg-primary hover:bg-on-primary-container text-on-primary py-5 rounded-full font-headline font-bold text-lg shadow-[0_24px_32px_-12px_rgba(0,106,40,0.2)] active:scale-95 transition-all duration-200"
          >
            Get Started
          </button>
          <button 
            onClick={() => navigate('/login')}
            className="w-full bg-surface-container-highest/50 hover:bg-surface-container-highest text-on-surface py-5 rounded-full font-headline font-bold text-lg backdrop-blur-md active:scale-95 transition-all duration-200"
          >
            Sign In
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-6 right-6 md:left-auto md:right-12 md:max-w-xs">
        <div className="bg-surface-container-lowest/60 backdrop-blur-xl p-6 rounded-xl shadow-sm border border-outline-variant/15 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-on-secondary-container">
            <TreePine size={24} fill="currentColor" />
          </div>
          <div className="text-left">
            <h3 className="font-headline font-bold text-sm text-on-surface">Lion Hearted Community</h3>
            <p className="text-xs text-on-surface-variant">1,240 hectares of habitat protected this month.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
