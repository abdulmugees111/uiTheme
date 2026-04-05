import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Users, MapPin, Globe, ArrowRight, Star } from 'lucide-react';
import Layout from './Layout';

export default function Teams() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-10 pb-12">
        {/* Header Section */}
        <section>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Find Your Tribe</h2>
          <p className="text-on-surface-variant font-medium leading-relaxed">
            Sustainability is a team sport. Join a squad of like-minded individuals and multiply your impact.
          </p>
        </section>

        {/* Search & Filter */}
        <section className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search teams by name or interest..." 
            className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/60 font-medium"
          />
        </section>

        {/* Team Categories */}
        <section className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {['All Teams', 'Local', 'Global', 'Corporate', 'Student'].map((cat, i) => (
            <button 
              key={cat}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                i === 0 ? "bg-primary text-on-primary shadow-md" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
              )}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Teams List */}
        <section className="space-y-6">
          <TeamCard 
            name="Green Guardians"
            members={124}
            location="London, UK"
            type="Local"
            impact="2,450kg CO2"
            image="https://picsum.photos/seed/team1/400/200"
            featured
          />
          <TeamCard 
            name="Ocean Cleaners"
            members={856}
            location="Global"
            type="Global"
            impact="12.4t Plastic"
            image="https://picsum.photos/seed/team2/400/200"
          />
          <TeamCard 
            name="Tech for Earth"
            members={42}
            location="San Francisco, US"
            type="Corporate"
            impact="840kg CO2"
            image="https://picsum.photos/seed/team3/400/200"
          />
        </section>
      </div>

      {/* FAB for Create Team */}
      <button 
        onClick={() => navigate('/create-team')}
        className="fixed right-6 bottom-24 w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_24px_32px_-12px_rgba(0,106,40,0.3)] flex items-center justify-center active:scale-90 transition-all z-40"
      >
        <Plus size={32} />
      </button>
    </Layout>
  );
}

function TeamCard({ name, members, location, type, impact, image, featured = false }: any) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10 group"
    >
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent" />
        {featured && (
          <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
            <Star size={12} fill="currentColor" /> Featured
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <h4 className="text-white font-headline text-xl font-bold leading-tight">{name}</h4>
            <div className="flex items-center gap-2 text-white/80 text-xs font-medium mt-1">
              {type === 'Global' ? <Globe size={12} /> : <MapPin size={12} />}
              {location}
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white text-xs font-bold">
            {members} members
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <div>
          <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Total Impact</p>
          <p className="text-primary font-black text-lg">{impact}</p>
        </div>
        <button className="bg-surface-container-highest text-on-surface px-6 py-2 rounded-full font-bold text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center gap-2">
          Join <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
