import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Bike, Leaf, Footprints, Coffee, Droplets, ArrowRight, PlusCircle, Plus } from 'lucide-react';
import Layout from './Layout';

export default function Activities() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-10 pb-12">
        {/* Header Section */}
        <section>
          <div className="flex justify-between items-end mb-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Daily Quest</h2>
            <span className="text-primary font-bold text-lg">1,240 pts</span>
          </div>
          <p className="text-on-surface-variant font-medium leading-relaxed">
            Complete your remaining tasks to reach your daily sustainability goal and unlock the "Green Guardian" badge.
          </p>
        </section>

        {/* Activities Section */}
        <div className="space-y-8">
          {/* Category: Active/Uncompleted Tasks */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Uncompleted Activities</h3>
            </div>
            <div className="space-y-4">
              <ActivityCard 
                icon={<Bike size={24} />}
                title="Cycle to Workplace"
                description="Commute at least 5km by bike"
                points={450}
                status="uncompleted"
                onClick={() => navigate('/activity-detail')}
              />
              <ActivityCard 
                icon={<Leaf size={24} />}
                title="Plastic-Free Lunch"
                description="Log your zero-waste meal today"
                points={200}
                status="uncompleted"
                onClick={() => navigate('/activity-detail')}
              />
            </div>
          </div>

          {/* Category: In Progress */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">In Progress</h3>
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-low border-l-4 border-tertiary p-5">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container/40 flex items-center justify-center text-tertiary">
                    <Footprints size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">The 10k Challenge</h4>
                    <p className="text-on-surface-variant text-sm mt-1">7,432 / 10,000 steps today</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block font-black text-xl text-tertiary">300</span>
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Points</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[74%] rounded-full" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold uppercase tracking-wider">
                    Partially Completed
                  </div>
                  <span className="text-on-surface-variant text-xs font-bold italic">Keep going!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category: Completed Tasks */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-60">Completed</h3>
            <div className="space-y-4 opacity-70 grayscale-[0.2]">
              <ActivityCard 
                icon={<Coffee size={24} fill="currentColor" />}
                title="Reusable Cup Bonus"
                description="Used own cup at the cafe"
                points={150}
                status="completed"
                earned
              />
              <ActivityCard 
                icon={<Droplets size={24} fill="currentColor" />}
                title="Stay Hydrated"
                description="Logged 2L of water intake"
                points={100}
                status="completed"
                earned
              />
            </div>
          </div>
        </div>
      </div>

      <button className="fixed right-6 bottom-24 w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_24px_32px_-12px_rgba(0,106,40,0.3)] flex items-center justify-center active:scale-90 transition-all z-40">
        <Plus size={32} />
      </button>
    </Layout>
  );
}

function ActivityCard({ icon, title, description, points, status, earned = false, onClick }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl p-5 transition-all duration-300",
        status === 'uncompleted' ? "bg-surface-container-lowest hover:shadow-lg cursor-pointer" : "bg-surface-container-high/40"
      )}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            status === 'uncompleted' ? "bg-secondary-container/30 text-secondary" : "bg-primary-container/30 text-primary"
          )}>
            {icon}
          </div>
          <div>
            <h4 className={cn("font-bold text-lg leading-tight", status === 'completed' && "text-on-surface-variant")}>{title}</h4>
            <p className={cn("text-sm mt-1", status === 'completed' ? "text-on-surface-variant/80" : "text-on-surface-variant")}>{description}</p>
          </div>
        </div>
        <div className="text-right">
          <span className={cn("block font-black text-xl", status === 'completed' ? "text-primary" : "text-on-surface")}>{points}</span>
          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">{earned ? 'Earned' : 'Points'}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className={cn(
          "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
          status === 'uncompleted' ? "bg-secondary-container text-on-secondary-container" : "bg-primary-container text-on-primary-container"
        )}>
          {status}
        </div>
        {status === 'uncompleted' && (
          <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            {title.includes('Log') ? 'Log Task' : 'Start Now'} 
            {title.includes('Log') ? <PlusCircle size={16} /> : <ArrowRight size={16} />}
          </button>
        )}
      </div>
    </motion.div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
