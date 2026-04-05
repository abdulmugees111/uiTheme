import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Bolt, CheckCircle2, Share2, ArrowRight, Trophy, Sparkles } from 'lucide-react';

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6 text-on-primary overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-full h-full bg-primary-container/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-tertiary-container/10 rounded-full blur-[100px]" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 flex flex-col items-center text-center max-w-md"
      >
        <div className="relative mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
            className="w-32 h-32 bg-on-primary rounded-full flex items-center justify-center text-primary shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)]"
          >
            <CheckCircle2 size={64} strokeWidth={2.5} />
          </motion.div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 border-2 border-dashed border-on-primary/30 rounded-full"
          />
          <div className="absolute -top-4 -right-4 bg-tertiary-container text-on-tertiary-container p-3 rounded-2xl shadow-xl animate-bounce">
            <Sparkles size={24} fill="currentColor" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-headline font-black text-5xl md:text-6xl tracking-tighter leading-none italic uppercase">
            Fast as a <span className="text-primary-container">Bolt!</span>
          </h1>
          <p className="text-on-primary/80 font-medium text-lg leading-relaxed px-4">
            You've successfully completed the Urban Forest Planting mission. Your impact has been recorded.
          </p>
        </div>

        <div className="mt-12 w-full space-y-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 grid grid-cols-2 gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Trophy size={80} />
            </div>
            <div className="text-left relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">XP Gained</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black font-headline">+350</span>
                <Bolt size={16} fill="currentColor" className="text-primary-container" />
              </div>
            </div>
            <div className="text-right relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">CO2 Offset</span>
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-4xl font-black font-headline">12.4</span>
                <span className="text-sm font-bold opacity-70">kg</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="flex-1 bg-on-primary text-primary py-5 rounded-full font-headline font-bold text-lg shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Done <ArrowRight size={20} />
            </button>
            <button className="w-16 h-16 bg-white/10 backdrop-blur-md text-on-primary rounded-full flex items-center justify-center border border-white/20 active:scale-95 transition-all">
              <Share2 size={24} />
            </button>
          </div>
        </div>

        <p className="mt-12 text-on-primary/60 text-sm font-bold uppercase tracking-widest">
          Ranked #12 in your team
        </p>
      </motion.div>
    </div>
  );
}
