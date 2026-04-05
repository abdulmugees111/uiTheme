import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { X, TreePine, MapPin, Clock, ShieldCheck, QrCode, Camera, ArrowRight } from 'lucide-react';

export default function ActivityDetail() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-0">
      <motion.main 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg bg-surface-container-lowest rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden flex flex-col max-h-[90vh]"
      >
        <header className="relative h-64 w-full shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent z-10" />
          <img 
            alt="Urban Forest Planting" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNSVbcxmz10pBmEHIs196012aKjgawURCof30Hn32cRpX2INB_tsVF7BGJuk0UiSbJMO9rwy057aPnqWOiUKICJCg8Q25AA91tP-DbuO2w-Yjkui1RftCj6mTYrhLz5E2U3OLgB6CFgadoEsko5kkDxWcS0LCTY8pRmnriIjOQw3PVfMpCPanQUmFpRcJt5g-rhpRWcR_vAp7ganR9GGkRSuJuLRd0L81SqdcSr3i9POCaw61V1wws5uRmmUhiK_8XLI2VYpb1qOo"
            referrerPolicy="no-referrer"
          />
          <button 
            onClick={() => navigate('/activities')}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-md rounded-full text-on-surface hover:bg-surface-container-highest transition-colors active:scale-95 duration-200"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-6 left-6 z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container rounded-md mb-3">
              <TreePine size={16} fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-wider">Active Mission</span>
            </div>
            <h1 className="font-headline text-3xl font-extrabold text-white tracking-tight leading-tight">Urban Forest Planting</h1>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 hide-scrollbar">
          <section className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/15 flex flex-col justify-between">
              <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-1">Impact</span>
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-black text-primary">12.4</span>
                <span className="text-sm font-bold text-on-surface-variant">kg CO2</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/15 flex flex-col justify-between">
              <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-1">XP Points</span>
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-black text-tertiary">350</span>
                <span className="text-sm font-bold text-on-surface-variant">pts</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline text-xl font-bold text-on-surface">About the activity</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Join our local initiative to expand the green canopy in the heart of the district. By planting native saplings, you're directly contributing to urban cooling, air purification, and local biodiversity. Every tree planted offsets significant carbon emissions over its lifetime.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="bg-surface-container-highest px-4 py-2 rounded-md flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm font-semibold text-on-surface">Central Park North</span>
              </div>
              <div className="bg-surface-container-highest px-4 py-2 rounded-md flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span className="text-sm font-semibold text-on-surface">Approx. 45 min</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="bg-surface-container p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <ShieldCheck size={24} fill="currentColor" />
                </div>
                <h3 className="font-headline text-lg font-bold">Complete your mission</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-snug">To verify your activity and claim your carbon offsets, choose one of the validation methods below.</p>
              <div className="grid grid-cols-1 gap-3 pt-2">
                <button className="flex items-center justify-between w-full p-4 bg-surface-container-lowest rounded-xl group hover:bg-primary-container/20 transition-all duration-300 border border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <QrCode size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-headline font-bold text-on-surface">Use QR Code</p>
                      <p className="text-xs text-on-surface-variant">Scan station code at location</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-outline" />
                </button>
                <button className="flex items-center justify-between w-full p-4 bg-surface-container-lowest rounded-xl group hover:bg-primary-container/20 transition-all duration-300 border border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Camera size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-headline font-bold text-on-surface">Take a Picture</p>
                      <p className="text-xs text-on-surface-variant">Snap your finished work</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-outline" />
                </button>
              </div>
            </div>
          </section>
        </div>

        <footer className="p-6 bg-surface-container-lowest shrink-0 border-t border-outline-variant/10">
          <button 
            onClick={() => navigate('/success')}
            className="w-full h-14 bg-primary text-on-primary rounded-full font-headline font-bold text-lg shadow-[0_12px_24px_-8px_rgba(0,106,40,0.3)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Commit to Mission
          </button>
        </footer>
      </motion.main>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-20 select-none hidden sm:block">
        <h2 className="font-headline text-[120px] font-black tracking-tighter text-on-surface whitespace-nowrap">IMPACT</h2>
      </div>
    </div>
  );
}
