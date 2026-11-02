import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Sparkles,
  Code2,
  Search,
  BarChart3,
  Target,
  Share2,
  Megaphone,
  Cpu,
  Palette,
  MousePointer
} from 'lucide-react';

export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    tag: 'Next.js & Full-Stack',
    description: 'Custom high-performance web applications, fluid responsive interfaces, ultra-fast headless architectures, and scalable full-stack platforms engineered from a blank page.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
    icon: Code2,
    features: ['Custom React & Next.js', 'Ultra-fast Core Web Vitals', 'E-Commerce & Portals', 'API Integrations'],
  },
  {
    id: 'seo',
    number: '02',
    title: 'SEO',
    tag: 'Organic Domination',
    description: 'Data-backed keyword mapping, technical site health audits, high-authority backlink strategies, and local Chennai search dominance to capture intent-rich organic traffic.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    icon: Search,
    features: ['Technical & On-Page SEO', 'Keyword Intent Research', 'Local SEO & Google Maps', 'Authority Link Building'],
  },
  {
    id: 'digital-marketing',
    number: '03',
    title: 'Digital Marketing',
    tag: 'Omnichannel Growth',
    description: 'Full-funnel digital strategy, audience segmentation, conversion rate optimization, and integrated multi-touch campaigns that turn clicks into loyal high-value customers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    icon: BarChart3,
    features: ['Full-Funnel Strategy', 'Lead Generation Funnels', 'Conversion Optimization', 'Email & SMS Automation'],
  },
  {
    id: 'ppc',
    number: '04',
    title: 'PPC',
    tag: 'High-ROI Paid Ads',
    description: 'Hyper-targeted Google Search, Shopping, YouTube, and Meta ad funnels engineered for razor-sharp cost-per-acquisition and maximized return on ad spend.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
    icon: Target,
    features: ['Google Search & Performance Max', 'Meta Ads (FB & Insta)', 'Retargeting Architecture', 'ROAS Optimization'],
  },
  {
    id: 'social-media',
    number: '05',
    title: 'Social Media',
    tag: 'Content & Community',
    description: 'Viral short-form video reels, bespoke editorial calendars, community storytelling, and high-impact influencer collaborations that build magnetic brand affinity.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80',
    icon: Share2,
    features: ['Viral Reels & Shorts', 'Influencer Management', 'Community Engagement', 'Trend Jacking & Creative Copy'],
  },
  {
    id: 'outdoor-event',
    number: '06',
    title: 'Outdoor Event',
    tag: 'Experiential Branding',
    description: 'High-visibility outdoor hoardings, transit advertising, interactive booth installations, and immersive brand activations across key Chennai and metro commercial hubs.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
    icon: Megaphone,
    features: ['Transit & Hoarding Ads', 'Exhibition Stall Design', 'Experiential Pop-Ups', 'Mall & College Activations'],
  },
  {
    id: 'ai-driven',
    number: '07',
    title: 'AI Driven',
    tag: 'Next-Gen Automation',
    description: 'Predictive customer intelligence, generative AI content engines, automated conversational agents, and smart marketing workflows that compound your brand efficiency.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    icon: Cpu,
    features: ['AI Customer Segmentation', 'Conversational AI Bots', 'Generative Creative Pipelines', 'Predictive LTV Analytics'],
  },
  {
    id: 'graphical-designing',
    number: '08',
    title: 'Graphical Designing',
    tag: 'Visual Identity',
    description: 'Signature brand identities, typography guidelines, packaging, print collaterals, and striking digital visual assets crafted with pixel precision and emotional resonance.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80',
    icon: Palette,
    features: ['Brand Identity Systems', 'Packaging & Print Design', 'Motion Graphic Creatives', 'Social Media Design Kits'],
  },
];

interface ServiceSectionProps {
  onBookMeetingClick?: () => void;
  onSeeProjectsClick?: () => void;
  titleVariation?: 'digital' | 'bespoke-literal';
}

export function ServiceSection({
  onBookMeetingClick,
  onSeeProjectsClick,
  titleVariation = 'digital',
}: ServiceSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const totalCards = SERVICES_DATA.length; // 8 cards

  // Scroll Progress Listener:
  // Tracks how far the user has scrolled inside this tall sticky container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      // rect.top <= 0 means container has reached sticky top
      // rect.bottom <= window.innerHeight means user has scrolled to bottom of section
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute active card index from scrollProgress (0 to 7)
  const activeIndex = Math.min(Math.floor(scrollProgress * totalCards), totalCards - 1);
  const activeService = SERVICES_DATA[activeIndex];

  // Maximum translation percentage so that the 8th card finishes fully in view
  // On desktop, each card is ~320px-360px wide; we translate proportionally to scrollProgress
  const trackTranslatePercent = scrollProgress * ((totalCards - 1) / totalCards) * 100;

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetY = scrollTop + (index / (totalCards - 1)) * totalScrollable;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full h-[450vh] bg-[#000000] text-white font-['DM_Sans'] border-t border-neutral-900"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* STICKY VIEWPORT CONTAINER - Stays pinned until all 8 cards are shown */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-4 sm:py-6 md:py-7 overflow-hidden px-4 sm:px-6 md:px-10 select-none">
        
        {/* 1. TOP HEADER - 50/50 Left & Right Split Animation */}
        <div className="w-full max-w-5xl mx-auto shrink-0 pt-1 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 px-2">
          {/* Left 50%: Tag badge & Main Title coming from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs text-white/80 font-medium mb-1.5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Digital Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white">
              Our Services
            </h2>
          </motion.div>

          {/* Right 50%: Subtitle coming from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-right flex-1"
          >
            <p className="text-xs sm:text-sm text-white/70 max-w-md md:ml-auto font-normal">
              The digital solutions you deserve have never been built before.
            </p>
          </motion.div>
        </div>

        {/* 2. SCROLL-DRIVEN HORIZONTAL CARDS TRACK - Fully visible with no vertical cut-off */}
        <div className="relative w-full flex-1 flex flex-col justify-center my-1 min-h-0 overflow-visible">
          {/* Scroll progress tracker bar: 50% Left & 50% Right split */}
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between mb-2.5 px-2 text-xs text-white/50">
            {/* Left 50% indicator */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wide text-white/80">
                Service {activeService.number} of 0{totalCards} • <span className="text-white font-medium">{activeService.title}</span>
              </span>
            </motion.div>

            {/* Right 50% indicator */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <span className="text-[11px] text-white/40 hidden sm:inline">
                Scroll to explore all 8 services
              </span>
              <div className="w-28 sm:w-36 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-150 rounded-full"
                  style={{ width: `${Math.max(12, scrollProgress * 100)}%` }}
                />
              </div>
            </motion.div>
          </div>

          {/* Sliding Cards Track: 50% Left (Cards 1-4) & 50% Right (Cards 5-8) entrance */}
          <div className="w-full overflow-visible py-1">
            <motion.div
              className="flex items-center gap-4 sm:gap-5 md:gap-6 transition-transform ease-out duration-150"
              style={{
                transform: `translateX(-${trackTranslatePercent * 0.78}%)`,
              }}
            >
              {SERVICES_DATA.map((card, idx) => {
                const IconComponent = card.icon;
                const distance = Math.abs(activeIndex - idx);
                const isLeftHalf = idx < 4;
                const archClass =
                  distance === 0
                    ? 'translate-y-0 scale-100 border-white/40 shadow-[0_15px_40px_rgba(255,255,255,0.08)]'
                    : distance === 1
                    ? 'translate-y-1 scale-[0.98] border-white/20'
                    : 'translate-y-2 scale-[0.96] border-white/10 opacity-75';

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, x: isLeftHalf ? -120 : 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.85,
                      delay: (isLeftHalf ? idx : idx - 4) * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    onClick={() => {
                      setSelectedService(card);
                      scrollToCard(idx);
                    }}
                    className={`group relative shrink-0 w-[260px] sm:w-[290px] md:w-[325px] h-[310px] sm:h-[340px] md:h-[365px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 bg-neutral-900 ${archClass}`}
                  >
                    {/* Background Visual Asset */}
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.72] group-hover:brightness-[0.88]"
                    />

                    {/* Gradient Overlays ensuring text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20 group-hover:via-black/35 transition-all duration-300" />

                    {/* Card Top: Number & Category Tag */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-black/70 border border-white/15 text-white/90 backdrop-blur-md">
                        {card.number}
                      </span>
                      <span className="text-[11px] font-medium tracking-wide px-3 py-0.5 rounded-full bg-white/15 border border-white/20 text-white backdrop-blur-md">
                        {card.tag}
                      </span>
                    </div>

                    {/* Card Bottom: Title & Explanation */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-4.5 z-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/95 to-transparent pt-6">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1 rounded-lg bg-white/10 border border-white/15 text-white">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {card.title}
                        </h3>
                      </div>

                      <p className="text-[11px] sm:text-xs text-white/75 leading-relaxed line-clamp-2 sm:line-clamp-3 font-normal">
                        {card.description}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/80 group-hover:text-white transition-colors">
                        <span className="text-[10px] tracking-wide uppercase font-medium">Explore Details</span>
                        <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all">
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Interactive Card Dots (Click to scrub or view progress) */}
          <div className="flex items-center justify-center gap-2 mt-2.5">
            {SERVICES_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to service ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 3. BOTTOM DESCRIPTION & ACTION LINKS - 50/50 Left & Right Split */}
        <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 pb-1 px-4">
          {/* Left 50% Text */}
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-md text-center sm:text-left font-normal"
          >
            We design bespoke digital solutions and high-converting campaigns from a blank page. No templates, no shortcuts.
          </motion.p>

          {/* Right 50% Actions */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-7 text-xs sm:text-sm font-medium tracking-wide"
          >
            <button
              type="button"
              onClick={onBookMeetingClick}
              className="text-white hover:text-white/80 transition-colors underline underline-offset-4 decoration-white/60 hover:decoration-white cursor-pointer font-medium whitespace-nowrap"
            >
              Book a meeting
            </button>
            <button
              type="button"
              onClick={onSeeProjectsClick}
              className="text-white hover:text-white/80 transition-colors underline underline-offset-4 decoration-white/60 hover:decoration-white cursor-pointer font-medium whitespace-nowrap"
            >
              See Projects
            </button>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl text-left"
            >
              <div className="relative h-44 rounded-2xl overflow-hidden mb-5 border border-neutral-800">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/70 border border-white/20 text-white">
                    {selectedService.number} • {selectedService.tag}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white tracking-tight">
                {selectedService.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="mt-5 pt-4 border-t border-neutral-800">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                  Key Capabilities:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedService.features.map((feat) => (
                    <div
                      key={feat}
                      className="text-xs text-neutral-300 bg-neutral-900 border border-neutral-800/80 rounded-lg p-2 flex items-center gap-1.5"
                    >
                      <span className="text-blue-400">✓</span> {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs text-white/80 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    if (onBookMeetingClick) onBookMeetingClick();
                  }}
                  className="bg-white text-black font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
