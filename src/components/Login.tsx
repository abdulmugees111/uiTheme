import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, ArrowRight, Smartphone } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col md:flex-row">
      {/* Sidebar Brand/Visual Section (Desktop) */}
      <aside className="hidden md:flex md:w-1/2 lg:w-2/3 bg-primary overflow-hidden relative items-center justify-center p-12">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            alt="Professional runner" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJEbCDzivVLaqUTWIpnU13dDRfp3nvQ6Rc4wEtS25jaFiM7-X0hO8Lf1MaJDlbFvd8agcb7vgEYu9ugNOB852ODdpPQiFH08YxHo5C3idXSYoNbOMj_IkwjKQSNnxPfcFk914_2MYOuX6EXtBqi797Nb9Wyo43FE7_MWkueKhc_qPVE4991_fJEhokB39zwl4wv5cRAgBTS3O07mynVZnUd0BT0fENjzDl_n9FhaqlF4W7UOHOS71hJi_GUBPhhb19S6IpUoR1UXs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-80" />
        <div className="relative z-10 max-w-lg">
          <h1 className="font-headline font-black text-7xl lg:text-9xl text-on-primary tracking-tighter leading-none mb-6 italic">
            PACE
          </h1>
          <p className="text-on-primary text-xl lg:text-2xl font-medium leading-relaxed opacity-90 font-headline">
            Every step forward is a narrative of growth. Join the movement that protects our world and your potential.
          </p>
          <div className="mt-12 flex gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <span className="text-on-primary font-bold text-2xl block">12.4k</span>
              <span className="text-on-primary/70 text-xs uppercase tracking-widest font-bold">CO2 Saved Today</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <span className="text-on-primary font-bold text-2xl block">856</span>
              <span className="text-on-primary/70 text-xs uppercase tracking-widest font-bold">Active Teams</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Login Content Section */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-surface-bright relative">
        <div className="absolute top-8 left-8 md:hidden">
          <span className="font-headline font-black text-3xl tracking-tighter text-primary italic">PACE</span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <header className="mb-10">
            <h2 className="font-headline font-extrabold text-4xl text-on-surface leading-tight mb-2">
              Welcome Back
            </h2>
            <p className="text-on-surface-variant font-medium">
              Log in to continue your journey and track your impact.
            </p>
          </header>

          <form 
            onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none text-outline">
                  <User size={20} />
                </div>
                <input 
                  className="block w-full pl-8 py-4 bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary text-on-surface placeholder:text-outline/50 transition-all duration-300 font-semibold" 
                  placeholder="Alex Morgan" 
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">
                  Password
                </label>
                <button type="button" className="text-xs font-bold text-primary hover:opacity-80 transition-opacity">Forgot?</button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none text-outline">
                  <Lock size={20} />
                </div>
                <input 
                  className="block w-full pl-8 py-4 bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary text-on-surface placeholder:text-outline/50 transition-all duration-300 font-semibold" 
                  placeholder="••••••••" 
                  type="password"
                />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface transition-colors" type="button">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" id="remember" type="checkbox" />
                <div className="w-10 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
              </div>
              <label className="text-sm font-semibold text-on-surface-variant cursor-pointer" htmlFor="remember">Keep me logged in</label>
            </div>

            <div className="pt-4">
              <button 
                className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg shadow-[0_24px_32px_-12px_rgba(0,106,40,0.2)] hover:shadow-[0_32px_48px_-12px_rgba(0,106,40,0.3)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2" 
                type="submit"
              >
                <span>Enter Dashboard</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <div className="mt-12">
            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-outline-variant/30" />
              <span className="flex-shrink mx-4 text-xs font-bold text-outline uppercase tracking-widest">Or connect via</span>
              <div className="flex-grow border-t border-outline-variant/30" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-4 rounded-xl bg-surface-container-lowest border border-outline-variant/15 hover:bg-surface-container-low transition-colors duration-200">
                <img 
                  alt="Google" 
                  className="w-5 h-5" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp5uHuHxaG1mfazDyw6gSEH9HYgwXeyJONkWiT43C12NigcsEm4Sp6CSIuryDMrl6QgiKdWqz3V6va5xcARmIJGC3gthABmajWe3rSJ4NLmBY4hj3ZN-vEAiOJgVvOE3fD91SklgmURZleC_ywsUzC5s5yKHFxhDYdR9Ge0Jm-IRUe0xjT_5TNLAa0MXlqdDxGhNO0P1M-cnRCTFs5tL01-tkdPyVrZmiOMlh9alXOh7tPQ-XjXFmqnLcJkMWpYNqa6IUAHb2PXWA"
                  referrerPolicy="no-referrer"
                />
                <span className="text-sm font-bold text-on-surface">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-4 rounded-xl bg-surface-container-lowest border border-outline-variant/15 hover:bg-surface-container-low transition-colors duration-200">
                <Smartphone size={20} />
                <span className="text-sm font-bold text-on-surface">Apple</span>
              </button>
            </div>
          </div>

          <footer className="mt-12 text-center">
            <p className="text-on-surface-variant font-medium">
              New to the movement? 
              <button className="text-primary font-bold hover:underline ml-1">Create Account</button>
            </p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}
