import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUp, Sparkles, Heart, PhoneCall, ExternalLink, ShieldCheck } from 'lucide-react';
import { ClicktotsLogo } from './RailroadBanner';

interface FooterSectionProps {
  onScheduleCallClick?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onScheduleCallClick }) => {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuLinks = [
    { name: 'Tour', href: '#services' },
    { name: 'Showcase', href: '#clients' },
    { name: 'Q&A', href: '#faqs' },
    { name: 'Licence', href: '#about-us' },
    { name: 'Journal', href: '#blog' }
  ];

  const essentialsLinks = [
    { name: 'Support', href: '#faqs' },
    { name: 'Up next', href: '#services' },
    { name: 'Privacy notice', href: '#' },
    { name: 'Usage guidelines', href: '#' },
    { name: 'Manage licences', href: '#' }
  ];

  const teamProducts = [
    { name: 'Clipnest.io', href: 'https://clipnest.io' },
    { name: 'Tallyo.io', href: 'https://tallyo.io' },
    { name: 'Pinwell.io', href: 'https://pinwell.io' },
    { name: 'Glyfo.co', href: 'https://glyfo.co' },
    { name: 'Shelfmark.app', href: 'https://shelfmark.app' },
    { name: 'Wireloom.com', href: 'https://wireloom.com' },
    { name: 'Gridcraft.app', href: 'https://gridcraft.app' }
  ];

  const clicktotsLetters = ['C', 'l', 'i', 'c', 'k', 't', 'o', 't', 's'];

  return (
    <footer className="relative w-full bg-black text-white font-['DM_Sans'] pt-14 pb-8 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden select-none border-t border-white/5">
      
      {/* TOP ROW: Circular back-to-top button matching reference top-left circular arrow button */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-12 sm:mb-16">
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="w-12 h-12 rounded-full bg-[#1b1b1e] hover:bg-[#28282d] border border-white/10 flex items-center justify-center text-white/90 hover:text-white transition-all duration-300 shadow-lg cursor-pointer group hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <span className="text-xs text-neutral-500 font-mono tracking-wider hidden sm:inline-block">
          CLICKTOTS &bull; CHENNAI &bull; EST. 2011
        </span>
      </div>

      {/* MAIN FOOTER GRID: 50/50 Left & Right Split Animation */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
        
        {/* LEFT 50% COLUMN: Brand, Title, Description, CTA, Copyright, Built With, Status Pills (coming from LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col space-y-5"
        >
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="bg-white/5 border border-white/10 p-1.5 rounded-xl backdrop-blur-md">
              <ClicktotsLogo className="h-7 sm:h-8" badge="none" />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white">
              Clicktots
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
            Creativity Starts with a Click
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-neutral-400 leading-relaxed max-w-md font-normal">
            Creative strategies, powerful digital solutions and result-driven marketing to help your brand grow faster, reach wider and achieve more.
          </p>

          {/* Action Button: Styled like reference "[ Get Driftbar today]" */}
          <div className="pt-2">
            <button
              onClick={onScheduleCallClick}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-black border border-white/20 hover:border-white/50 text-sm font-medium text-white transition-all shadow-[0_2px_15px_rgba(255,255,255,0.06)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>Talk to Us today</span>
            </button>
          </div>

          {/* Copyright line */}
          <p className="text-xs text-neutral-500 font-normal pt-2">
            &copy; 2026 Clicktots Technologies Pvt. Ltd. - Made in Chennai.
          </p>

          {/* Built by line: Matching reference "Built with 💙 by Mira Okafor" */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Built with</span>
            <span className="text-blue-400">💙</span>
            <span>by</span>
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-300 border border-white/20 flex items-center justify-center text-[10px] font-bold text-black">
              C
            </div>
            <span className="text-neutral-200 font-medium">Clicktots Team</span>
          </div>

          {/* 3 Status badges / pills: Matching reference green dot status, version, star rating */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
            {/* Pill 1: Live Status */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>15+ Years in Chennai</span>
            </div>

            {/* Pill 2: Service Shipped / Updated */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300">
              <span className="text-neutral-500">&#8635;</span>
              <span>360&deg; Full Advertising</span>
            </div>

            {/* Pill 3: Rating */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300">
              <span className="text-amber-400">&star;</span>
              <span>Rated 4.9 avg</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT 50% COLUMNS: Menu, Essentials, From our team (coming from RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-4 lg:pt-2"
        >
          {/* Column 1: Menu */}
          <div className="flex flex-col space-y-3.5">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Menu
            </h4>
            <ul className="space-y-2.5 text-sm">
              {menuLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Essentials */}
          <div className="flex flex-col space-y-3.5">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Essentials
            </h4>
            <ul className="space-y-2.5 text-sm">
              {essentialsLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: From our team */}
          <div className="flex flex-col space-y-3.5 col-span-2 sm:col-span-1">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              From our team
            </h4>
            <ul className="space-y-2.5 text-sm">
              {teamProducts.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center justify-between group py-0.5"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity text-neutral-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>

      {/* MASSIVE BOTTOM LOGO WATERMARK WITH BACKGROUND SUITABLE ANIMATION */}
      {/* User request: "instead of that that driftbar add our cicktots logo with background suitable animation" */}
      <div className="relative w-full mt-20 sm:mt-28 pt-8 overflow-hidden flex flex-col items-center justify-center">
        
        {/* Animated Background Ambient Glow & Light Beams */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {/* Subtle pulsating aurora rays */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[450px] sm:w-[700px] h-[160px] rounded-full bg-gradient-to-r from-orange-500/25 via-blue-500/20 to-purple-500/25 blur-3xl"
          />

          {/* Slow drift particles */}
          <motion.div
            animate={{
              x: [-40, 40, -40],
              y: [-10, 10, -10]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-72 h-36 bg-blue-400/10 rounded-full blur-2xl"
          />
        </div>

        {/* Floating Interactive Badge with Official Clicktots Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-4 flex items-center justify-center"
        >
          <div className="px-5 py-2.5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex items-center gap-3 group hover:border-orange-500/40 transition-all duration-300">
            <img 
              src="/assets/aistudio/clicktots-logo-removebg-preview_a0828184.png"
              alt="Clicktots Logo"
              className="h-7 sm:h-9 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,165,0,0.4)]"
            />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-300 uppercase font-mono">
              Clicktots Technologies
            </span>
          </div>
        </motion.div>

        {/* GIGANTIC WATERMARK TYPOGRAPHY: "Clicktots" with Shimmer Animation */}
        <div className="relative w-full flex items-center justify-center select-none overflow-hidden pb-4">
          <div className="flex items-center justify-center tracking-tighter font-extrabold text-[16vw] sm:text-[18vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/35 via-white/10 to-transparent">
            {clicktotsLetters.map((char, index) => (
              <motion.span
                key={index}
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
                animate={{
                  y: hoveredLetter === index ? -12 : [0, -3, 0],
                  color: hoveredLetter === index ? 'rgba(255, 255, 255, 0.75)' : undefined
                }}
                transition={{
                  y: {
                    duration: 3 + index * 0.2,
                    repeat: hoveredLetter === index ? 0 : Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="cursor-default transition-all duration-200 hover:text-white/60 inline-block drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Bottom Gradient Fade to Pure Black (creating the mist-like floor fade seen in reference) */}
          <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        {/* Subtle subline beneath the huge logo */}
        <div className="relative z-10 -mt-6 sm:-mt-8 text-center text-xs text-neutral-500 font-mono tracking-widest uppercase">
          Digital Marketing &bull; Creative Studio &bull; Chennai
        </div>

      </div>

    </footer>
  );
};
