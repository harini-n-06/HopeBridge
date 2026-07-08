import { Heart, Users, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onDonateClick: () => void;
  onVolunteerClick: () => void;
}

export default function Hero({ onDonateClick, onVolunteerClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-slate-50">
      {/* Background Gradients & Art */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl -ml-32 -mb-32" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-content-column">
            
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100/80 px-3 py-1.5 rounded-full text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span>Making a Difference Since 2018</span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-700 font-medium">80G Tax Benefits</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Together We Can <br />
              <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-orange-500 bg-clip-text text-transparent">
                Build a Better
              </span>{' '}
              Tomorrow
            </h1>

            {/* Subheading */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              HopeBridge Foundation works to empower underprivileged communities through quality education, 
              healthcare initiatives, environmental sustainability, food support, and women empowerment. 
              Compassion, transparency, and action guide every step we take.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onDonateClick}
                className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-base flex items-center justify-center gap-3 group"
                id="hero-donate-btn"
              >
                <Heart className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                Donate Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onVolunteerClick}
                className="bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200/80 hover:border-slate-300 font-bold px-8 py-4 rounded-2xl shadow-md transition-all text-base flex items-center justify-center gap-2.5"
                id="hero-volunteer-btn"
              >
                <Users className="w-5 h-5 text-blue-600" />
                Become a Volunteer
              </button>
            </div>

            {/* Trust and Certifications badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/60 max-w-lg" id="hero-badges">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 leading-none">100%</p>
                  <p className="text-[10px] text-slate-500 font-medium">Transparent</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 leading-none">NGO DARPAN</p>
                  <p className="text-[10px] text-slate-500 font-medium">Govt. Verified</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 leading-none">80G & 12A</p>
                  <p className="text-[10px] text-slate-500 font-medium">Tax Exempt</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Illustrative Layers */}
          <div className="lg:col-span-5 relative" id="hero-visual-column">
            {/* Main Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-slate-300/60 animate-[spin_120s_linear_infinite] pointer-events-none" />

              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                  alt="HopeBridge volunteers holding hands with smiling children"
                  className="w-full h-[400px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
                
                {/* Inline Overlay Message */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg text-left">
                  <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                    Live Distribution Campaign
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Volunteers are currently on the ground in Rajasthan delivering nutritional support & hygiene kits to over 250 families.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge 1 - Top Left */}
              <div className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-medium">Donations Made</p>
                  <p className="text-sm font-extrabold text-slate-900">100% Direct</p>
                </div>
              </div>

              {/* Floating Stat Badge 2 - Bottom Right */}
              <div className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hover:translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-medium">Active Supporters</p>
                  <p className="text-sm font-extrabold text-slate-900">5,000+ Globally</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
