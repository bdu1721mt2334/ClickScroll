import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Calendar, PhoneCall, MapPin } from 'lucide-react';
import { ClicktotsLogo } from './RailroadBanner';
import { ScheduleCallModal } from './ScheduleCallModal';

const TOTAL_FRAMES = 299;
const FRAME_PATH = '/assets/frames/ezgif-frame-';

// Pad number to 3 digits
function padFrame(n: number): string {
  return String(n).padStart(3, '0');
}

interface ScrollSequenceHeroProps {
  distractedStyle?: 'outlined' | 'solid' | 'gradient';
  bgShade?: 'pure-black' | 'deep-onyx';
  logoBadge?: 'glow' | 'pill' | 'none';
  onScheduleCallClick?: () => void;
}

export function ScrollSequenceHero({
  distractedStyle = 'outlined',
  bgShade = 'pure-black',
  logoBadge = 'glow',
  onScheduleCallClick,
}: ScrollSequenceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [quickInput, setQuickInput] = useState('');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('');
  const frameRequestRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);

  const navLinks = [
    { label: 'About Us', href: '#about-us' },
    { label: 'Projects', href: '#projects' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
  ];

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${FRAME_PATH}${padFrame(i)}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
          // Draw first frame
          drawFrame(0);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      // Cleanup
      imagesRef.current = [];
    };
  }, []);

  // Draw a specific frame on the canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    // Set canvas size to match container
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Draw image covering the canvas (object-fit: cover)
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;

    let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

    if (imgRatio > canvasRatio) {
      drawHeight = rect.height;
      drawWidth = drawHeight * imgRatio;
      drawX = (rect.width - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = rect.width;
      drawHeight = drawWidth / imgRatio;
      drawX = 0;
      drawY = (rect.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

    currentFrameRef.current = frameIndex;
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      setScrollProgress(progress);

      // Calculate frame index
      const frameIndex = Math.min(
        Math.floor(progress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );

      // Only redraw if frame changed
      if (frameIndex !== currentFrameRef.current && imagesRef.current.length > 0) {
        cancelAnimationFrame(frameRequestRef.current);
        frameRequestRef.current = requestAnimationFrame(() => {
          drawFrame(frameIndex);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameRequestRef.current);
    };
  }, [drawFrame]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (imagesRef.current.length > 0 && currentFrameRef.current >= 0) {
        drawFrame(currentFrameRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  const handleOpenSchedule = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (onScheduleCallClick) {
      onScheduleCallClick();
    } else {
      setIsScheduleModalOpen(true);
    }
  };

  // Animation phases based on scroll progress:
  // 0.0 - 0.15: Train window view → text starts appearing
  // 0.15 - 0.35: Zooming out from mountains → "Creativity Starts" appears
  // 0.35 - 0.55: Rising through clouds → "with a Click" appears  
  // 0.55 - 0.75: Into atmosphere → CTA form appears
  // 0.75 - 1.0: Earth from space → Full hero visible, ready for next section

  // Text animation calculations
  const tagOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.05) / 0.12));
  const tagY = Math.max(0, 30 * (1 - Math.min(1, Math.max(0, (scrollProgress - 0.05) / 0.12))));

  const headlineOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.12) / 0.15));
  const headlineY = Math.max(0, 40 * (1 - Math.min(1, Math.max(0, (scrollProgress - 0.12) / 0.15))));

  const subtitleOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.28) / 0.15));
  const subtitleY = Math.max(0, 30 * (1 - Math.min(1, Math.max(0, (scrollProgress - 0.28) / 0.15))));

  const ctaOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.42) / 0.15));
  const ctaY = Math.max(0, 40 * (1 - Math.min(1, Math.max(0, (scrollProgress - 0.42) / 0.15))));

  // Overlay darkening as content appears (to make text readable over bright scenes)
  const overlayOpacity = Math.min(0.65, scrollProgress * 0.85);

  // Nav bar always visible
  const navOpacity = 1;

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: '500vh' }}
      >
        {/* STICKY VIEWPORT - Pinned to screen while scrolling through the container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Canvas for frame-by-frame animation */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
          />

          {/* Loading indicator */}
          {!imagesLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4 mx-auto" />
                <p className="text-white/60 text-sm">Loading cinematic experience...</p>
              </div>
            </div>
          )}

          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100"
            style={{ opacity: overlayOpacity }}
          />

          {/* Gradient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

          {/* TOP NAVIGATION BAR - Always visible */}
          <header
            className="absolute top-0 left-0 right-0 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-8 md:pt-10 z-20"
            style={{ opacity: navOpacity }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center select-none cursor-pointer">
                <ClicktotsLogo badge={logoBadge} />
              </div>

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
                          e.preventDefault();
                          setActiveNav(item.label);
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

              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleOpenSchedule()}
                  className="bg-white text-black text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-neutral-200 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-black" />
                  <span>Talk to us</span>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
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

          {/* CENTER HERO CONTENT - Animates in with scroll */}
          <main className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center max-w-5xl mx-auto z-10 w-full pointer-events-none">
            {/* Location Pill Tag */}
            <div
              className="mb-6 sm:mb-8 pointer-events-auto"
              style={{
                opacity: tagOpacity,
                transform: `translateY(${tagY}px)`,
                transition: 'opacity 0.1s, transform 0.1s',
              }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.1] border border-white/20 backdrop-blur-xl shadow-lg">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-[13px] font-medium tracking-wide text-white/90">
                  Digital Marketing Agency in Chennai
                </span>
              </div>
            </div>

            {/* Main Headline: Creativity Starts with a Click */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white text-center select-none"
              style={{
                opacity: headlineOpacity,
                transform: `translateY(${headlineY}px)`,
                transition: 'opacity 0.1s, transform 0.1s',
              }}
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
            </h1>

            {/* Subtitle */}
            <div
              className="mt-6 sm:mt-7 text-sm sm:text-base md:text-[17px] text-white/80 leading-relaxed max-w-2xl font-normal text-center"
              style={{
                opacity: subtitleOpacity,
                transform: `translateY(${subtitleY}px)`,
                transition: 'opacity 0.1s, transform 0.1s',
              }}
            >
              <p>
                Creative strategies, powerful digital solutions and result-driven marketing
              </p>
              <p>
                to help your brand grow faster, reach wider and achieve more.
              </p>
            </div>

            {/* CTA Form */}
            <div
              className="mt-9 sm:mt-12 w-full max-w-xl mx-auto px-2 pointer-events-auto"
              style={{
                opacity: ctaOpacity,
                transform: `translateY(${ctaY}px)`,
                transition: 'opacity 0.1s, transform 0.1s',
              }}
            >
              <form
                onSubmit={handleOpenSchedule}
                className="relative rounded-full glass-pill p-1.5 sm:p-2 pl-6 sm:pl-7 flex items-center justify-between border border-white/25 bg-white/[0.1] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all hover:border-white/35 focus-within:border-white/45"
              >
                <input
                  type="text"
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  placeholder="Enter your email or phone number"
                  className="w-full bg-transparent text-white placeholder:text-white/50 text-sm sm:text-base outline-none pr-3 font-normal"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-neutral-200 transition-all duration-200 shrink-0 cursor-pointer active:scale-95 shadow-md flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Schedule Call</span>
                </button>
              </form>
            </div>
          </main>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            style={{
              opacity: Math.max(0, 1 - scrollProgress * 5),
              transition: 'opacity 0.2s',
            }}
          >
            <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Call Modal (internal) */}
      {!onScheduleCallClick && (
        <ScheduleCallModal
          isOpen={isScheduleModalOpen}
          onClose={() => setIsScheduleModalOpen(false)}
          initialEmail={quickInput}
        />
      )}
    </>
  );
}
