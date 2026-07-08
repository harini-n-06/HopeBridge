import { ShieldCheck, Eye, Users, BarChart3, Lock, MessageSquareQuote } from 'lucide-react';
import { FeatureCard } from '../types';

export default function WhyChooseUs() {
  const cards: FeatureCard[] = [
    {
      title: '100% Transparency',
      description: 'Every single rupee donated is logged on our public accounts sheets. All field expense receipts are catalogued and quarterly audited.',
      icon: 'Eye'
    },
    {
      title: 'Verified NGO',
      description: 'HopeBridge Foundation is officially registered under Section 12A, holds full 80G tax clearance status, and is visible on NGO DARPAN.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Trusted Volunteers',
      description: 'Over 200 registered on-ground doctors, teachers, engineers, and youths actively managing food drives, health camps, and classes.',
      icon: 'Users'
    },
    {
      title: 'Community Impact',
      description: 'We prioritize multi-year community ownership models rather than temporary handouts. This ensures children stay in school and trees survive.',
      icon: 'BarChart3'
    },
    {
      title: 'Secure Donations',
      description: 'All payments are processed using modern, encrypted PCI-DSS certified payment links. Zero credit card or banking details are cached.',
      icon: 'Lock'
    },
    {
      title: 'Regular Updates',
      description: 'Every donor receives detailed project emails, high-res field photos, and progress chart packets as campaigns advance on the ground.',
      icon: 'MessageSquareQuote'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-orange-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-800" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-red-500" />;
      case 'MessageSquareQuote':
        return <MessageSquareQuote className="w-6 h-6 text-indigo-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  const getBadgeBgColor = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return 'bg-emerald-50';
      case 'ShieldCheck':
        return 'bg-blue-50';
      case 'Users':
        return 'bg-orange-50';
      case 'BarChart3':
        return 'bg-blue-100/50';
      case 'Lock':
        return 'bg-red-50';
      case 'MessageSquareQuote':
        return 'bg-indigo-50';
      default:
        return 'bg-blue-50';
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">Our Trust</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose HopeBridge?
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-us-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-50/50 border border-slate-200/50 hover:bg-white p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-left flex flex-col justify-between h-full"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${getBadgeBgColor(card.icon)}`}>
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-lg font-black text-slate-950 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-6" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
