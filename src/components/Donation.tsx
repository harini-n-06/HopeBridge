import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { CreditCard, ShieldCheck, Heart, Award, Sparkles, X, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface DonationProps {
  preselectedCampaign?: string | null;
  onClearPreselectedCampaign?: () => void;
}

export default function Donation({ preselectedCampaign, onClearPreselectedCampaign }: DonationProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [selectedProject, setSelectedProject] = useState('HopeBridge General Fund');
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptCertificate, setReceiptCertificate] = useState<any | null>(null);

  // Synchronize outer preselected campaign
  useEffect(() => {
    if (preselectedCampaign) {
      setSelectedProject(preselectedCampaign);
    }
  }, [preselectedCampaign]);

  const presetAmounts = [500, 1000, 2500, 5000];

  const getFinalAmount = () => {
    if (selectedAmount === 'custom') {
      const parsed = parseFloat(customAmount);
      return isNaN(parsed) ? 0 : parsed;
    }
    return selectedAmount;
  };

  const handlePresetSelect = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^[0-9]*$/.test(val)) {
      setCustomAmount(val);
      setSelectedAmount('custom');
    }
  };

  const handleDonateSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalAmount = getFinalAmount();
    if (finalAmount <= 0) {
      alert('Please select or input a valid donation amount.');
      return;
    }
    if (!donorName.trim()) {
      alert('Please enter your full name to generate the 80G tax exemption receipt.');
      return;
    }
    if (!donorEmail.trim()) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsProcessing(true);

    // Simulate Payment Gateway Process
    setTimeout(() => {
      const receiptNo = `HB-REC-${Math.floor(100000 + Math.random() * 900000)}`;
      const currentDate = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      setReceiptCertificate({
        receiptNumber: receiptNo,
        donor: donorName,
        email: donorEmail,
        amount: finalAmount,
        project: selectedProject,
        date: currentDate
      });

      setIsProcessing(false);
      
      // Clear forms
      setDonorName('');
      setDonorEmail('');
      setSelectedAmount(1000);
      setCustomAmount('');
      if (onClearPreselectedCampaign) {
        onClearPreselectedCampaign();
      }
    }, 1500);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="donate" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Dark background particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-orange-500/15 border border-orange-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-orange-400">
            Durable Compassion
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Empower With a Secure Donation
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Your generous gift provides basic sustenance, education materials, and free medical care. All domestic donations are exempt from tax under Section 80G.
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Donation UI Panel */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 bg-slate-900/60 border border-slate-800 p-8 sm:p-12 rounded-3xl backdrop-blur-md">
          
          {/* Left Column: Core Fields */}
          <div className="md:col-span-7 space-y-6 text-left" id="donation-fields-col">
            <h3 className="text-xl font-extrabold tracking-tight flex items-center gap-2">
              <Heart className="w-6 h-6 text-orange-500 fill-orange-500" /> Donation Form
            </h3>

            {/* Campaign Pre-selection highlight notification */}
            {preselectedCampaign && (
              <div className="p-3 bg-blue-900/40 border border-blue-500/30 rounded-xl flex items-center justify-between">
                <p className="text-xs text-blue-200">
                  Targeted Campaign:{' '}
                  <strong className="text-white">{preselectedCampaign}</strong>
                </p>
                <button
                  onClick={onClearPreselectedCampaign}
                  className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <form onSubmit={handleDonateSubmit} className="space-y-5">
              {/* Preset selectors */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Select Donation Amount (INR)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {presetAmounts.map((amt) => {
                    const isSelected = selectedAmount === amt;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handlePresetSelect(amt)}
                        className={`py-3.5 px-4 rounded-2xl font-black text-sm tracking-tight transition-all border ${
                          isSelected
                            ? 'bg-orange-500 border-transparent text-white shadow-lg shadow-orange-500/20'
                            : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {formatCurrency(amt)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Input */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Or Enter Custom Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 font-extrabold text-slate-500">
                    ₹
                  </span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder="Enter other amount"
                    className="w-full pl-8 pr-4 py-3.5 rounded-2xl border border-slate-800 bg-slate-950 text-white text-base font-extrabold focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition-all"
                  />
                </div>
              </div>

              {/* Destination Program */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Allocate Donation To
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-800 bg-slate-950 text-white text-sm font-bold focus:outline-none focus:border-orange-500 appearance-none transition-all"
                >
                  <option value="HopeBridge General Fund">HopeBridge General Fund (Maximum Need)</option>
                  <option value="Sponsor a Child">Sponsor a Child Campaign</option>
                  <option value="Plant 10,000 Trees">Plant 10,000 Trees Campaign</option>
                  <option value="Feed Families in Need">Feed Families Campaign</option>
                  <option value="Healthcare Initiatives">Healthcare & wellness camps</option>
                  <option value="Women Empowerment Program">Women Skill Centers</option>
                </select>
              </div>

              {/* Donor Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Full Name (for Tax receipt)
                  </label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Aditi Sharma"
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-800 bg-slate-950 text-white text-sm font-semibold focus:outline-none focus:border-orange-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Email (for Certificate)
                  </label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="e.g. aditi@gmail.com"
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-800 bg-slate-950 text-white text-sm font-semibold focus:outline-none focus:border-orange-500 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Action Trigger */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-500/20 active:bg-orange-700 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm tracking-wider uppercase flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Contacting Secure Gateway...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Complete Secure Donation of {formatCurrency(getFinalAmount())}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Checkout Info & Visuals */}
          <div className="md:col-span-5 space-y-6 text-left" id="donation-info-col">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Payment Details</h4>
            
            {/* Gateways picker */}
            <div className="space-y-3">
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-orange-500 bg-orange-500/5'
                    : 'border-slate-800 bg-slate-950 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <p className="text-xs font-black">Instant UPI Payment</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Google Pay, PhonePe, BHIM, Paytm</p>
                </div>
                <span className="text-xs font-bold text-orange-500">UPI</span>
              </button>

              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  paymentMethod === 'card'
                    ? 'border-orange-500 bg-orange-500/5'
                    : 'border-slate-800 bg-slate-950 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <p className="text-xs font-black">Credit / Debit Card</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Visa, Mastercard, RuPay, Amex</p>
                </div>
                <CreditCard className="w-5 h-5 text-slate-400" />
              </button>

              <button
                onClick={() => setPaymentMethod('netbanking')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  paymentMethod === 'netbanking'
                    ? 'border-orange-500 bg-orange-500/5'
                    : 'border-slate-800 bg-slate-950 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <p className="text-xs font-black">Net Banking</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">All major Indian nationalized banks</p>
                </div>
                <span className="text-[10px] bg-slate-800 px-2 py-1 rounded-md text-slate-300 font-extrabold uppercase">Net</span>
              </button>
            </div>

            {/* Cert & Exemption indicators */}
            <div className="space-y-4 pt-5 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-extrabold text-slate-200">PCI-DSS Secure Link</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">All details are fully encrypted under 256-bit secure sockets layer protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-extrabold text-slate-200">80G Tax Exemption</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">Instantly download tax clearance and general receipt certificate of donation.</p>
                </div>
              </div>
            </div>

            {/* Simulated UPI icons */}
            <div className="pt-2 flex items-center gap-3 opacity-30">
              <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">Accepted channels:</span>
              <span className="text-xs font-black tracking-tight text-slate-400">VISA</span>
              <span className="text-xs font-black tracking-tight text-slate-400">RUPAY</span>
              <span className="text-xs font-black tracking-tight text-slate-400">UPI</span>
              <span className="text-xs font-black tracking-tight text-slate-400">MASTERCARD</span>
            </div>

          </div>

        </div>
      </div>

      {/* Dynamic Donation Certificate Popup Modal */}
      {receiptCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in text-slate-800">
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center space-y-6 animate-scale-up max-h-[90vh] overflow-y-auto">
            
            {/* Close */}
            <button
              onClick={() => setReceiptCertificate(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-full transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md shadow-orange-500/10">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Donation Successful!</h3>
              <p className="text-xs text-emerald-600 font-extrabold flex items-center justify-center gap-1 mt-1">
                <ShieldCheck className="w-4 h-4" /> 80G Tax-Exempt Audit Receipt Generated
              </p>
            </div>

            {/* PDF Styled Certificate Card */}
            <div className="relative border-8 border-double border-slate-200 p-6 rounded-2xl bg-slate-50/50 text-left space-y-5 shadow-inner">
              
              {/* Seal Backdrop */}
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-orange-500/5 rounded-full border border-orange-500/10 flex items-center justify-center pointer-events-none">
                <Award className="w-10 h-10 text-orange-400 opacity-30" />
              </div>

              {/* Cert title */}
              <div className="text-center space-y-1">
                <span className="text-[10px] font-extrabold text-blue-600 tracking-widest uppercase block">HopeBridge Foundation</span>
                <h4 className="text-lg font-black text-slate-800 uppercase tracking-wide">Certificate of Appreciation</h4>
                <div className="w-16 h-0.5 bg-orange-400 mx-auto mt-1" />
              </div>

              {/* Narrative */}
              <div className="text-xs text-slate-600 space-y-2 text-center leading-relaxed font-medium">
                <p>This certificate is proudly awarded with immense gratitude to</p>
                <p className="text-base font-black text-slate-900 tracking-tight">{receiptCertificate.donor}</p>
                <p>
                  in recognition of a generous, noble donation of{' '}
                  <strong className="text-slate-900 text-sm font-black">
                    {formatCurrency(receiptCertificate.amount)}
                  </strong>{' '}
                  towards:
                </p>
                <p className="text-xs font-bold text-blue-600 underline">{receiptCertificate.project}</p>
                <p>
                  Your contribution provides durable, direct support to underprivileged groups, promoting holistic growth and sustainable future opportunities.
                </p>
              </div>

              {/* Cert Footer Details */}
              <div className="grid grid-cols-2 gap-4 text-[10px] border-t border-slate-200/80 pt-4 font-semibold text-slate-500">
                <div>
                  <p className="text-slate-400 block uppercase font-bold text-[8px] tracking-wider">Receipt ID</p>
                  <p className="font-mono text-slate-800 mt-0.5 font-bold">{receiptCertificate.receiptNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 block uppercase font-bold text-[8px] tracking-wider">Date Granted</p>
                  <p className="text-slate-800 mt-0.5 font-bold">{receiptCertificate.date}</p>
                </div>
              </div>

              {/* Exemption references */}
              <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-[9px] text-slate-500 text-center leading-snug font-medium">
                Registered under Section 12A & 80G of Income Tax Act, 1961. Unique ID: AACTH3024DSD18. This electronic certificate qualifies as a valid tax deduction claim receipt.
              </div>

            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                A copy of this tax exemption certificate along with detailed program reports has been sent to <strong>{receiptCertificate.email}</strong>.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    alert('Certificate successfully downloaded to your local device (Simulated)');
                  }}
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold py-3 rounded-xl text-xs tracking-wider uppercase"
                >
                  Download Receipt File
                </button>
                <button
                  onClick={() => setReceiptCertificate(null)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold py-3 rounded-xl text-xs tracking-wider uppercase"
                >
                  Close Receipt
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
