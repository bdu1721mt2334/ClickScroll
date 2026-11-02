import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight, Sparkles } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answerParagraphs: string[];
  tag?: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'What industries do you work with?',
    tag: 'Clients & Verticals',
    answerParagraphs: [
      'We work across a diverse spectrum of high-growth industries including manufacturing, steel & industrial goods (e.g. SSI TMT Bars), FMCG & packaged food brands (e.g. Anil Foods), educational institutions & competitive training academies (e.g. King Makers IAS Academy), legal & corporate consulting firms (e.g. Manu Mathew), retail boutiques, healthcare clinics, and B2B SaaS platforms.',
      'Our team tailors creative strategies, customized full-funnel digital marketing, AI automation pipelines, and high-converting web architecture specifically matched to each sector\'s unique customer journey.'
    ]
  },
  {
    id: 2,
    question: 'How long does implementation take?',
    tag: 'Timelines & Delivery',
    answerParagraphs: [
      'Project timelines typically range from 2 to 6 weeks, depending on complexity. Smaller automation systems — such as AI chatbots with CRM integration — can often be deployed within 2–3 weeks.',
      'More advanced projects involving multi-platform integrations, custom AI logic, internal workflow automation, and reporting dashboards may take 4–6 weeks or longer.'
    ]
  },
  {
    id: 3,
    question: 'Do we need technical knowledge to work with you?',
    tag: 'Collaboration',
    answerParagraphs: [
      'Not at all. We handle the entire engineering, strategy, design, and deployment lifecycle from end to end. You and your team only need to share your business goals, target audience, and current operational workflows.',
      'We build intuitive, zero-code administrative interfaces, provide recorded video walkthroughs, and deliver hands-on team onboarding with 24/7 dedicated account support.'
    ]
  },
  {
    id: 4,
    question: 'Is AI automation secure?',
    tag: 'Security & Compliance',
    answerParagraphs: [
      'Security and data privacy are our foundational principles. All solutions are architected using enterprise-grade end-to-end encryption (AES-256), SOC-2 compliant cloud infrastructure, and role-based permissions.',
      'Crucially, your proprietary customer data, confidential business logic, and private internal records are never used to train public foundational AI models.'
    ]
  },
  {
    id: 5,
    question: 'What kind of ROI can we expect?',
    tag: 'Performance & Growth',
    answerParagraphs: [
      'Most of our clients experience tangible, measurable business growth within the first 30 to 90 days. Depending on the engagement scope, typical benchmarks include a 40–70% reduction in manual operational hours, 3x–5x higher qualified customer leads, and significantly improved customer acquisition cost (CAC).',
      'We establish clear KPI tracking dashboards before launch so you can track real-time pipeline velocity and campaign revenue.'
    ]
  }
];

interface FAQSectionProps {
  onContactClick?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  // Item 2 is open by default as shown in the reference image
  const [openId, setOpenId] = useState<number | null>(2);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="faqs" 
      className="relative w-full bg-black text-white font-['DM_Sans'] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* TOP SECTION HEADER WITH 50/50 LEFT & RIGHT SPLIT ANIMATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 sm:mb-16">
          {/* Left 50%: Top Pill Tag & Main Heading coming from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-center sm:text-left flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-700/70 bg-neutral-900/60 backdrop-blur-xl shadow-inner mb-3">
              <span className="text-[11px] font-mono tracking-widest text-neutral-300 font-medium uppercase">
                010 &bull; FAQS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Common Questions
            </h2>
          </motion.div>

          {/* Right 50%: Subtitle coming from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center sm:text-right flex-1"
          >
            <p className="text-sm sm:text-base text-neutral-400 max-w-md sm:ml-auto font-normal">
              Everything you need to know about our digital marketing, creative strategy, and bespoke AI implementation.
            </p>
          </motion.div>
        </div>

        {/* ACCORDION CARDS CONTAINER WITH 50/50 SPLIT ENTRANCE */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQS_DATA.map((item, index) => {
            const isOpen = openId === item.id;
            const isLeft = index % 2 === 0; // Alternating 50% left & 50% right

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -110 : 110 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.07, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`relative rounded-3xl transition-all duration-300 ${
                  isOpen
                    ? 'p-[1.5px] bg-gradient-to-r from-blue-400/50 via-purple-400/40 to-cyan-300/50 shadow-[0_10px_35px_rgba(59,130,246,0.12)]'
                    : 'border border-white/10 hover:border-white/25 bg-neutral-900/40 hover:bg-neutral-900/70 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Glass Inner Card */}
                <div 
                  className={`w-full rounded-[23px] backdrop-blur-2xl transition-colors duration-300 ${
                    isOpen 
                      ? 'bg-neutral-950/95 p-6 sm:p-8' 
                      : 'bg-neutral-950/70 p-4 sm:p-5 sm:px-6'
                  }`}
                >
                  {/* Card Header (Clickable Trigger) */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
                      {/* Number Indicator: 1, 2, 3, 4, 5 */}
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-colors shrink-0 ${
                        isOpen 
                          ? 'bg-blue-500/15 text-blue-300 border border-blue-400/30' 
                          : 'bg-neutral-900 text-neutral-400 border border-white/10 group-hover:text-white group-hover:border-white/20'
                      }`}>
                        {item.id}
                      </span>

                      {/* Question Text */}
                      <span className={`text-base sm:text-lg md:text-xl font-medium tracking-tight transition-colors line-clamp-2 ${
                        isOpen ? 'text-white font-semibold' : 'text-neutral-200 group-hover:text-white'
                      }`}>
                        {item.question}
                      </span>
                    </div>

                    {/* Circular Action Toggle Button (+ or ×) */}
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-blue-500/10 text-blue-300 border border-blue-400/40 rotate-90 scale-105'
                        : 'bg-neutral-900 text-white/70 border border-white/15 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/30'
                    }`}>
                      {isOpen ? (
                        <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      )}
                    </div>
                  </button>

                  {/* Smooth Animated Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: 'auto',
                          transition: { 
                            height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.25, delay: 0.08 }
                          }
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          transition: { 
                            height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.15 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 sm:pt-6 pl-10 sm:pl-13 pr-2 sm:pr-8 space-y-3.5 border-t border-white/10 mt-5">
                          {item.answerParagraphs.map((paragraph, pIdx) => (
                            <p 
                              key={pIdx} 
                              className="text-neutral-300 text-sm sm:text-[15px] leading-relaxed font-normal"
                            >
                              {paragraph}
                            </p>
                          ))}
                          
                          {/* Quick Inquiry Prompt */}
                          <div className="pt-2 flex items-center justify-between text-xs text-neutral-400">
                            <span className="flex items-center gap-1.5 text-neutral-400">
                              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                              Customized for Chennai & global enterprises
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onContactClick) onContactClick();
                              }}
                              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
                            >
                              <span>Ask our experts</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION: 50/50 Left & Right Split */}
        <div className="mt-14 sm:mt-18 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-400 text-sm sm:text-base"
          >
            Have any other questions?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-all cursor-pointer group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};
