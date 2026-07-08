import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert, Sparkles, Navigation, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please supply a subject';
    if (!formData.message.trim()) newErrors.message = 'Please type a brief message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSending(false);
      setShowSuccessToast(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Auto-hide success alert
      setTimeout(() => setShowSuccessToast(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">Connect</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch With Us
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Form and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Map Widget */}
          <div className="lg:col-span-5 space-y-8 text-left" id="contact-info-col">
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight leading-none">
                HopeBridge Offices
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Have any inquiries about our CSR compliance certifications, active projects, or tax clearance procedures? Write to our office or drop by.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-5" id="contact-details-list">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-100/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Headquarters Address</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    HopeBridge Foundation, 12th Floor, Tower B,<br />
                    Sector 62, Noida, NCR, India - 201301
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm border border-emerald-100/50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Email Deliveries</h4>
                  <p className="text-xs text-slate-600 mt-1 font-bold">
                    info@hopebridgefoundation.org<br />
                    <span className="text-slate-400 font-normal">CSR inquiries: </span>csr@hopebridgefoundation.org
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 shadow-sm border border-orange-100/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Hotlines</h4>
                  <p className="text-xs text-slate-600 mt-1 font-bold">
                    +91 98765 43210<br />
                    <span className="text-slate-400 font-normal">Toll-free Helpdesk: </span>1800-309-9000
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Vector Mock Map */}
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-3xl relative overflow-hidden group shadow-lg" id="contact-map">
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border px-3 py-1.5 rounded-full text-[10px] font-extrabold text-slate-900 flex items-center gap-1.5 shadow-sm z-10">
                <Globe className="w-3.5 h-3.5 text-blue-600" /> Noida, Sector 62
              </div>
              
              {/* Map Illustration Grid */}
              <div className="bg-slate-200/60 w-full h-44 rounded-2xl relative overflow-hidden flex items-center justify-center select-none">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1e293b_2px,transparent_2px)] [background-size:12px_12px]" />
                
                {/* Horizontal & Vertical grid roads */}
                <div className="absolute h-4 w-full bg-slate-300 top-1/2 -translate-y-1/2 border-y border-slate-400/20" />
                <div className="absolute w-4 h-full bg-slate-300 left-1/3 border-x border-slate-400/20" />
                <div className="absolute w-4 h-full bg-slate-300 left-2/3 border-x border-slate-400/20" />

                {/* Central Target Circle */}
                <div className="absolute left-[33%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center animate-ping pointer-events-none" />
                
                {/* Marker Pin */}
                <div className="absolute left-[33%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-rose-600 text-white p-1 rounded-full shadow-lg z-10">
                    <MapPin className="w-5 h-5 fill-rose-600 text-white" />
                  </div>
                  <span className="text-[9px] font-black bg-slate-900 text-white px-1.5 py-0.5 rounded shadow mt-1">HQ</span>
                </div>
              </div>

              {/* Map Footer indicators */}
              <div className="mt-3 flex justify-between items-center text-[10px] text-slate-500 font-bold">
                <span className="flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-emerald-500" /> 15 mins from Noida Electronic City Metro
                </span>
                <span className="text-blue-600 hover:underline cursor-pointer">Open Navigation</span>
              </div>
            </div>

          </div>

          {/* Right: Secure Message Box Form */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div className="bg-slate-50 border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl text-left relative">
              
              {/* Success Notification message */}
              {showSuccessToast && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-emerald-800 animate-fade-in shadow-md">
                  <CheckCircle2 className="w-5.5 h-5.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-600/90 mt-0.5 font-medium">Thank you for writing to HopeBridge. Our administrative desk will process your query and reply within 12-24 business hours.</p>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-extrabold text-slate-950 mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-600" /> Send a Direct Message
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Anand Sen"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-100'
                        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. anand@gmail.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-100'
                        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subject / Topic of Query
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. CSR partnership proposal or 80G tax query"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-red-500 focus:ring-red-100'
                        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Detailed Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Provide detailed instructions regarding your query..."
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-100'
                        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-xl shadow-md active:bg-slate-950 transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send secure Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
