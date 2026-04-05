import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { X, Camera, Users, Globe, Lock, Info, ArrowRight } from 'lucide-react';

export default function CreateTeam() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <motion.main 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-lg bg-surface-container-lowest rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden flex flex-col max-h-[90vh]"
      >
        <header className="p-8 pb-4 flex justify-between items-start shrink-0">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-on-surface leading-tight">Build Your Squad</h1>
            <p className="text-on-surface-variant font-medium mt-1">Create a new community team</p>
          </div>
          <button 
            onClick={() => navigate('/teams')}
            className="w-10 h-10 flex items-center justify-center bg-surface-container-high rounded-full text-on-surface hover:bg-surface-container-highest transition-colors active:scale-95 duration-200"
          >
            <X size={20} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-8 hide-scrollbar">
          {/* Team Cover Upload */}
          <section className="relative aspect-video rounded-3xl bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors overflow-hidden">
            <div className="flex flex-col items-center text-outline group-hover:text-primary transition-colors">
              <Camera size={40} strokeWidth={1.5} />
              <span className="text-sm font-bold mt-2 uppercase tracking-widest">Upload Cover</span>
            </div>
          </section>

          {/* Form Fields */}
          <section className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Team Name</label>
              <input 
                type="text" 
                placeholder="e.g. Eco Warriors" 
                className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-bold placeholder:text-outline/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Description</label>
              <textarea 
                rows={3}
                placeholder="What is your team's mission?" 
                className="w-full px-6 py-4 bg-surface-container-low rounded-2xl border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline/50 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Privacy</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm flex items-center justify-center gap-2">
                    <Globe size={16} /> Public
                  </button>
                  <button className="flex-1 py-3 rounded-xl bg-surface-container-high text-on-surface-variant font-bold text-sm flex items-center justify-center gap-2">
                    <Lock size={16} /> Private
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Category</label>
                <select className="w-full px-4 py-3 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-bold appearance-none">
                  <option>Local Community</option>
                  <option>Global Movement</option>
                  <option>Corporate Team</option>
                  <option>Student Group</option>
                </select>
              </div>
            </div>
          </section>

          <section className="bg-primary-container/20 p-6 rounded-2xl border border-primary/10 flex gap-4">
            <div className="text-primary shrink-0">
              <Info size={24} />
            </div>
            <p className="text-sm text-on-primary-container font-medium leading-relaxed">
              As a team leader, you'll be able to create custom challenges, manage members, and track your collective carbon offset.
            </p>
          </section>
        </div>

        <footer className="p-8 pt-4 bg-surface-container-lowest shrink-0">
          <button 
            onClick={() => navigate('/teams')}
            className="w-full h-16 bg-primary text-on-primary rounded-full font-headline font-bold text-lg shadow-[0_24px_32px_-12px_rgba(0,106,40,0.3)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Create Team <ArrowRight size={20} />
          </button>
        </footer>
      </motion.main>
    </div>
  );
}
