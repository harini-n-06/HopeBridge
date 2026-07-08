import { Campaign } from '../types';
import { Target, TrendingUp, AlertCircle, Heart } from 'lucide-react';

interface CampaignsProps {
  onCampaignSelect: (campaignTitle: string) => void;
}

export default function Campaigns({ onCampaignSelect }: CampaignsProps) {
  const campaigns: Campaign[] = [
    {
      id: 'sponsor_child',
      title: 'Sponsor a Child',
      description: 'Fund full school curriculums, uniforms, study backpacks, and personal computing tablets for bright children in remote communities.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
      raised: 245000,
      goal: 500000,
      category: 'Education'
    },
    {
      id: 'plant_trees',
      title: 'Plant 10,000 Trees',
      description: 'Afforestation projects in highly degraded areas. Includes protective fencing, community sapling nurseries, and local water management.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      raised: 72000,
      goal: 150000,
      category: 'Environment'
    },
    {
      id: 'feed_families',
      title: 'Feed Families in Need',
      description: 'Support community soup kitchens and direct dry-food box supply campaigns to support impoverished, daily wage earner households.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      raised: 185000,
      goal: 250000,
      category: 'Hunger Relief'
    }
  ];

  const calculatePercentage = (raised: number, goal: number) => {
    return Math.min(100, Math.round((raised / goal) * 100));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="campaigns" className="py-20 bg-white relative overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">Active Campaigns</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Urgent Campaigns Needing Support
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Join hands on our active high-priority campaigns. Every contribution brings us closer to reaching our milestones.
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="active-campaigns-list">
          {campaigns.map((camp) => {
            const percent = calculatePercentage(camp.raised, camp.goal);
            return (
              <div
                key={camp.id}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                id={`campaign-card-${camp.id}`}
              >
                {/* Campaign Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-blue-600 border border-slate-100 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {camp.category}
                  </span>

                  {/* Status Indicator Pill */}
                  <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    Live
                  </span>
                </div>

                {/* Campaign Body */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  
                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {camp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-grow">
                    {camp.description}
                  </p>

                  {/* Goal and Progress Tracker */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="flex justify-between items-end mb-2 text-xs">
                      <div>
                        <p className="text-slate-400 font-medium">Raised So Far</p>
                        <p className="text-base font-extrabold text-slate-950 mt-0.5">
                          {formatCurrency(camp.raised)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-400 font-medium">Target Goal</p>
                        <p className="text-sm font-bold text-slate-700 mt-0.5">
                          {formatCurrency(camp.goal)}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-2 relative">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-[11px] font-bold mt-1 text-slate-500">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                        {percent}% Completed
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="w-3.5 h-3.5 text-blue-500" />
                        {formatCurrency(camp.goal - camp.raised)} remaining
                      </span>
                    </div>
                  </div>

                  {/* Direct Donate Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => onCampaignSelect(camp.title)}
                      className="w-full bg-slate-900 hover:bg-orange-500 active:bg-orange-600 text-white font-extrabold py-3 px-4 rounded-xl shadow-md group-hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                    >
                      <Heart className="w-4 h-4 fill-transparent group-hover:fill-white group-hover:text-white transition-all" />
                      Support This Campaign
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Info banner for potential sponsors */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-3xl mx-auto flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-left">
            <h4 className="text-sm font-extrabold text-slate-900">Corporate & Institutional CSR Partnerships</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Are you looking to align your corporation's CSR program with measurable education, healthcare, or afforestation goals? HopeBridge Foundation is a licensed, fully compliant NGO offering regular 80G tax clearance certificates, custom impact tracking dashboards, and periodic verified field reports.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
