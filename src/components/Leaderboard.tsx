import { motion } from 'motion/react';
import { Trophy, Medal, TrendingUp, Search, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import Layout from './Layout';

export default function Leaderboard() {
  return (
    <Layout>
      <div className="space-y-10 pb-12">
        {/* User Momentum Section */}
        <section className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Your Momentum</h2>
              <p className="text-on-surface-variant font-medium mt-1">Global Ranking: #1,245</p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary-container flex flex-col items-center justify-center text-on-primary-container">
              <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Rank</span>
              <span className="text-2xl font-black font-headline leading-none">12</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <StatBox label="Weekly XP" value="2,450" icon={<TrendingUp size={16} />} color="primary" />
            <StatBox label="Badges" value="14" icon={<Medal size={16} />} color="tertiary" />
            <StatBox label="Impact" value="12.4kg" icon={<Trophy size={16} />} color="secondary" />
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">Leaderboard</h2>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold shadow-sm">Global</button>
              <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold">Friends</button>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Find a user..." 
              className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50 font-medium text-sm"
            />
          </div>

          <div className="space-y-3">
            <LeaderboardItem rank={1} name="Sarah Jenkins" xp="12,450" trend="up" image="https://picsum.photos/seed/u1/100/100" />
            <LeaderboardItem rank={2} name="Marcus Thorne" xp="11,920" trend="down" image="https://picsum.photos/seed/u2/100/100" />
            <LeaderboardItem rank={3} name="Elena Rodriguez" xp="10,840" trend="up" image="https://picsum.photos/seed/u3/100/100" />
            <div className="py-2 flex justify-center">
              <div className="w-1 h-1 rounded-full bg-outline-variant mx-1" />
              <div className="w-1 h-1 rounded-full bg-outline-variant mx-1" />
              <div className="w-1 h-1 rounded-full bg-outline-variant mx-1" />
            </div>
            <LeaderboardItem rank={12} name="You" xp="8,450" trend="none" image="https://lh3.googleusercontent.com/aida-public/AB6AXuA65JYjOn49SawNlltLbuGgA_LPPT8ETGYgTtJb59uHfntTh0xwWWkQuVOCZJlWPe4YflDDR-GjGqgzi9u0SHHPogaFebTJFnGd1cdxPVQYM9zWAXaH6E60foWO5-TUls6KV-OYDmGLv0ip0ivnL5kGPf9MrNB-uSOJWYYEGgM-qre5EtYQBj0jR9386ZTClal8SR9GQjpHXt16wjKyViKeo0H4RJnpTuruGPjzD7u19v1_WeKgsn-4x0MAmOg9kXq9aH1t_weydaQ" isUser />
            <LeaderboardItem rank={13} name="David Chen" xp="8,320" trend="up" image="https://picsum.photos/seed/u4/100/100" />
          </div>
        </section>
      </div>
    </Layout>
  );
}

function StatBox({ label, value, icon, color }: any) {
  const colors: any = {
    primary: "bg-primary-container/30 text-primary",
    tertiary: "bg-tertiary-container/30 text-tertiary",
    secondary: "bg-secondary-container/30 text-secondary"
  };

  return (
    <div className="bg-surface-container-low p-4 rounded-2xl flex flex-col items-center text-center">
      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-2", colors[color])}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">{label}</span>
      <span className="text-lg font-black font-headline text-on-surface">{value}</span>
    </div>
  );
}

function LeaderboardItem({ rank, name, xp, trend, image, isUser = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "flex items-center justify-between p-4 rounded-2xl transition-all",
        isUser ? "bg-primary text-on-primary shadow-lg scale-[1.02] z-10" : "bg-surface-container-lowest hover:bg-surface-container-low"
      )}
    >
      <div className="flex items-center gap-4">
        <span className={cn(
          "w-8 text-center font-black font-headline text-lg",
          rank <= 3 && !isUser ? "text-tertiary" : isUser ? "text-on-primary" : "text-on-surface-variant"
        )}>
          {rank}
        </span>
        <div className="relative">
          <div className={cn(
            "w-12 h-12 rounded-full overflow-hidden border-2",
            isUser ? "border-on-primary" : "border-surface-container-highest"
          )}>
            <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          {rank <= 3 && !isUser && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container shadow-sm">
              <Trophy size={10} fill="currentColor" />
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-sm leading-tight">{name}</h4>
          <p className={cn("text-xs font-medium", isUser ? "text-on-primary/80" : "text-on-surface-variant")}>{xp} XP</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {trend === 'up' && <ArrowUp size={16} className={isUser ? "text-on-primary" : "text-primary"} />}
        {trend === 'down' && <ArrowDown size={16} className={isUser ? "text-on-primary" : "text-secondary"} />}
        {trend === 'none' && <Minus size={16} className={isUser ? "text-on-primary" : "text-outline"} />}
      </div>
    </motion.div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
