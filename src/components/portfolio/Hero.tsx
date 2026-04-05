import { useEffect, useState } from 'react';
import { Github, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToHashTarget } from '@/lib/scroll';

export const Hero = () => {
  const [text, setText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const fullName = 'Parsa Ghaei';
    let index = 0;
    let intervalId: number | null = null;

    setText('');
    setIsTypingDone(false);

    const startDelay = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        if (document.hidden) {
          return;
        }

        if (index <= fullName.length) {
          setText(fullName.slice(0, index));
          index++;
        } else {
          setIsTypingDone(true);
          if (intervalId !== null) {
            window.clearInterval(intervalId);
          }
        }
      }, 95);
    }, 850);

    return () => {
      window.clearTimeout(startDelay);
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center bg-[#050506] overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      <div className="pointer-events-none absolute -top-14 left-[12%] h-44 w-44 rounded-full bg-white/10 blur-3xl animate-float-soft hidden md:block" />
      <div className="pointer-events-none absolute bottom-20 right-[10%] h-40 w-40 rounded-full bg-white/5 blur-3xl animate-float-soft animation-delay-2000 hidden md:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-8 md:pt-24 md:pb-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-end">
          <div className="space-y-4 md:space-y-5 section-enter-soft">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-white/10 rounded-sm animate-breathe">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-xs font-mono-display text-white/60">SYSTEM_ONLINE // V1.0.0</span>
          </div>

          {/* Name with Brutalist Style */}
          <div className="space-y-2">
            <h1 className="text-[clamp(2.4rem,9vw,6.8rem)] lg:text-[clamp(4.1rem,7.4vw,7.7rem)] font-black leading-[0.85] tracking-tighter text-white brutalist-text">
              {text}
              {!isTypingDone && <span className="animate-pulse">|</span>}
            </h1>
            <div className="h-px w-full bg-white/10" />
          </div>

          {/* Subtitle */}
          <div className="space-y-3">
            <div className="space-y-1.5">
              <p className="text-xs md:text-sm text-white/45 font-mono-display tracking-wide">
                Eager to become a
              </p>
              <h2 className="text-xl md:text-4xl font-bold text-white/90">
                Game Developer
                <span className="text-white/40 mx-3">/</span>
                Designer
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/50 max-w-2xl leading-relaxed text-justify">
              Hi, I’m Parsa — a 16-year-old game developer studying computer science in
              technical high school, currently learning Unity and C#. I enjoy building
              gameplay mechanics, experimenting with new ideas, documenting my journey
              in game development, and learning about the video game industry.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="lg"
              data-cursor-preview="View Projects"
              className="button-glow-hover bg-white text-black hover:bg-white/90 font-bold px-5 py-4 md:px-7 md:py-5 text-sm md:text-base rounded-sm border-2 border-white transition-all hover:scale-105"
              onClick={() => scrollToHashTarget('#projects_title')}
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-cursor-preview="Go To Contact"
              className="button-glow-hover border-2 border-white/20 text-white hover:bg-white/5 font-bold px-5 py-4 md:px-7 md:py-5 text-sm md:text-base rounded-sm transition-all"
              onClick={() => scrollToHashTarget('#contact_title')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </div>

          {/* Social */}
          <a
            href="https://github.com/Dark-px"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-preview="Open GitHub"
            className="inline-flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors font-mono-display"
          >
            <Github className="w-4 h-4" />
            @parsaghaei
          </a>
          </div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-float-soft">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono-display text-white/30 tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};
