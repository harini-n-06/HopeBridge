import { useState, useEffect } from 'react';
import { Menu, X, Heart, Shield } from 'lucide-react';

interface HeaderProps {
  onDonateClick: () => void;
  onVolunteerClick: () => void;
}

export default function Header({ onDonateClick, onVolunteerClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Our Programs', id: 'programs' },
    { label: 'Campaigns', id: 'campaigns' },
    { label: 'Volunteer', id: 'volunteer' },
    { label: 'Success Stories', id: 'success-stories' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find which section is currently in view
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/60 py-3'
          : 'bg-white/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('home')}
            id="header-logo-container"
          >
            <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                HopeBridge <span className="text-blue-600 font-normal">Foundation</span>
              </span>
              <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold tracking-wider uppercase">
                <Shield className="w-3 h-3 fill-emerald-100" /> Government Registered NGO
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onVolunteerClick}
              className="text-slate-700 hover:text-slate-950 text-sm font-semibold px-4 py-2 hover:bg-slate-50 rounded-xl transition-all"
            >
              Join Us
            </button>
            <button
              onClick={onDonateClick}
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" /> Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onDonateClick}
              className="sm:hidden bg-orange-500 text-white p-2.5 rounded-xl shadow-md shadow-orange-500/25 active:bg-orange-600"
              aria-label="Donate"
            >
              <Heart className="w-5 h-5 fill-white" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl transition-all duration-300 z-40 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-drawer"
      >
        <div className="px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              {item.label}
              {activeSection === item.id && <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 px-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onVolunteerClick();
              }}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-center py-3 rounded-xl font-bold transition-all text-sm"
            >
              Become a Volunteer
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onDonateClick();
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-xl font-bold shadow-md shadow-orange-500/20 active:bg-orange-700 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" /> Donate Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
