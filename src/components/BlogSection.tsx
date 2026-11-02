import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  X, 
  Share2, 
  Bookmark, 
  Compass,
  TrendingUp,
  Flame,
  Lightbulb
} from 'lucide-react';

export interface BlogPost {
  id: string;
  category: string;
  categoryTheme: 'green' | 'blue' | 'pink' | 'purple' | 'amber' | 'emerald';
  date: string;
  readTime: string;
  title: string;
  subtitle: string;
  gradientHeader: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'content-skills',
    category: 'Content Marketing',
    categoryTheme: 'green',
    date: 'Sep 10, 2024',
    readTime: '5 min read',
    title: '7 Content Marketing Skills You Need to Master',
    subtitle: 'Attract, engage and convert your audience in 2025.',
    gradientHeader: 'from-emerald-500 via-teal-600 to-slate-900',
    content: [
      'In an era dominated by hyper-speed short-form video and generative content, modern content marketing demands strategic empathy and technical precision.',
      '1. Audience Intent Mapping: Moving beyond superficial buyer personas to real search and social behavioral triggers.',
      '2. Omnichannel Storytelling: Repurposing a single high-conviction thesis into podcasts, carousels, newsletters, and viral hooks.',
      '3. Search-First Copywriting: Balancing semantic search algorithms with authentic human resonance.',
      '4. Community Conversions: Nurturing high-trust dark social channels that convert readers into recurring brand evangelists.',
    ],
  },
  {
    id: 'inbound-outbound',
    category: 'Digital Marketing',
    categoryTheme: 'blue',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    title: 'What is Inbound and Outbound Marketing',
    subtitle: 'A modern strategy for the digital age. Learn the key differences.',
    gradientHeader: 'from-blue-600 via-indigo-700 to-slate-950',
    content: [
      'The modern debate between inbound pull and outbound push has evolved. Today’s top brands do not choose one—they orchestrate both into a synchronized flywheel.',
      'Inbound Marketing establishes magnetic organic authority: SEO pillar pages, educational guides, podcasts, and thought leadership that attract ready-to-buy prospects.',
      'Outbound Marketing accelerates pipeline velocity: Account-based advertising, high-precision paid social retargeting, and targeted direct outreach.',
      'When inbound nurtures the demand that outbound ignites, customer acquisition costs drop while lifetime value compounds.',
    ],
  },
  {
    id: 'diwali-sales',
    category: 'Marketing Tips',
    categoryTheme: 'pink',
    date: 'Oct 28, 2024',
    readTime: '5 min read',
    title: '15 Diwali Marketing Ideas To Drive Sales in 2025',
    subtitle: 'Light up your brand with winning festive marketing ideas.',
    gradientHeader: 'from-rose-500 via-purple-700 to-slate-950',
    content: [
      'Festive shopping in India is characterized by cultural emotion, family bonding, and high purchase propensity. To win during Diwali, brands must cut through the crowded promotional noise.',
      '1. Early Bird Secret VIP Access: Gamified early access passes to high-intent shoppers.',
      '2. Regional Vernacular Ad Creatives: Crafting localized Tamil and South Indian festive creatives that honor regional nuances.',
      '3. WhatsApp Flash Commerce: Interactive WhatsApp product catalogs offering instant click-to-buy checkout discounts.',
      '4. Post-Diwali Retention: Leveraging seasonal first-time buyers with targeted loyalty nurture sequences.',
    ],
  },
  {
    id: 'chennai-local-seo',
    category: 'SEO & Search',
    categoryTheme: 'purple',
    date: 'Feb 02, 2025',
    readTime: '6 min read',
    title: 'Top Local SEO Strategies for Chennai Businesses',
    subtitle: 'Dominate Google Maps and high-intent local search queries in Tamil Nadu.',
    gradientHeader: 'from-violet-600 via-indigo-800 to-slate-950',
    content: [
      'Local search has transformed from simple map pins to complex geo-targeted ranking algorithms. If your Chennai business is not ranking in the top 3 map pack, you are leaving high-margin revenue on the table.',
      'Key local ranking factors include geo-tagged media assets, localized review sentiment, proximity-weighted citations, and Tamil language semantic keyword mapping.',
    ],
  },
  {
    id: 'ai-driven-marketing',
    category: 'AI & Automation',
    categoryTheme: 'amber',
    date: 'Feb 18, 2025',
    readTime: '4 min read',
    title: 'How AI-Driven Marketing is Revolutionizing ROAS',
    subtitle: 'Leverage predictive customer intelligence and automated bidding algorithms.',
    gradientHeader: 'from-amber-500 via-orange-600 to-slate-950',
    content: [
      'Artificial intelligence in digital advertising is no longer experimental—it is the baseline for competitive survival.',
      'From dynamic creative optimization (DCO) that generates thousands of ad permutations in real time to predictive audience lifetime value modeling, AI allows agencies to scale returns without scaling ad waste.',
    ],
  },
];

interface BlogSectionProps {
  onScheduleCallClick?: () => void;
}

export function BlogSection({ onScheduleCallClick }: BlogSectionProps) {
  // Center active index in our circular carousel
  const [activeCenterIndex, setActiveCenterIndex] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const totalPosts = BLOG_POSTS.length;

  const handlePrev = () => {
    setActiveCenterIndex((prev) => (prev - 1 + totalPosts) % totalPosts);
  };

  const handleNext = () => {
    setActiveCenterIndex((prev) => (prev + 1) % totalPosts);
  };

  // Get 3 visible cards: Left, Center (active), Right
  const leftIndex = (activeCenterIndex - 1 + totalPosts) % totalPosts;
  const centerIndex = activeCenterIndex;
  const rightIndex = (activeCenterIndex + 1) % totalPosts;

  const leftPost = BLOG_POSTS[leftIndex];
  const centerPost = BLOG_POSTS[centerIndex];
  const rightPost = BLOG_POSTS[rightIndex];

  return (
    <section
      id="blog"
      className="relative w-full min-h-screen bg-[#000000] text-white font-['DM_Sans'] py-24 sm:py-32 md:py-36 overflow-hidden border-t border-neutral-900 select-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        
        {/* 1. SECTION HEADER - 50/50 Left & Right Split Animation */}
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-12 sm:mb-16">
          {/* Left 50%: Tag and Title Prefix coming from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left flex-1"
          >
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-8 h-[1.5px] bg-blue-500" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60">
                OUR BLOGS
              </span>
              <span className="w-8 h-[1.5px] bg-blue-500" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Latest Blogs &amp; <span className="text-[#0074FF]">Insights</span>
            </h2>
          </motion.div>

          {/* Right 50%: Subtitle & Reading Guide coming from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-right flex-1"
          >
            <p className="text-xs sm:text-sm text-white/70 max-w-md md:ml-auto font-normal">
              Fresh strategic thinking on AI automation, organic search dominance, and digital growth from the Clicktots editorial team.
            </p>
          </motion.div>
        </div>

        {/* 2. THREE-CARD CROSSLY TILTED CURVED CAROUSEL */}
        <div className="relative w-full max-w-6xl mx-auto py-6 sm:py-10">
          
          {/* Subtle ambient back glow behind center card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Cards Grid / Flex Container */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center z-10">
            
            {/* LEFT CARD (Crossly Tilted Counter-Clockwise - Coming from LEFT) */}
            <motion.div
              key={`left-${leftPost.id}`}
              initial={{ opacity: 0, x: -140, rotate: -12 }}
              whileInView={{ opacity: 0.85, x: 0, rotate: -6, y: 24 }}
              viewport={{ once: true, amount: 0.2 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPost(leftPost)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/15 bg-neutral-950/80 backdrop-blur-2xl shadow-[0_15px_45px_rgba(0,0,0,0.85)] hover:border-white/35 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Header Visual Gradient Box with Curved Wave Geometry */}
              <div className={`relative h-44 sm:h-48 w-full bg-gradient-to-br ${leftPost.gradientHeader} p-5 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60" />
                <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full border border-white/20 bg-white/5 pointer-events-none" />
                
                {/* Category Pill */}
                <div className="relative z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold shadow-md">
                    {leftPost.category}
                  </span>
                </div>
              </div>

              {/* Card Body - Pure Glass Based */}
              <div className="p-6 sm:p-7 space-y-3 bg-neutral-950/90">
                <div className="flex items-center gap-1.5 text-xs text-white/50">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{leftPost.date}</span>
                  <span>•</span>
                  <span>{leftPost.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                  {leftPost.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/65 leading-relaxed line-clamp-2 font-normal">
                  {leftPost.subtitle}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CENTER CARD (Upright, Prominent, Elevated) */}
            <motion.div
              key={`center-${centerPost.id}`}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1.05, rotate: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedPost(centerPost)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-blue-500/40 bg-neutral-950/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,116,255,0.25)] hover:border-blue-400 transition-all duration-300 z-20"
            >
              {/* Header Visual with Compass/Click Graphic from reference */}
              <div className={`relative h-48 sm:h-52 w-full bg-gradient-to-br ${centerPost.gradientHeader} p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent" />
                
                {/* Pointer / Compass Emblem from reference image */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-amber-400/80 flex items-center justify-center bg-black/20 backdrop-blur-sm shadow-inner">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[14px] border-b-blue-400 transform -rotate-45" />
                </div>

                {/* Category Pill */}
                <div className="relative z-10">
                  <span className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold shadow-lg">
                    {centerPost.category}
                  </span>
                </div>
              </div>

              {/* Card Body - Pure Glass Based */}
              <div className="p-6 sm:p-7 space-y-3.5 bg-neutral-950">
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{centerPost.date}</span>
                  <span>•</span>
                  <span>{centerPost.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                  {centerPost.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  {centerPost.subtitle}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD (Crossly Tilted Clockwise - Coming from RIGHT) */}
            <motion.div
              key={`right-${rightPost.id}`}
              initial={{ opacity: 0, x: 140, rotate: 12 }}
              whileInView={{ opacity: 0.85, x: 0, rotate: 6, y: 24 }}
              viewport={{ once: true, amount: 0.2 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPost(rightPost)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/15 bg-neutral-950/80 backdrop-blur-2xl shadow-[0_15px_45px_rgba(0,0,0,0.85)] hover:border-white/35 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Header Visual Gradient Box with Curved Wave Geometry */}
              <div className={`relative h-44 sm:h-48 w-full bg-gradient-to-br ${rightPost.gradientHeader} p-5 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60" />
                <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full border border-white/20 bg-white/5 pointer-events-none" />

                {/* Category Pill */}
                <div className="relative z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold shadow-md">
                    {rightPost.category}
                  </span>
                </div>
              </div>

              {/* Card Body - Pure Glass Based */}
              <div className="p-6 sm:p-7 space-y-3 bg-neutral-950/90">
                <div className="flex items-center gap-1.5 text-xs text-white/50">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{rightPost.date}</span>
                  <span>•</span>
                  <span>{rightPost.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                  {rightPost.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/65 leading-relaxed line-clamp-2 font-normal">
                  {rightPost.subtitle}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* 3. DASHED CURVED ARC & CIRCULAR NAVIGATION BUTTONS (Exact Match with Reference) */}
          <div className="relative mt-8 sm:mt-12 flex items-center justify-between px-2 sm:px-6">
            {/* Dashed SVG Curve Path spanning under the 3 cards */}
            <svg
              className="absolute inset-x-0 -top-8 w-full h-16 pointer-events-none overflow-visible"
              viewBox="0 0 1000 60"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 45 Q 500 0 950 45"
                stroke="rgba(0, 116, 255, 0.45)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Left Circular Arrow Button */}
            <button
              onClick={handlePrev}
              className="relative z-10 w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 shadow-xl flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              aria-label="Previous Blog"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Center Slide Tracker Pill */}
            <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-white/15 text-xs font-mono text-white/70">
              <span className="text-blue-400 font-bold">{centerIndex + 1}</span>
              <span>/</span>
              <span>{totalPosts}</span>
            </div>

            {/* Right Circular Arrow Button (as requested: "i click the > it take to yo the next blog") */}
            <button
              onClick={handleNext}
              className="relative z-10 w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 shadow-xl flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              aria-label="Next Blog"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* FULL ARTICLE GLASS CARD READER MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-neutral-950 border border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 max-h-[85vh] flex flex-col text-white backdrop-blur-2xl"
            >
              {/* Modal Hero Header */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${selectedPost.gradientHeader} relative`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-white text-black text-xs font-bold">
                    {selectedPost.category}
                  </span>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 rounded-full bg-black/50 hover:bg-black text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  {selectedPost.title}
                </h3>
                <div className="flex items-center gap-2 mt-3 text-xs text-white/80">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              {/* Modal Body Copy */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-white/80 leading-relaxed font-normal">
                <p className="text-base text-white font-medium italic border-l-2 border-blue-500 pl-4 py-1">
                  "{selectedPost.subtitle}"
                </p>
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx} className="text-white/80">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Modal Bottom Action */}
              <div className="p-5 border-t border-white/10 bg-neutral-900/50 flex items-center justify-between">
                <span className="text-xs text-white/50">
                  Published by Clicktots Editorial Team
                </span>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    if (onScheduleCallClick) onScheduleCallClick();
                  }}
                  className="bg-white text-black font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Discuss with our Strategists
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
