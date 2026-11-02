import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, PhoneCall, ArrowRight, Check, Sparkles, MapPin } from 'lucide-react';
import { ScheduleCallModal, ClientLead } from './ScheduleCallModal';

interface RailroadBannerProps {
  distractedStyle?: 'outlined' | 'solid' | 'gradient';
  bgShade?: 'pure-black' | 'deep-onyx';
  interactive?: boolean;
  logoBadge?: 'glow' | 'pill' | 'none';
  onScheduleCallClick?: () => void;
}

export function ClicktotsLogo({
  className = 'h-9 sm:h-11 md:h-12',
  badge = 'glow',
}: {
  className?: string;
  badge?: 'glow' | 'pill' | 'none';
}) {
  return (
    <div
      className={`inline-flex items-center transition-all ${
        badge === 'pill'
          ? 'bg-white/10 px-3 py-1.5 rounded-xl border border-white/20 backdrop-blur-md'
          : ''
      }`}
    >
      <img
        src="/assets/aistudio/clicktots-logo-removebg-preview_a0828184.png"
        alt="Click tots TECHNOLOGIES"
        className={`${className} w-auto object-contain select-none ${
          badge === 'glow'
            ? 'filter drop-shadow-[0_0_1.5px_rgba(255,255,255,0.85)]'
            : ''
        }`}
      />
    </div>
  );
}

export function RailroadBanner({
  distractedStyle = 'outlined',
  bgShade = 'pure-black',
  interactive = true,
  logoBadge = 'glow',
}: RailroadBannerProps) {
  const [quickInput, setQuickInput] = useState('');
  const [activeNav, setActiveNav] = useState<string>('');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [latestLead, setLatestLead] = useState<ClientLead | null>(null);

  // Updated navigation links per user request:
  // "About Us", "Projects", "Careers", "Blog"
  const navLinks = [
    { label: 'About Us', href: '#about-us' },
    { label: 'Projects', href: '#projects' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
  ];

  const handleOpenSchedule = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsScheduleModalOpen(true);
  };

  const handleLeadSubmitted = (lead: ClientLead) => {
    setLatestLead(lead);
    setQuickInput('');
  };

  return (
    <div
      className={`relative w-full min-h-screen flex flex-col justify-between selection:bg-white/20 selection:text-white transition-colors duration-300 font-['DM_Sans'] ${
        bgShade === 'pure-black' ? 'bg-[#000000]' : 'bg-[#0a0a0c]'
      }`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* TOP NAVIGATION BAR */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-8 md:pt-10 z-20">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo (Clicktots Technologies) */}
          <div className="flex items-center select-none cursor-pointer">
            <ClicktotsLogo badge={logoBadge} />
          </div>

          {/* Center: Translucent Floating Pill Navigation */}
          {/* Replaced: About Us, Projects, Careers, Blog */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center glass-pill rounded-full px-7 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)] border border-white/20 bg-white/[0.08] backdrop-blur-md"
          >
            <ul className="flex items-center gap-7 lg:gap-9 list-none m-0 p-0">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (interactive) {
                        e.preventDefault();
                        setActiveNav(item.label);
                      }
                    }}
                    className={`text-sm tracking-wide transition-colors duration-200 cursor-pointer ${
                      activeNav === item.label
                        ? 'text-white font-medium'
                        : 'text-white/85 hover:text-white font-normal'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: "Talk to us" Button (Replaces Get Started) */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsScheduleModalOpen(true)}
              className="bg-white text-black text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-neutral-200 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-black" />
              <span>Talk to us</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar for small screens */}
        <div className="flex md:hidden justify-center mt-5">
          <nav className="flex items-center gap-4 px-5 py-2 glass-pill rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-md overflow-x-auto">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-white/80 hover:text-white whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* CENTER HERO BANNER CONTENT */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-24 text-center max-w-5xl mx-auto z-10 w-full">
        {/* Pill Tag: Digital Marketing Agency in Chennai */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-md shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="text-xs sm:text-[13px] font-medium tracking-wide text-white/80">
              Digital Marketing Agency in Chennai
            </span>
          </div>
        </motion.div>

        {/* Main Headline: Creativity Starts with a Click */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white text-center select-none"
        >
          <span>Creativity Starts</span>
          <br className="hidden sm:inline" />{' '}
          <span className="inline-block">
            <span>with a</span>{' '}
            {distractedStyle === 'outlined' ? (
              <span className="text-stroke-white font-semibold">Click</span>
            ) : distractedStyle === 'gradient' ? (
              <span className="bg-gradient-to-r from-blue-400 via-white to-blue-200 bg-clip-text text-transparent font-bold">
                Click
              </span>
            ) : (
              <span className="text-white">Click</span>
            )}
          </span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-7 text-sm sm:text-base md:text-[17px] text-white/70 leading-relaxed max-w-2xl font-normal text-center"
        >
          <p>
            Creative strategies, powerful digital solutions and result-driven marketing
          </p>
          <p>
            to help your brand grow faster, reach wider and achieve more.
          </p>
        </motion.div>

        {/* Bottom Call to Action Capsule: Schedule Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 sm:mt-12 w-full max-w-xl mx-auto px-2"
        >
          <form
            onSubmit={handleOpenSchedule}
            className="relative rounded-full glass-pill p-1.5 sm:p-2 pl-6 sm:pl-7 flex items-center justify-between border border-white/20 bg-white/[0.08] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all hover:border-white/30 focus-within:border-white/40"
          >
            <input
              type="text"
              value={quickInput}
              onChange={(e) => setQuickInput(e.target.value)}
              placeholder="Enter your email or phone number"
              className="w-full bg-transparent text-white placeholder:text-white/45 text-sm sm:text-base outline-none pr-3 font-normal"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-neutral-200 transition-all duration-200 shrink-0 cursor-pointer active:scale-95 shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Schedule Call</span>
            </button>
          </form>
        </motion.div>
      </main>

      {/* Schedule Call Client Information Modal Box */}
      <ScheduleCallModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        initialEmail={quickInput}
        onLeadSubmitted={handleLeadSubmitted}
      />
    </div>
  );
}
