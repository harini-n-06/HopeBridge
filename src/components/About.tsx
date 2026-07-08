import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative accent background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">About Us</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Who We Are
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlights Grid */}
          <div className="lg:col-span-5 space-y-6" id="about-highlights-col">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                alt="HopeBridge school child learning"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-lg leading-snug">
                  "Education is the absolute bridge to a hopeful tomorrow."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">80G Registration</h4>
                <p className="text-xs text-slate-600 mt-1">Tax-deductible contributions for Indian donors.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left">
                <Award className="w-6 h-6 text-orange-500 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Zero Leakage Policy</h4>
                <p className="text-xs text-slate-600 mt-1">Every rupee actively tracked & publicly audited.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left" id="about-narrative-col">
            
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                HopeBridge Foundation is a registered, government-recognized non-profit organization working tirelessly 
                to create positive, permanent social impact through education, healthcare, environmental sustainability, 
                and community development.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe that every individual, regardless of their background or birthplace, deserves access to 
                basic human rights, equal growth opportunities, and a healthy life. By connecting kind-hearted donors, 
                dedicated local volunteers, and underserved communities, we build durable bridges of compassion, 
                opportunity, and hope.
              </p>
            </div>

            {/* Mission & Vision Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Mission Card */}
              <div className="bg-gradient-to-br from-blue-50/50 to-white p-6 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Empower communities and enrich lives through accessible high-quality education, free healthcare, 
                  ecological preservation, and comprehensive social support systems.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-gradient-to-br from-emerald-50/50 to-white p-6 rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  A balanced, compassionate world where every single individual has access to resources and 
                  opportunities required to lead a healthy, dignified, and flourishing life.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
