import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  User, 
  Building, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Globe
} from 'lucide-react';

export interface ClientLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  website?: string;
  services: string[];
  budget: string;
  preferredTime: string;
  message?: string;
  createdAt: string;
}

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted?: (lead: ClientLead) => void;
  initialEmail?: string;
}

export function ScheduleCallModal({
  isOpen,
  onClose,
  onLeadSubmitted,
  initialEmail = '',
}: ScheduleCallModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
  ]);
  const [budget, setBudget] = useState('₹50,000 - ₹1,50,000/mo');
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [preferredTime, setPreferredTime] = useState('11:00 AM - 12:00 PM');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<ClientLead | null>(null);

  // Sync initial email when modal opens
  React.useEffect(() => {
    if (initialEmail && !email) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  const availableServices = [
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Google & Meta Paid Ads',
    'Website Design & Dev',
    'Brand Identity & Creatives',
    'Lead Generation / B2B',
  ];

  const budgetOptions = [
    '< ₹50,000 / month',
    '₹50,000 - ₹1,50,000/mo',
    '₹1,50,000 - ₹5,00,000/mo',
    '₹5,00,000+ / month',
  ];

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '02:00 PM - 03:00 PM',
    '04:00 PM - 05:00 PM',
    '06:00 PM - 07:00 PM',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const lead: ClientLead = {
      id: `LEAD-${Date.now().toString().slice(-6)}`,
      name,
      email,
      phone,
      company,
      website,
      services: selectedServices,
      budget,
      preferredTime: `${preferredDate} at ${preferredTime}`,
      message,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedLead(lead);
      if (onLeadSubmitted) {
        onLeadSubmitted(lead);
      }
    }, 700);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setWebsite('');
    setMessage('');
    setIsSuccess(false);
    setSubmittedLead(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden z-10 my-auto text-white font-['DM_Sans']"
        >
          {/* Top Header */}
          <div className="relative px-6 sm:px-8 pt-7 pb-6 border-b border-neutral-800/80 bg-neutral-900/40">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free 30-Min Strategy Consultation</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Schedule a Call with Clicktots
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-lg">
                  Tell us about your brand. Our growth strategists in Chennai will review your market and prepare a custom roadmap.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    <span>Your Details</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Karthik Raman"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="karthik@company.com"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">
                        Phone / WhatsApp <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">
                        Company or Brand Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Retail"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Services Required */}
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2.5 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Services You Need (Select all that apply)</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`text-xs px-3.5 py-2 rounded-xl transition-all cursor-pointer font-medium border ${
                            isSelected
                              ? 'bg-blue-600/20 border-blue-500 text-white shadow-[0_0_12px_rgba(37,99,235,0.25)]'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Monthly Marketing Budget */}
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2.5">
                    Estimated Monthly Budget
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setBudget(opt)}
                        className={`text-xs p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          budget === opt
                            ? 'bg-white text-black font-semibold border-white shadow-sm'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2.5 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Preferred Time for Call</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-neutral-400 mb-1">Day</label>
                      <select
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Today">Today (Urgent)</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="In 2 Days">In 2 Days</option>
                        <option value="This Friday">This Friday</option>
                        <option value="Next Monday">Next Monday</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-neutral-400 mb-1">Time Slot (IST)</label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">
                    Tell us briefly about your current goals or challenges (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Looking to double lead generation for our Chennai clinic / retail store via Google Ads."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <span className="text-[11px] text-neutral-500">
                    🔒 No spam. 100% confidential.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black font-semibold text-sm px-7 py-3 rounded-full hover:bg-neutral-200 transition-all cursor-pointer active:scale-95 shadow-lg flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Reserving Slot...</span>
                    ) : (
                      <>
                        <span>Confirm & Schedule Call</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Screen */
              <div className="py-8 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Call Scheduled Successfully!
                </h3>
                <p className="text-neutral-400 text-sm mt-2 max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{submittedLead?.name}</span>! A Clicktots senior marketing strategist has reserved your slot for:
                </p>

                {/* Booking Card */}
                <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-4 sm:p-5 my-6 max-w-md mx-auto text-left space-y-2.5 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                    <span className="text-neutral-400">Appointment</span>
                    <span className="text-emerald-400 font-mono font-medium">
                      {submittedLead?.id}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Time Slot:</span>
                    <span className="text-white font-medium">
                      {submittedLead?.preferredTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Phone:</span>
                    <span className="text-white font-medium">{submittedLead?.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Email:</span>
                    <span className="text-white font-medium">{submittedLead?.email}</span>
                  </div>
                  <div className="pt-2 border-t border-neutral-800">
                    <span className="text-neutral-400 block mb-1">Focus Areas:</span>
                    <div className="flex flex-wrap gap-1">
                      {submittedLead?.services.map((s) => (
                        <span
                          key={s}
                          className="bg-neutral-800 px-2 py-0.5 rounded text-[10px] text-neutral-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={onClose}
                    className="bg-white text-black font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                  <button
                    onClick={handleReset}
                    className="bg-neutral-800 text-white/80 hover:text-white text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    Book Another Call
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
