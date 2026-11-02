import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  X, 
  ChevronRight,
  MousePointer,
  Sparkles
} from 'lucide-react';

export interface ClientCaseStudy {
  id: string;
  name: string;
  displayName: string;
  industry: string;
  year: string;
  logo: string;
  logoBg: 'white' | 'dark' | 'transparent';
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export const CLIENTS_DATA: ClientCaseStudy[] = [
  {
    id: 'anil-foods',
    name: 'Anil Foods',
    displayName: 'Anil Foods',
    industry: 'FMCG & Food Products',
    year: 'Since 1984',
    logo: '/assets/aistudio/image_0258749a.png',
    logoBg: 'white',
    tagline: 'Tradition reimagined: 2.8x organic reach and omnichannel retail brand resonance across South India.',
    summary: 'Anil Foods has been a household staple in South India for over 40 years. Clicktots partnered to modernize their digital presence, expanding from traditional retail shelves to high-converting D2C and regional digital storytelling.',
    challenge: 'Transitioning a generational brand into viral social relevance without losing its heritage and trust with homemakers and families.',
    solution: 'Designed high-engagement regional festival campaigns, regional influencer food collaborations, vernacular SEO optimization, and hyper-targeted Meta ad funnels across Tamil Nadu, Kerala, and Karnataka.',
    metrics: [
      { label: 'Organic Impressions', value: '4.2M+' },
      { label: 'Engagement Rate', value: '+185%' },
      { label: 'Retail Lead Inquiries', value: '3.4x' },
    ],
    deliverables: ['Social Media Marketing', 'Vernacular Video Campaigns', 'E-commerce UI/UX', 'Influencer Strategy'],
  },
  {
    id: 'ssi-tmt',
    name: 'SSI Tmt Bar',
    displayName: 'SSI Tmt Bar',
    industry: 'Construction & Steel Manufacturing',
    year: 'Fe 550 D Grade',
    logo: '/assets/aistudio/image_4a4cf2c2.png',
    logoBg: 'dark',
    tagline: 'Forging structural market dominance with high-impact B2B performance marketing and builder trust.',
    summary: 'SSI TMT Bars manufactures premium Fe 550D reinforcement steel bars engineered for earthquake resistance. Clicktots designed a high-intent B2B dealer and contractor acquisition pipeline across Tamil Nadu.',
    challenge: 'Reaching civil engineers, structural architects, real estate developers, and individual home builders through digital channels in a heavily offline market.',
    solution: 'Built targeted Google Search & Maps advertising, technical structural safety calculators, WhatsApp business automation for instant quotation requests, and video case studies showcasing landmark architectural projects.',
    metrics: [
      { label: 'Dealer Inquiries', value: '+320%' },
      { label: 'Cost Per Qualified Lead', value: '-42%' },
      { label: 'Regional Brand Search', value: '5.2x' },
    ],
    deliverables: ['PPC & Google Ads', 'Lead Funnel Architecture', 'WhatsApp CRM Integration', 'Corporate Video Creatives'],
  },
  {
    id: 'manu-mathew',
    name: 'Manu Mathew',
    displayName: 'Manu Mathew',
    industry: 'Healthcare & Specialized Eye Care',
    year: 'Super-Specialty Care',
    logo: '/assets/aistudio/image_3525c6a0.png',
    logoBg: 'white',
    tagline: 'Transforming patient trust, appointment scheduling, and localized ophthalmology leadership.',
    summary: 'Dr. Manu Mathew Eye Care delivers world-class ophthalmology, retinal surgery, and advanced refractive vision treatments. Clicktots crafted a patient-first digital ecosystem that builds compassionate medical trust.',
    challenge: 'High competition in private eye care, patient anxiety around eye surgeries, and need for seamless online appointment booking.',
    solution: 'Created educational visual content explaining advanced laser and cataract procedures, streamlined one-click WhatsApp appointment booking, and local Google Business Profile dominance for eye clinic searches.',
    metrics: [
      { label: 'Monthly Appointments', value: '+210%' },
      { label: 'Google Review Rating', value: '4.9 ★' },
      { label: 'Patient Inquiries', value: '1,800+' },
    ],
    deliverables: ['Healthcare SEO', 'Doctor Personal Branding', 'Patient Video Stories', 'Local Search Dominance'],
  },
  {
    id: 'king-makers',
    name: 'King Makers Acadamy',
    displayName: 'King Makers Acadamy',
    industry: 'Education & Competitive Exam Coaching',
    year: 'School of Banking',
    logo: '/assets/aistudio/image_e848f816.png',
    logoBg: 'white',
    tagline: 'Scaling student enrollment by 340% through data-driven performance funnels and webinar admissions.',
    summary: 'KingMakers School of Banking trains thousands of ambitious aspirants for Banking, Insurance, SSC, RRB, and Central Government examinations. Clicktots scaled their online and offline classroom admissions.',
    challenge: 'High cost per student acquisition and seasonal admission fluctuations across regional batches.',
    solution: 'Deployed omni-channel webinar funnels, automated mock-test lead magnets, student success highlight campaigns on YouTube and Instagram, and retargeting ads driving high-intent admissions.',
    metrics: [
      { label: 'Student Admissions', value: '+340%' },
      { label: 'Webinar Registrations', value: '25,000+' },
      { label: 'ROAS on Paid Ads', value: '4.6x' },
    ],
    deliverables: ['Performance Paid Ads', 'Landing Page Optimization', 'Lead Nurture Automations', 'YouTube Content Strategy'],
  },
];

interface ClientShowcaseSectionProps {
  onScheduleCallClick?: () => void;
}

export function ClientShowcaseSection({ onScheduleCallClick }: ClientShowcaseSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState<ClientCaseStudy | null>(null);

  const totalClients = CLIENTS_DATA.length; // 4 clients

  // Scroll Progress Listener:
  // Controls showing Anil first, then as the user scrolls, advances to SSI, Manu Mathew, KingMakers
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute active client index strictly based on scroll (0 to 3)
  const selectedIndex = Math.min(Math.floor(scrollProgress * totalClients), totalClients - 1);
  const activeClient = CLIENTS_DATA[selectedIndex];

  const scrollToClient = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetY = scrollTop + (index / (totalClients - 1)) * totalScrollable;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="clients"
      className="relative w-full h-[360vh] bg-[#000000] text-white font-['DM_Sans'] border-t border-neutral-900"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* STICKY VIEWPORT CONTAINER - Pinned as user scrolls through each of the 4 clients */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 sm:py-14 md:py-16 overflow-hidden px-6 sm:px-10 md:px-14 select-none">
        
        {/* 1. TOP SECTION - 2 Columns of Editorial Text with 50/50 Left & Right Split */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pb-8 sm:pb-12 border-b border-neutral-900 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 sm:space-y-3"
          >
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-normal">
              That's how a studio that stayed off the grid found success: through trust, consistency, and a shared ethos.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-normal">
              We're partners who are curious, transparent, ambitious, and passionate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 sm:space-y-3"
          >
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-normal">
              Project to project, referral after referral, we meet people where they are.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-normal">
              ...collaborating at the right time, for the right reasons. Do good work. Let the work sell itself.
            </p>
          </motion.div>
        </div>

        {/* 2. MAIN CLIENT SHOWCASE ROW - 50/50 Split Convergence */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-2">
          {/* Left 50% Group: Label & Client Names coming from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-8 gap-6 items-center"
          >
            {/* Left Column Label: "The brands that bet on us" */}
            <div className="lg:col-span-3">
              <span className="text-xs sm:text-sm tracking-wide text-white/50 font-normal">
                The brands that bet on us
              </span>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
                <span className="text-[11px] font-mono text-[#FF5500]">
                  Client 0{selectedIndex + 1} of 0{totalClients}
                </span>
              </div>
            </div>

            {/* Client Names Vertical Stack */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4">
              {CLIENTS_DATA.map((client, idx) => {
                const isSelected = selectedIndex === idx;

                return (
                  <div
                    key={client.id}
                    onClick={() => scrollToClient(idx)}
                    className="group flex items-center cursor-pointer transition-all duration-300"
                  >
                    <h3
                      className={`text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight transition-all duration-300 ${
                        isSelected
                          ? 'text-[#FF5500] scale-102 translate-x-2'
                          : 'text-white/85 hover:text-white hover:translate-x-1'
                      }`}
                    >
                      {client.displayName}
                    </h3>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right 50% Group: Animated Floating Logo Card & Punchline Text coming from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start gap-5"
          >
            {/* Motion Logo Card - Clicking opens the Glass Case Study Pop-up */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient.id}
                initial={{ opacity: 0, y: 25, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.94 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveCaseStudy(activeClient)}
                className="group relative w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/20 bg-neutral-950 p-4 shadow-[0_20px_50px_rgba(255,85,0,0.15)] flex flex-col justify-between hover:border-[#FF5500]/60 transition-all duration-300"
              >
                {/* Logo Frame */}
                <div
                  className={`relative flex-1 w-full rounded-2xl flex items-center justify-center p-6 overflow-hidden ${
                    activeClient.logoBg === 'dark'
                      ? 'bg-neutral-900'
                      : 'bg-white'
                  }`}
                >
                  <img
                    src={activeClient.logo}
                    alt={activeClient.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Bottom Meta Bar */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs">
                  <div>
                    <span className="text-[11px] text-white/50 block font-mono">
                      {activeClient.year}
                    </span>
                    <span className="text-white font-medium text-xs">
                      {activeClient.industry}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 group-hover:bg-[#FF5500] text-white transition-colors">
                    <span className="text-[11px] font-semibold">Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Click hint tag */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-0.5 rounded-full bg-black/80 text-[10px] text-white/90 border border-white/20 backdrop-blur-md">
                    Click to view
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Side Punchline / Narrative Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeClient.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-sm"
              >
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                  {activeClient.tagline}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(activeClient)}
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#FF5500] hover:text-orange-400 font-medium transition-colors cursor-pointer underline underline-offset-4 decoration-[#FF5500]/50"
                >
                  <span>Read full case study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3. BOTTOM SCROLL TRACKER BAR */}
        <div className="w-full max-w-7xl mx-auto pt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-white/40 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-white/60">
              Scroll down to reveal each client in sequence
            </span>
            <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF5500] transition-all duration-150 rounded-full"
                style={{ width: `${Math.max(25, scrollProgress * 100)}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {CLIENTS_DATA.map((c, i) => (
              <button
                key={c.id}
                onClick={() => scrollToClient(i)}
                className={`font-mono text-xs px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  i === selectedIndex
                    ? 'bg-[#FF5500] text-white font-semibold'
                    : 'text-white/40 hover:text-white bg-white/5'
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CASE STUDY GLASS CARD POP-UP MODAL */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudy(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Glass Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-neutral-950/95 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 max-h-[85vh] overflow-y-auto text-white backdrop-blur-2xl"
            >
              {/* Header with Logo & Close Button */}
              <div className="flex items-start justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center p-2.5 border border-white/15 overflow-hidden ${
                      activeCaseStudy.logoBg === 'dark' ? 'bg-neutral-900' : 'bg-white'
                    }`}
                  >
                    <img
                      src={activeCaseStudy.logo}
                      alt={activeCaseStudy.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FF5500] font-semibold">
                      Client Case Study • {activeCaseStudy.year}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                      {activeCaseStudy.name}
                    </h3>
                    <p className="text-xs text-white/60 mt-0.5">{activeCaseStudy.industry}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Case Study Content */}
              <div className="py-6 space-y-6 text-sm text-white/80">
                {/* Summary Quote */}
                <div className="bg-white/[0.04] border border-white/10 p-4 sm:p-5 rounded-2xl">
                  <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed italic">
                    "{activeCaseStudy.tagline}"
                  </p>
                </div>

                {/* Key Metrics Banner */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-3">
                    Verified Campaign Impact
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {activeCaseStudy.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-neutral-900 border border-white/10 rounded-2xl p-3.5 text-center"
                      >
                        <span className="text-xl sm:text-2xl font-bold text-[#FF5500] block">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-white/60 mt-0.5 block leading-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-4">
                    <h5 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                      The Challenge
                    </h5>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {activeCaseStudy.challenge}
                    </p>
                  </div>

                  <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-4">
                    <h5 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                      Clicktots Strategy
                    </h5>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {activeCaseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Services Delivered */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2.5">
                    Solutions Delivered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCaseStudy.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white/90"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-white/40">
                  Ready to grow your brand like {activeCaseStudy.name}?
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs text-white/80 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveCaseStudy(null);
                      if (onScheduleCallClick) onScheduleCallClick();
                    }}
                    className="bg-[#FF5500] hover:bg-orange-600 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                  >
                    <span>Schedule Similar Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
