import { useState } from 'react';
import { BookOpen, Stethoscope, Leaf, Soup, HeartHandshake, ChevronDown, ChevronUp } from 'lucide-react';
import { Program } from '../types';

export default function Programs() {
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>(null);

  const programs: Program[] = [
    {
      id: 'education',
      title: 'Education Support',
      icon: 'BookOpen',
      description: 'Bridging the literacy gap by equipping children with study supplies, scholarships, and technical digital classrooms.',
      details: [
        '📚 Scholarships for higher education to meritorious students.',
        '🎒 School supplies distribution including books, uniforms, and bags.',
        '💻 Digital Learning setups with computers & internet in remote village schools.',
        '🧑‍🏫 Weekend tuition camps & tutoring led by volunteer graduates.'
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      icon: 'Stethoscope',
      description: 'Conducting diagnosis camps, organizing blood donation drives, and distributing life-saving medicines to those in need.',
      details: [
        '🩺 Free Medical Camps with experienced volunteer physicians.',
        '💊 Lifesaving medicine distribution in slum locations.',
        '🩸 Blood donation drives and critical database coordination.',
        '🧠 Mental Health awareness seminars & free counselling sessions.'
      ]
    },
    {
      id: 'environment',
      title: 'Environment Protection',
      icon: 'Leaf',
      description: 'Driving green actions like mass tree plantations, clean-up initiatives, and installing local water-filtration devices.',
      details: [
        '🌳 Mass Tree Plantation drives to restore local green canopies.',
        '🚰 Installation of pure community water-filtration units.',
        '🥤 Plastic-free campaigns with free cotton bag distribution.',
        '🏡 Local composting & segregation workshops for zero-waste neighborhoods.'
      ]
    },
    {
      id: 'hunger',
      title: 'Hunger Relief',
      icon: 'Soup',
      description: 'Alleviating malnutrition through daily warm meals, dry ration deliveries, and specialized child nutrition programs.',
      details: [
        '🍛 Daily hot meal distributions in slums via community kitchens.',
        '📦 Dry grocery kits for daily wage earners and widows.',
        '🍼 High-nutrient supplementary feed for malnourished toddlers & mothers.',
        '🌾 Partnerships with local farms to minimize harvest food wastage.'
      ]
    },
    {
      id: 'women',
      title: 'Women Empowerment',
      icon: 'HeartHandshake',
      description: 'Fostering financial independence through vocational skill workshops, self-help groups, and business coaching.',
      details: [
        '🧵 Tailoring, sewing, and artisanal craft development workshops.',
        '💼 Micro-finance loans & grants to kickstart home-run small ventures.',
        '💳 Financial literacy, digital banking, and investment awareness classes.',
        '⚖️ Legal awareness clinics & self-defense training seminars.'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-500" />;
      case 'Soup':
        return <Soup className="w-6 h-6 text-orange-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-blue-700" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  const getColorClass = (id: string) => {
    switch (id) {
      case 'education':
        return 'bg-blue-50 border-blue-100 text-blue-700 shadow-blue-500/5 hover:border-blue-300';
      case 'healthcare':
        return 'bg-emerald-50 border-emerald-100 text-emerald-700 shadow-emerald-500/5 hover:border-emerald-300';
      case 'environment':
        return 'bg-green-50 border-green-100 text-green-700 shadow-green-500/5 hover:border-green-300';
      case 'hunger':
        return 'bg-orange-50 border-orange-100 text-orange-700 shadow-orange-500/5 hover:border-orange-300';
      case 'women':
        return 'bg-indigo-50 border-indigo-100 text-indigo-700 shadow-indigo-500/5 hover:border-indigo-300';
      default:
        return 'bg-blue-50 border-blue-100 text-blue-700';
    }
  };

  const getIconContainerColor = (id: string) => {
    switch (id) {
      case 'education':
        return 'bg-blue-100';
      case 'healthcare':
        return 'bg-emerald-100';
      case 'environment':
        return 'bg-green-100';
      case 'hunger':
        return 'bg-orange-100';
      case 'women':
        return 'bg-indigo-100';
      default:
        return 'bg-blue-100';
    }
  };

  return (
    <section id="programs" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">Our Focus</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Care Programs
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We operate multi-dimensional, community-owned models to ensure positive, holistic, and permanent changes on the ground.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="programs-grid-container">
          {programs.map((prog) => {
            const isExpanded = expandedProgramId === prog.id;
            return (
              <div
                key={prog.id}
                id={`program-card-${prog.id}`}
                className={`group rounded-3xl p-8 border bg-white/80 backdrop-blur-md transition-all duration-300 shadow-xl ${
                  isExpanded
                    ? 'ring-2 ring-blue-500 border-transparent shadow-blue-500/10'
                    : 'border-slate-200/80 hover:shadow-2xl hover:-translate-y-1'
                }`}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${getIconContainerColor(prog.id)} transition-transform group-hover:scale-110 duration-300`}>
                    {getIcon(prog.icon)}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
                      HopeBridge Core Focus
                    </p>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-slate-600 text-sm leading-relaxed mt-5 text-left">
                  {prog.description}
                </p>

                {/* Expandable Details list */}
                <div
                  className={`overflow-hidden transition-all duration-300 text-left ${
                    isExpanded ? 'max-h-72 opacity-100 mt-6 pt-5 border-t border-slate-100' : 'max-h-0 opacity-0'
                  }`}
                  id={`program-details-${prog.id}`}
                >
                  <p className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">Key Initiatives Included:</p>
                  <ul className="space-y-2.5">
                    {prog.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-slate-700 leading-relaxed font-medium flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand Toggle Button */}
                <div className="mt-8 flex justify-between items-center">
                  <button
                    onClick={() => setExpandedProgramId(isExpanded ? null : prog.id)}
                    className="flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 tracking-wider uppercase"
                  >
                    <span>{isExpanded ? 'Hide Details' : 'Learn More'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    prog.id === 'education' ? 'bg-blue-500' :
                    prog.id === 'healthcare' ? 'bg-emerald-500' :
                    prog.id === 'environment' ? 'bg-green-500' :
                    prog.id === 'hunger' ? 'bg-orange-500' : 'bg-indigo-500'
                  }`} />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
