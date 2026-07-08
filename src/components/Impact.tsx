import { useState } from 'react';
import { Sparkles, Trophy, CheckCircle, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function Impact() {
  const [showBreakdown, setShowBreakdown] = useState(false);

  const stats = [
    {
      value: '5000+',
      label: 'Lives Impacted',
      description: 'Children educated, healthcare provided & families sustained.',
      icon: <Sparkles className="w-6 h-6 text-orange-500" />
    },
    {
      value: '200+',
      label: 'Volunteers Active',
      description: 'Dedicated professionals and youths on the ground.',
      icon: <Trophy className="w-6 h-6 text-blue-600" />
    },
    {
      value: '150+',
      label: 'Campaigns Run',
      description: 'Disaster response, food drives, and ecological projects.',
      icon: <CheckCircle className="w-6 h-6 text-emerald-500" />
    },
    {
      value: '30+',
      label: 'Communities Supported',
      description: 'Rural villages and underserved urban settlements.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-800" />
    },
    {
      value: '95%',
      label: 'Transparency Score',
      description: 'Funds directly allocated to grass-root beneficiaries.',
      icon: <Eye className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section id="impact" className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl -ml-20 -mt-20 opacity-60" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-700/50 rounded-full blur-3xl -mr-32 -mb-32 opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-500/50 border border-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-300">
            Real Proof of Hope
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 text-lg text-blue-100">
            Every donation, every hour of volunteering, and every share contributes directly to these life-altering stats.
          </p>
        </div>

        {/* Stats Flex/Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 text-center" id="impact-stats-grid">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/15 transition-all hover:-translate-y-1 duration-300 flex flex-col justify-between"
            >
              <div className="mx-auto w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-lg shadow-black/5">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">{stat.value}</p>
                <p className="text-sm font-bold mt-1 text-emerald-200">{stat.label}</p>
                <p className="text-xs text-blue-100/80 mt-2 leading-relaxed hidden sm:block font-medium">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Call-to-Action panel */}
        <div className="mt-14 max-w-2xl mx-auto bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md text-center">
          <p className="text-sm text-blue-50 font-semibold flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
            Accredited by major financial transparency boards.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="bg-white hover:bg-slate-50 text-blue-600 font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 mx-auto sm:mx-0"
            >
              <span>{showBreakdown ? 'Hide Audited Breakdown' : 'View Audited Fund Usage'}</span>
            </button>
          </div>

          {/* Interactive Compliance Breakdown */}
          {showBreakdown && (
            <div className="mt-6 p-5 bg-white rounded-2xl text-slate-800 text-left space-y-4 animate-fade-in shadow-xl">
              <h4 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> Where Your Money Goes (FY25 Audit)
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-700">Direct Beneficiary Programs (Food, Health, Books)</span>
                    <span className="text-emerald-600">84%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '84%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-700">Community Training & Infrastructure Setup</span>
                    <span className="text-blue-600">11%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: '11%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-700">Minimal Administrative & Audit Costs</span>
                    <span className="text-orange-500">5%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '5%' }} />
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium italic mt-2 text-center">
                *HopeBridge operates on a high-leverage local volunteer model which keeps administration overhead exceptionally low compared to the industry average.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
