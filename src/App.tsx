/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RailroadBanner } from './components/RailroadBanner';
import { ScrollSequenceHero } from './components/ScrollSequenceHero';
import { ServiceSection } from './components/ServiceSection';
import { ClientShowcaseSection } from './components/ClientShowcaseSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { ScheduleCallModal, ClientLead } from './components/ScheduleCallModal';
import { 
  Eye, 
  Code, 
  Copy, 
  Check, 
  Sliders, 
  Download, 
  Minimize2, 
  Users, 
  Sparkles,
  Layers,
  ArrowDown
} from 'lucide-react';

export default function App() {
  const [distractedStyle, setDistractedStyle] = useState<'outlined' | 'solid' | 'gradient'>('outlined');
  const [bgShade, setBgShade] = useState<'pure-black' | 'deep-onyx'>('pure-black');
  const [logoBadge, setLogoBadge] = useState<'glow' | 'pill' | 'none'>('glow');
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonSection, setComparisonSection] = useState<'footer' | 'faqs' | 'blogs' | 'why-choose-us' | 'clients' | 'service' | 'hero'>('footer');
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showLeadsModal, setShowLeadsModal] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isFullBannerOnly, setIsFullBannerOnly] = useState(false);
  
  const [capturedLeads, setCapturedLeads] = useState<ClientLead[]>([
    {
      id: 'LEAD-884920',
      name: 'Priya Sundaram',
      email: 'priya@chennaiboutique.in',
      phone: '+91 94441 23456',
      company: 'Chennai Couture Studio',
      website: 'chennaiboutique.in',
      services: ['Social Media Marketing', 'Google & Meta Paid Ads'],
      budget: '₹50,000 - ₹1,50,000/mo',
      preferredTime: 'Tomorrow at 11:00 AM - 12:00 PM',
      message: 'Need help launching festive season campaigns and expanding our local Chennai reach.',
      createdAt: '10:45 AM',
    },
  ]);

  const handleLeadSubmitted = (lead: ClientLead) => {
    setCapturedLeads((prev) => [lead, ...prev]);
  };

  const reactCodeSnippet = `// Clicktots Technologies Landing Page - Pure Black with DM Sans
import React, { useState } from 'react';
import { RailroadBanner } from './components/RailroadBanner';
import { ServiceSection } from './components/ServiceSection';
import { ClientShowcaseSection } from './components/ClientShowcaseSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { ScheduleCallModal } from './components/ScheduleCallModal';

export default function ClicktotsLandingPage() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <div className="bg-black text-white font-['DM_Sans'] min-h-screen">
      {/* 1. Hero Banner */}
      <RailroadBanner 
        onScheduleCallClick={() => setIsScheduleOpen(true)}
      />

      {/* 2. Service Section with 8-Card Auto-Rotating Loop (4x4 Curved Layout) */}
      <ServiceSection 
        onBookMeetingClick={() => setIsScheduleOpen(true)}
      />

      {/* 3. Client Showcase Section (Motion Animation & Case Study Modal) */}
      <ClientShowcaseSection 
        onScheduleCallClick={() => setIsScheduleOpen(true)}
      />

      {/* 4. Why Choose Us Section (Staggered Award Photos & 15+ Years Legacy) */}
      <WhyChooseUsSection 
        onExploreMoreClick={() => setIsScheduleOpen(true)}
      />

      {/* 5. Latest Blogs & Insights (Tilted 3-Card Carousel & Article Modal) */}
      <BlogSection 
        onScheduleCallClick={() => setIsScheduleOpen(true)}
      />

      {/* 6. FAQ Section (Common Questions - 3D Glass Accordion) */}
      <FAQSection 
        onContactClick={() => setIsScheduleOpen(true)}
      />

      {/* 7. Footer Section (Clicktots Branding, 3-Column Nav & Animated Watermark) */}
      <FooterSection 
        onScheduleCallClick={() => setIsScheduleOpen(true)}
      />

      {/* Discovery Booking Modal */}
      <ScheduleCallModal 
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </div>
  );
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(reactCodeSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-['DM_Sans'] antialiased selection:bg-white/20 selection:text-white">
      {/* ===== SECTION 1: SCROLL-DRIVEN CINEMATIC HERO ===== */}
      {/* This section takes 500vh of scroll space. As the user scrolls,
          the background plays 299 cinematic frames (train → clouds → earth from space)
          while hero text ("Creativity Starts with a Click") animates in progressively. */}
      <ScrollSequenceHero 
        distractedStyle={distractedStyle} 
        bgShade={bgShade}
        logoBadge={logoBadge}
        onScheduleCallClick={() => setIsScheduleModalOpen(true)}
      />

      {/* ===== STACKING LAYER SECTIONS =====
          Each section below slides UP over the previous one like stacking cards.
          - position: sticky keeps each section pinned at top
          - z-index increases so each new section covers the previous 
          - Each section has a subtle shadow to create depth/layering
          - Rounded top corners give the "card sliding up" feel
      */}

      {/* SECTION 2: SERVICE SECTION - First layer slides up over hero */}
      <div 
        className="relative w-full" 
        style={{ zIndex: 10 }}
      >
        <div 
          className="sticky top-0 w-full bg-[#000000] rounded-t-[2rem] sm:rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
          style={{ 
            willChange: 'transform',
          }}
        >
          {/* Subtle top edge highlight for depth */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-[2rem] sm:rounded-t-[2.5rem]" />
          <ServiceSection 
            onBookMeetingClick={() => setIsScheduleModalOpen(true)}
            onSeeProjectsClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>

      {/* SECTION 3: CLIENT SHOWCASE - Slides up over Services */}
      <div 
        className="relative w-full" 
        style={{ zIndex: 20 }}
      >
        <div 
          className="sticky top-0 w-full bg-[#050505] rounded-t-[2rem] sm:rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
          style={{ willChange: 'transform' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/12 to-transparent rounded-t-[2rem] sm:rounded-t-[2.5rem]" />
          <ClientShowcaseSection 
            onScheduleCallClick={() => setIsScheduleModalOpen(true)}
          />
        </div>
      </div>

      {/* SECTION 4: WHY CHOOSE US - Slides up over Client Showcase */}
      <div 
        className="relative w-full" 
        style={{ zIndex: 30 }}
      >
        <div 
          className="sticky top-0 w-full bg-[#000000] rounded-t-[2rem] sm:rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
          style={{ willChange: 'transform' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-[2rem] sm:rounded-t-[2.5rem]" />
          <WhyChooseUsSection 
            onExploreMoreClick={() => setIsScheduleModalOpen(true)}
          />
        </div>
      </div>

      {/* SECTION 5: BLOG SECTION - Slides up over Why Choose Us */}
      <div 
        className="relative w-full" 
        style={{ zIndex: 40 }}
      >
        <div 
          className="sticky top-0 w-full bg-[#050505] rounded-t-[2rem] sm:rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
          style={{ willChange: 'transform' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-[2rem] sm:rounded-t-[2.5rem]" />
          <BlogSection 
            onScheduleCallClick={() => setIsScheduleModalOpen(true)}
          />
        </div>
      </div>

      {/* SECTION 6: FAQ SECTION - Slides up over Blog */}
      <div 
        className="relative w-full" 
        style={{ zIndex: 50 }}
      >
        <div 
          className="sticky top-0 w-full bg-[#000000] rounded-t-[2rem] sm:rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
          style={{ willChange: 'transform' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent rounded-t-[2rem] sm:rounded-t-[2.5rem]" />
          <FAQSection 
            onContactClick={() => setIsScheduleModalOpen(true)}
          />
        </div>
      </div>

      {/* SECTION 7: FOOTER - Final layer slides up over FAQ */}
      <div 
        className="relative w-full" 
        style={{ zIndex: 60 }}
      >
        <div 
          className="sticky top-0 w-full bg-[#050505] rounded-t-[2rem] sm:rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
          style={{ willChange: 'transform' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent rounded-t-[2rem] sm:rounded-t-[2.5rem]" />
          <FooterSection 
            onScheduleCallClick={() => setIsScheduleModalOpen(true)}
          />
        </div>
      </div>

      {/* SCHEDULE CALL MODAL (TRIGGERS FROM HERO CTA, SERVICES, CLIENT CASE STUDIES, BLOGS, FAQS & FOOTER) */}
      <ScheduleCallModal 
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        onLeadSubmitted={handleLeadSubmitted}
      />

      {/* SIDE-BY-SIDE / SPLIT COMPARISON OVERLAY MODAL */}
      {showComparison && (
        <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex flex-col p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/90">
                Visual Inspection
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-neutral-900 p-1 rounded-full border border-neutral-800 overflow-x-auto">
                <button
                  onClick={() => setComparisonSection('footer')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    comparisonSection === 'footer'
                      ? 'bg-white text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Footer (Screenshot_2026-11-01_003923_808c3458.png)
                </button>
                <button
                  onClick={() => setComparisonSection('faqs')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    comparisonSection === 'faqs'
                      ? 'bg-white text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  FAQs (image_bd35cf68.png)
                </button>
                <button
                  onClick={() => setComparisonSection('blogs')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    comparisonSection === 'blogs'
                      ? 'bg-white text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Blogs Section (Screenshot_2026-10-29_224819_9f223a57.png)
                </button>
                <button
                  onClick={() => setComparisonSection('why-choose-us')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    comparisonSection === 'why-choose-us'
                      ? 'bg-white text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Why Choose Us (image_793a2f13.png)
                </button>
                <button
                  onClick={() => setComparisonSection('clients')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    comparisonSection === 'clients'
                      ? 'bg-white text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Clients Section (image_e79fc8ac.png)
                </button>
                <button
                  onClick={() => setComparisonSection('service')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    comparisonSection === 'service'
                      ? 'bg-white text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Our Services (image_1729f8de.png)
                </button>
                <button
                  onClick={() => setComparisonSection('hero')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    comparisonSection === 'hero'
                      ? 'bg-white text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Hero Banner (Sample_df671ce5.jpg)
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowComparison(false)}
              className="text-xs sm:text-sm px-4 py-1.5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Close Comparison
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 overflow-auto">
            {/* Reference Image */}
            <div className="flex flex-col bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
              <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  {comparisonSection === 'footer'
                    ? 'Reference Image: Footer Design (Driftbar Layout, 3 Columns & Watermark)'
                    : comparisonSection === 'faqs'
                    ? 'Reference Image: Common Questions FAQs (3D Glass Accordion)'
                    : comparisonSection === 'blogs'
                    ? 'Reference Image: Blogs & Insights (Tilted 3-Card Carousel)'
                    : comparisonSection === 'why-choose-us'
                    ? 'Reference Image: Why Choose Us (Staggered Card Collage)'
                    : comparisonSection === 'clients'
                    ? 'Reference Image: Client Showcase (The brands that bet on us)'
                    : comparisonSection === 'service'
                    ? 'Reference Image: Service Section (Curved Architecture Cards)'
                    : 'Reference Image: Hero Banner (Train View)'}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">
                  {comparisonSection === 'footer'
                    ? 'Screenshot_2026-11-01_003923_808c3458.png'
                    : comparisonSection === 'faqs'
                    ? 'image_bd35cf68.png'
                    : comparisonSection === 'blogs'
                    ? 'Screenshot_2026-10-29_224819_9f223a57.png'
                    : comparisonSection === 'why-choose-us'
                    ? 'image_793a2f13.png'
                    : comparisonSection === 'clients'
                    ? 'image_e79fc8ac.png'
                    : comparisonSection === 'service'
                    ? 'image_1729f8de.png'
                    : 'Sample_df671ce5.jpg'}
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center p-4 bg-black">
                <img
                  src={
                    comparisonSection === 'footer'
                      ? '/assets/aistudio/Screenshot_2026-11-01_003923_808c3458.png'
                      : comparisonSection === 'faqs'
                      ? '/assets/aistudio/image_bd35cf68.png'
                      : comparisonSection === 'blogs'
                      ? '/assets/aistudio/Screenshot_2026-10-29_224819_9f223a57.png'
                      : comparisonSection === 'why-choose-us'
                      ? '/assets/aistudio/image_793a2f13.png'
                      : comparisonSection === 'clients'
                      ? '/assets/aistudio/image_e79fc8ac.png'
                      : comparisonSection === 'service'
                      ? '/assets/aistudio/image_1729f8de.png'
                      : '/assets/aistudio/Sample_df671ce5.jpg'
                  }
                  alt="Reference Design"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Regenerated Version */}
            <div className="flex flex-col bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
              <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  {comparisonSection === 'footer'
                    ? 'Regenerated Footer (Plane Black, Clicktots Brand & Animated Watermark)'
                    : comparisonSection === 'faqs'
                    ? 'Regenerated FAQs Section (010 • FAQS, 3D Glass Cards, Smooth Accordion)'
                    : comparisonSection === 'blogs'
                    ? 'Regenerated Blogs Section (Crossly Tilted Cards, Dashed Arc & Next/Prev)'
                    : comparisonSection === 'why-choose-us'
                    ? 'Regenerated Why Choose Us (Award Photos, 15+ Years Legacy)'
                    : comparisonSection === 'clients'
                    ? 'Regenerated Client Showcase (4 Clients, Motion Animation)'
                    : comparisonSection === 'service'
                    ? 'Regenerated Service Section (8-Card Auto Loop, Plane Black)'
                    : 'Regenerated Hero Banner (Clicktots Logo, Plane Black)'}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">Pixel-Matched & Interactive</span>
              </div>
              <div className="flex-1 overflow-auto bg-black p-4 flex items-center justify-center">
                {comparisonSection === 'footer' ? (
                  <div className="w-full transform scale-90 origin-top">
                    <FooterSection />
                  </div>
                ) : comparisonSection === 'faqs' ? (
                  <div className="w-full transform scale-90 origin-top">
                    <FAQSection />
                  </div>
                ) : comparisonSection === 'blogs' ? (
                  <div className="w-full transform scale-90 origin-top">
                    <BlogSection />
                  </div>
                ) : comparisonSection === 'why-choose-us' ? (
                  <div className="w-full transform scale-90 origin-top">
                    <WhyChooseUsSection />
                  </div>
                ) : comparisonSection === 'clients' ? (
                  <div className="w-full transform scale-90 origin-top">
                    <ClientShowcaseSection />
                  </div>
                ) : comparisonSection === 'service' ? (
                  <div className="w-full transform scale-90 origin-top">
                    <ServiceSection />
                  </div>
                ) : (
                  <div className="w-full transform scale-90 origin-top">
                    <RailroadBanner distractedStyle={distractedStyle} bgShade={bgShade} logoBadge={logoBadge} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CODE EXPORT MODAL */}
      {showCodeModal && (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium text-white">Full Landing Page React Code</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Hero Banner + Services + Clients + Why Choose Us + Blogs</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {isCopied ? 'Copied!' : 'Copy Code'}
                </button>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-white/80 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
            <pre className="flex-1 overflow-auto p-6 text-xs font-mono text-neutral-300 bg-neutral-900/60 leading-relaxed">
              <code>{reactCodeSnippet}</code>
            </pre>
          </div>
        </div>
      )}

      {/* LEADS VIEWER MODAL */}
      {showLeadsModal && (
        <div className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-1">
                  <Users className="w-3 h-3" />
                  <span>Client Information Inbox</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Scheduled Discovery Calls</h3>
              </div>
              <button
                onClick={() => setShowLeadsModal(false)}
                className="px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs text-white/80 cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {capturedLeads.map((lead) => (
                <div key={lead.id} className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-4 sm:p-5 text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                    <div>
                      <h4 className="text-sm font-semibold text-white">{lead.name}</h4>
                      <p className="text-neutral-400">{lead.company} {lead.website && `• ${lead.website}`}</p>
                    </div>
                    <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                      {lead.id}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-300">
                    <div>📧 {lead.email}</div>
                    <div>📱 {lead.phone}</div>
                    <div>⏰ {lead.preferredTime}</div>
                    <div>💰 Budget: {lead.budget}</div>
                  </div>
                  <div>
                    <span className="text-neutral-400 block mb-1">Services:</span>
                    <div className="flex flex-wrap gap-1">
                      {lead.services.map((s) => (
                        <span key={s} className="bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded text-[10px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  {lead.message && (
                    <div className="bg-black/40 p-2.5 rounded-lg text-neutral-400 italic">
                      "{lead.message}"
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SLEEK COLLAPSIBLE FLOATING TOOLBAR */}
      {!isFullBannerOnly ? (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center">
          <div className="bg-neutral-950/95 border border-neutral-800/90 backdrop-blur-xl rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.8)] p-1.5 px-3 sm:px-4 flex items-center gap-2 sm:gap-3 text-xs">
            {/* Compare Reference */}
            <button
              onClick={() => setShowComparison(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all cursor-pointer whitespace-nowrap"
              title="Compare layout with original references"
            >
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span>Compare References</span>
            </button>

            <div className="h-4 w-[1px] bg-neutral-800" />

            {/* View Leads */}
            <button
              onClick={() => setShowLeadsModal(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer text-[11px]"
              title="View Client Information Captured via Schedule Call"
            >
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Leads ({capturedLeads.length})</span>
            </button>

            <div className="hidden sm:block h-4 w-[1px] bg-neutral-800" />

            {/* Quick Export Code */}
            <button
              onClick={() => setShowCodeModal(true)}
              className="hidden sm:flex p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="View React Component Code"
            >
              <Code className="w-4 h-4" />
            </button>

            <div className="h-4 w-[1px] bg-neutral-800" />

            {/* Hide controls to view 100% clean full landing page */}
            <button
              onClick={() => setIsFullBannerOnly(true)}
              className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Hide toolbar (Full clean presentation mode)"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Floating mini restore icon */
        <button
          onClick={() => setIsFullBannerOnly(false)}
          className="fixed bottom-5 right-5 z-[100] p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 backdrop-blur-md shadow-xl transition-all cursor-pointer"
          title="Show Tools & Inspection"
        >
          <Sliders className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
