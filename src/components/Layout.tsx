import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Footprints, Trophy, Users, Menu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export default function Layout({ children, showNav = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 glass-header shadow-[0_24px_32px_-12px_rgba(0,0,0,0.06)] h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button className="text-primary active:scale-95 duration-200">
            <Menu size={24} />
          </button>
          <span className="text-2xl font-black tracking-tighter text-primary font-headline italic">PACE</span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
          <img 
            alt="User Profile" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA65JYjOn49SawNlltLbuGgA_LPPT8ETGYgTtJb59uHfntTh0xwWWkQuVOCZJlWPe4YflDDR-GjGqgzi9u0SHHPogaFebTJFnGd1cdxPVQYM9zWAXaH6E60foWO5-TUls6KV-OYDmGLv0ip0ivnL5kGPf9MrNB-uSOJWYYEGgM-qre5EtYQBj0jR9386ZTClal8SR9GQjpHXt16wjKyViKeo0H4RJnpTuruGPjzD7u19v1_WeKgsn-4x0MAmOg9kXq9aH1t_weydaQ"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {children}
      </main>

      {/* Bottom Nav Bar (Mobile) */}
      {showNav && (
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface/80 backdrop-blur-lg rounded-t-[1.5rem] z-50 border-t border-slate-200/15 shadow-[0_-8px_24px_-10px_rgba(0,0,0,0.08)] md:hidden">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90",
              isActive ? "bg-primary-container/30 text-on-primary-container rounded-2xl" : "text-on-surface-variant"
            )}
          >
            <LayoutDashboard size={24} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Dashboard</span>
          </NavLink>
          <NavLink 
            to="/activities" 
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90",
              isActive ? "bg-primary-container/30 text-on-primary-container rounded-2xl" : "text-on-surface-variant"
            )}
          >
            <Footprints size={24} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Activities</span>
          </NavLink>
          <NavLink 
            to="/leaderboard" 
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90",
              isActive ? "bg-primary-container/30 text-on-primary-container rounded-2xl" : "text-on-surface-variant"
            )}
          >
            <Trophy size={24} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Leaderboard</span>
          </NavLink>
          <NavLink 
            to="/teams" 
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90",
              isActive ? "bg-primary-container/30 text-on-primary-container rounded-2xl" : "text-on-surface-variant"
            )}
          >
            <Users size={24} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Teams</span>
          </NavLink>
        </nav>
      )}
    </div>
  );
}
