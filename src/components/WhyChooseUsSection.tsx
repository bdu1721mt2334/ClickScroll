import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  TrendingUp, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Target,
  Zap,
  Globe2
} from 'lucide-react';

interface WhyChooseUsSectionProps {
  onExploreMoreClick?: () => void;
}

export function WhyChooseUsSection({ onExploreMoreClick }: WhyChooseUsSectionProps) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const keyStrengths = [
    {
      icon: ShieldCheck,
      title: '15+ Years Old Legacy',
      description: 'Pioneering digital excellence since 2011 with deep market wisdom across Tamil Nadu and pan-India.',
    },
    {
      icon: Target,
      title: 'Best Digital Marketing in Chennai',
      description: 'Consistently trusted by top brands for unmatched ROI, local search dominance, and business growth.',
    },
    {
      icon: Globe2,
      title: '360-Degree Advertising',
      description: 'Seamless full-funnel solutions combining performance ads, SEO, viral video, web development, and outdoor media.',
    },
    {
      icon: Award,
      title: 'Award-Winning Leadership',
      description: 'Honored with prestigious accolades including Outstanding Woman Entrepreneur in Digital Marketing & Advertising.',
    },
  ];

  return (
    <section
      id="about-us"
      className="relative w-full min-h-screen bg-[#000000] text-white font-['DM_Sans'] py-24 sm:py-32 md:py-40 overflow-hidden border-t border-neutral-900"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Main Grid: Left Photos (animating Left-to-Right) & Right Text (animating Right-to-Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: 2 STAGGERED AWARD PHOTOS + METRIC BADGES (Motion: Left-to-Right) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full"
          >
            {/* Background ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative grid grid-cols-12 gap-4 sm:gap-6 items-center">
              
              {/* FLOATING TOP STAT CARD (Above Photo 2) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-8 col-start-4 sm:col-span-7 sm:col-start-5 z-20 -mb-6 sm:-mb-8"
              >
                <div className="bg-neutral-900/90 border border-white/20 rounded-2xl p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">15+ Years</span>
                      <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-400">
                        <TrendingUp className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/60 mt-1 leading-tight">
                      360° Advertising &amp; 500+ Brands Scaled Across Chennai
                    </p>
                  </div>
                  <div className="hidden sm:flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-blue-600 border border-black flex items-center justify-center text-[10px] font-bold">CT</div>
                    <div className="w-7 h-7 rounded-full bg-orange-500 border border-black flex items-center justify-center text-[10px] font-bold">15</div>
                    <div className="w-7 h-7 rounded-full bg-emerald-600 border border-black flex items-center justify-center text-[10px]">★</div>
                  </div>
                </div>
              </motion.div>

              {/* PHOTO 1: LEFT AWARD CEREMONY IMAGE */}
              <div className="col-span-6 relative z-10">
                <div
                  onClick={() => setActivePhoto('/assets/aistudio/Award_1_f602020f.jpg')}
                  className="group relative h-[270px] sm:h-[340px] md:h-[390px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/20 hover:border-white/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-neutral-900"
                >
                  <img
                    src="/assets/aistudio/Award_1_f602020f.jpg"
                    alt="Outstanding Woman Entrepreneur in Digital Marketing Award"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100"
                  />
                  {/* Glass gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/20 text-[11px] font-medium text-white/90 backdrop-blur-md">
                      <Trophy className="w-3 h-3 text-amber-400" />
                      <span>Industry Award</span>
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-4 z-10 bg-gradient-to-t from-black via-black/90 to-transparent pt-6">
                    <p className="text-xs font-semibold text-white leading-tight">
                      Outstanding Woman Entrepreneur
                    </p>
                    <span className="text-[10px] text-white/60 block mt-0.5">
                      Digital Marketing &amp; Advertising
                    </span>
                  </div>
                </div>

                {/* FLOATING BOTTOM RATING BADGE */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-3 bg-neutral-900/90 border border-white/20 rounded-2xl p-3 shadow-xl backdrop-blur-xl text-center"
                >
                  <span className="text-[11px] font-semibold text-white/90 block">Best Agency in Chennai</span>
                  <div className="flex items-center justify-center gap-1 mt-1 text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-white text-[11px] font-bold ml-1">5.0</span>
                  </div>
                </motion.div>
              </div>

              {/* PHOTO 2: RIGHT STAGGERED AWARD STAGE PHOTO */}
              <div className="col-span-6 relative z-10 pt-8 sm:pt-12">
                <div
                  onClick={() => setActivePhoto('/assets/aistudio/Award_2_8d04da01.jpg')}
                  className="group relative h-[270px] sm:h-[340px] md:h-[390px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/20 hover:border-white/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-neutral-900"
                >
                  <img
                    src="/assets/aistudio/Award_2_8d04da01.jpg"
                    alt="Receiving Award Certificate & Trophy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100"
                  />
                  {/* Glass gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/20 text-[11px] font-medium text-white/90 backdrop-blur-md">
                      <Award className="w-3 h-3 text-orange-400" />
                      <span>Excellence</span>
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-4 z-10 bg-gradient-to-t from-black via-black/90 to-transparent pt-6">
                    <p className="text-xs font-semibold text-white leading-tight">
                      Leadership Recognized
                    </p>
                    <span className="text-[10px] text-white/60 block mt-0.5">
                      Founder, Clicktots Technologies
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: WHY CHOOSE US CONTENT (Motion: Right-to-Left) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7"
          >
            {/* Top Tag: Exactly as "A BIT" in reference */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 block mb-2">
                A BIT
              </span>
              {/* Main Heading: "WHY CHOOSE US" */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase">
                WHY CHOOSE US
              </h2>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="text-sm sm:text-base md:text-[17px] text-white/80 leading-relaxed font-normal">
              With over <span className="text-white font-semibold">15+ years of digital advertising excellence</span>, Clicktots Technologies is celebrated as the <span className="text-white font-semibold">best digital marketing company in Chennai</span>. We engineer high-ROI 360-degree marketing ecosystems—empowering brands from traditional retail to omnichannel dominance.
            </p>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {keyStrengths.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/25 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA Button: Exactly as purple pill in reference */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onExploreMoreClick}
                className="bg-white text-black font-bold text-xs sm:text-sm tracking-wide uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full hover:bg-neutral-200 transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(255,255,255,0.15)] active:scale-95 flex items-center gap-2"
              >
                <span>EXPLORE MORE</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Zoom for Award Photos */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-3xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/20 bg-neutral-950 p-2 shadow-2xl">
            <img
              src={activePhoto}
              alt="Enlarged Award Photo"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-full border border-white/20 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
