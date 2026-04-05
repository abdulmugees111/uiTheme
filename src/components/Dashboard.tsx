import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Bolt, CreditCard, ShoppingCart, Heart, Wallet, Footprints, BarChart3, PlusCircle, Users, Flame, Medal, Plus } from 'lucide-react';
import Layout from './Layout';
import { useState } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Layout>
      <div className="space-y-10 pb-12">
        {/* Points & Earnings Hero Card */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[2rem] p-8 bg-gradient-to-br from-primary to-on-primary-container text-on-primary shadow-2xl"
        >
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-2 gap-8 items-end">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Redeemable Points</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-headline leading-none">2,840</span>
                <Bolt size={20} fill="currentColor" className="text-primary-container" />
              </div>
            </div>
            <div className="space-y-1 text-right relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Amount Earned</p>
              <button 
                onClick={() => setShowTooltip(!showTooltip)}
                className="group inline-flex items-center gap-2 transition-transform active:scale-95 text-right relative"
              >
                <span className="text-4xl font-extrabold font-headline leading-none">$142.50</span>
                <div className="bg-primary-container text-on-primary-container p-2 rounded-full shadow-lg group-hover:shadow-primary-container/20 transition-all">
                  <CreditCard size={16} />
                </div>
              </button>

              {showTooltip && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-4 w-48 bg-surface-container-lowest text-on-surface p-4 rounded-2xl shadow-xl z-20 border border-outline-variant text-left"
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Spending Options</p>
                  <ul className="space-y-2 text-xs font-semibold">
                    <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><ShoppingCart size={14} /> Shop Eco-Market</li>
                    <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><Heart size={14} /> Donate to Planet</li>
                    <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><Wallet size={14} /> Transfer to Wallet</li>
                  </ul>
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-surface-container-lowest rotate-45 border-t border-l border-outline-variant" />
                </motion.div>
              )}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-on-primary/10 flex justify-between items-center">
            <div className="flex -space-x-2">
              {[1, 2].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-primary overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-primary bg-primary-container text-on-primary-container flex items-center justify-center text-[10px] font-bold">
                +12
              </div>
            </div>
            <p className="text-xs font-medium opacity-90">Daily goal: 85% achieved</p>
          </div>
        </motion.section>

        {/* Main Action Tiles */}
        <section className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/activities')}
            className="aspect-square rounded-3xl p-6 bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between items-start group relative overflow-hidden active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary-container/30 text-primary flex items-center justify-center">
              <Footprints size={28} />
            </div>
            <div className="text-left">
              <h3 className="font-headline text-lg font-bold text-on-surface leading-tight">Start Activity</h3>
              <p className="text-xs text-on-surface-variant mt-1">Log your next move</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
          </button>

          <button 
            onClick={() => navigate('/leaderboard')}
            className="aspect-square rounded-3xl p-6 bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between items-start group relative overflow-hidden active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-2xl bg-tertiary-container/30 text-tertiary flex items-center justify-center">
              <BarChart3 size={28} />
            </div>
            <div className="text-left">
              <h3 className="font-headline text-lg font-bold text-on-surface leading-tight">Stats</h3>
              <p className="text-xs text-on-surface-variant mt-1">View performance</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-tertiary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
          </button>

          <button 
            onClick={() => navigate('/create-team')}
            className="aspect-square rounded-3xl p-6 bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between items-start group relative overflow-hidden active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/30 text-secondary flex items-center justify-center">
              <PlusCircle size={28} />
            </div>
            <div className="text-left">
              <h3 className="font-headline text-lg font-bold text-on-surface leading-tight">Create Team</h3>
              <p className="text-xs text-on-surface-variant mt-1">Lead the pack</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
          </button>

          <button 
            onClick={() => navigate('/teams')}
            className="aspect-square rounded-3xl p-6 bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between items-start group relative overflow-hidden active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-2xl bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
              <Users size={28} />
            </div>
            <div className="text-left">
              <h3 className="font-headline text-lg font-bold text-on-surface leading-tight">Join Team</h3>
              <p className="text-xs text-on-surface-variant mt-1">Find community</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-surface-container/20 rounded-full group-hover:scale-150 transition-transform duration-500" />
          </button>
        </section>

        {/* Dynamic Content: Ongoing Challenges */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="font-headline text-xl font-extrabold tracking-tight">Active Pulse</h2>
            <button className="text-primary font-bold text-xs uppercase tracking-widest">See All</button>
          </div>
          <div className="grid grid-cols-12 gap-4 h-64">
            <div className="col-span-7 bg-surface-container-high rounded-[2rem] p-6 relative overflow-hidden flex flex-col justify-end">
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM_0V1Juaw2PkW85j-fXuP1AYDmQCxzQ49d-sUNyeM5EvoSviiGUDJ6cLiXxBAdGA64D6iTPOmmEmLG35a2NXioDjPnyMBmTMkTUMqa90F9YgyuPLIfbRF8W0qRSEm5EWJyiZRxnoTh4GgJ-epPf569A2JH0mKUEWIsQBEDr_0ZnxrpDxHiV0N3ZOd5BcTcdKpN6PA5vIPElbFBROTbhDpV1NN-pf8pli5yirew10aHB1ZCfRqnHEvMIfpzwvfKZixHuoNFonYIcA"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-black uppercase rounded-full mb-3">Priority</span>
                <h4 className="font-headline text-lg font-bold text-on-surface leading-tight">Lion's Marathon</h4>
                <p className="text-xs font-medium text-on-surface-variant">4.2km remaining this week</p>
              </div>
            </div>
            <div className="col-span-5 flex flex-col gap-4">
              <div className="flex-1 bg-tertiary-container rounded-[2rem] p-4 flex flex-col justify-center items-center text-center">
                <Flame size={24} fill="currentColor" className="text-on-tertiary-container mb-1" />
                <span className="text-sm font-bold font-headline text-on-tertiary-container leading-tight">5 Day Streak</span>
              </div>
              <div className="flex-1 bg-secondary-container rounded-[2rem] p-4 flex flex-col justify-center items-center text-center">
                <Medal size={24} fill="currentColor" className="text-on-secondary-container mb-1" />
                <span className="text-sm font-bold font-headline text-on-secondary-container leading-tight">Level Up</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_24px_32px_-12px_rgba(0,106,40,0.4)] flex items-center justify-center active:scale-90 transition-transform z-40">
        <Plus size={32} />
      </button>
    </Layout>
  );
}
