import React, { useState, FormEvent, ChangeEvent } from 'react';
import { User, Mail, Phone, MapPin, HeartHandshake, FileText, CheckCircle2, ShieldAlert, Sparkles, X, Heart } from 'lucide-react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    interest: 'Education Support',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registeredBadge, setRegisteredBadge] = useState<any | null>(null);

  const interests = [
    'Education Support',
    'Healthcare & Wellness',
    'Environment Protection',
    'Hunger Relief',
    'Women Empowerment',
    'General Volunteering'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Provide a valid 10-12 digit phone number';
    }
    if (!formData.city.trim()) newErrors.city = 'City of residence is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate server side registering
    setTimeout(() => {
      const badgeId = `HB-VOL-${Math.floor(100000 + Math.random() * 900000)}`;
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      setRegisteredBadge({
        id: badgeId,
        name: formData.fullName,
        email: formData.email,
        interest: formData.interest,
        city: formData.city,
        date: currentDate
      });

      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        interest: 'Education Support',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="volunteer" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">Join Hands</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Become a Volunteer
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Real change happens when compassionate people come together. Dedicate your skills, time, or energy to create a lasting, measurable footprint.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Values/Visual Column */}
          <div className="lg:col-span-5 space-y-6 text-left" id="volunteer-info-column">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Volunteer With HopeBridge?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our volunteer network forms the foundational pillars of our daily local initiatives. We ensure your efforts translate directly into verified community impact.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Flexible Scheduling</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Participate in weekend programs, digital classes, or on-field emergency drives.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Certificates & Recognition</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Receive accredited corporate-friendly letters of appreciation and digital achievement badges.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Direct Skill Application</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Contribute code, design marketing assets, host medical checkups, or lead classes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-7" id="volunteer-form-column">
            <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-slate-900/5 text-left">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <HeartHandshake className="w-6 h-6 text-blue-600" /> Apply for Volunteer Network
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                        <User className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-100'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                        <Mail className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. ramesh@example.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-100'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                        <Phone className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-100'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      City of Residence
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                        <MapPin className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Mumbai"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                          errors.city
                            ? 'border-red-500 focus:ring-red-100'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                    </div>
                    {errors.city && (
                      <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" /> {errors.city}
                      </p>
                    )}
                  </div>
                </div>

                {/* Area of Interest */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Area of Interest
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                      <HeartHandshake className="w-4.5 h-4.5" />
                    </span>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none transition-all"
                    >
                      {interests.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Short Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message or Relevant Skills (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3.5 text-slate-400">
                      <FileText className="w-4.5 h-4.5" />
                    </span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g. I am a software engineer, I can teach computer literacy, or help organize afforestation programs."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 active:bg-blue-800 active:shadow-none hover:-translate-y-0.5 transition-all text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Registration Request...</span>
                    </>
                  ) : (
                    <>
                      <HeartHandshake className="w-5 h-5" />
                      <span>Join Our Mission</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Volunteer Virtual ID Badge Modal */}
      {registeredBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
          <div className="relative bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center space-y-5 animate-scale-up">
            
            {/* Close */}
            <button
              onClick={() => setRegisteredBadge(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-full transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title / Celebration */}
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Application Approved!</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">Welcome to the HopeBridge Volunteer Force.</p>
            </div>

            {/* Virtual Badge Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white p-5 border-4 border-slate-800 shadow-xl text-left">
              {/* Card Hologram Circle */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute top-4 right-4 text-[10px] bg-emerald-500/85 text-white font-extrabold px-2 py-0.5 rounded-full tracking-wider flex items-center gap-1 uppercase">
                <Sparkles className="w-2.5 h-2.5" /> Active
              </div>

              {/* Card Header */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <div className="bg-white text-slate-950 p-1.5 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold tracking-wide uppercase">HopeBridge</h4>
                  <p className="text-[8px] tracking-widest text-blue-300 font-semibold uppercase">Official Volunteer</p>
                </div>
              </div>

              {/* Card Details */}
              <div className="mt-4 space-y-2.5 text-xs">
                <div>
                  <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wider">Name</span>
                  <span className="font-extrabold text-sm tracking-tight">{registeredBadge.name}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wider">Badge ID</span>
                    <span className="font-mono text-[10px] font-bold text-emerald-300">{registeredBadge.id}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wider">Division</span>
                    <span className="font-bold text-[10px] text-blue-100 truncate block">{registeredBadge.interest}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-white/5">
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wider">City</span>
                    <span className="font-bold text-[10px] text-slate-300">{registeredBadge.city}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-bold tracking-wider">Issued</span>
                    <span className="font-bold text-[10px] text-slate-300">{registeredBadge.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction Footer */}
            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
              We have sent a verification email and invitation link to <strong>{registeredBadge.email}</strong>. Our state coordinator will connect with you via phone shortly.
            </p>

            <button
              onClick={() => setRegisteredBadge(null)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-2.5 rounded-xl text-xs tracking-wide uppercase"
            >
              Great, Let's Go!
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
