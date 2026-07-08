import { useState, FormEvent } from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ShieldAlert, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please provide an email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Provide a valid email address');
      return;
    }

    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 text-left relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Upper Column Division */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                HopeBridge <span className="text-blue-500 font-normal">Foundation</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium max-w-sm">
              We are a government-registered NGO (80G & 12A compliant) working to bridge opportunities and hope for the underprivileged communities across India since 2018.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-xl transition-all" aria-label="Facebook">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-sky-500 hover:text-white rounded-xl transition-all" aria-label="Twitter">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-pink-600 hover:text-white rounded-xl transition-all" aria-label="Instagram">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-blue-700 hover:text-white rounded-xl transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-rose-600 hover:text-white rounded-xl transition-all" aria-label="Youtube">
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Nav */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Our Services</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-white transition-colors">
                  Focus Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('campaigns')} className="hover:text-white transition-colors">
                  Urgent Campaigns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('volunteer')} className="hover:text-white transition-colors">
                  Volunteer Force
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('donate')} className="hover:text-white transition-colors">
                  Donate Channels
                </button>
              </li>
            </ul>
          </div>

          {/* Support / Info Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Legal Sheets</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">80G Audit Logs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">CSR Credentials</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Newsletter Subscription</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Join our monthly circle. Receive verified campaign updates, financial spreadsheets, and ground visual logs.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="e.g. user@gmail.com"
                  className="w-full pl-10 pr-24 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 font-semibold"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] px-3 py-1.5 rounded-lg transition-colors uppercase tracking-wider"
                >
                  Join List
                </button>
              </div>

              {error && (
                <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" /> {error}
                </p>
              )}

              {subscribed && (
                <p className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Successfully added! Check your inbox shortly.
                </p>
              )}
            </form>

            <div className="flex items-center gap-1.5 text-[9px] text-emerald-500 font-extrabold uppercase">
              <ShieldCheck className="w-3.5 h-3.5" /> No Spam Guarantee • Opt-out anytime
            </div>
          </div>

        </div>

        {/* Lower Division - Copy & Seals */}
        <div className="pt-8 border-t border-slate-900 text-center sm:flex sm:justify-between sm:items-center space-y-4 sm:space-y-0 text-xs">
          <p className="font-semibold text-slate-500">
            Copyright © 2026 HopeBridge Foundation. Registered NGO under central act. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-slate-500 font-bold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> DARPAN Registration ID: DL/2018/202118
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
