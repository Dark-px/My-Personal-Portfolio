import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'PROJECTS', href: '#projects_title' },
    { label: 'JOURNEY', href: '#journey_title' },
    { label: 'ABOUT', href: '#about_title' },
    { label: 'FEATURED BLOGS', href: '#featured_blogs_title' },
    { label: 'CONTACT', href: '#contact_title' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#050506]/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="text-xl font-black text-white tracking-tighter">
            PG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor-preview={`Go To ${item.label.replace(/_/g, " ")}`}
                className="nav-link-animated text-xs font-mono-display text-white/50 hover:text-white transition-colors tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/blog"
              data-cursor-preview="Go To Blog Page"
              className="button-glow-hover inline-flex items-center bg-white text-black text-xs font-bold tracking-wider px-4 py-2 rounded-l-sm rounded-r-full border-2 border-white hover:bg-white/90 transition-colors"
            >
              GO TO BLOG PAGE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/50 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden border-t border-white/10 bg-[#050506]/95 backdrop-blur-xl transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div
            className={`flex flex-col items-center gap-4 text-center transition-all duration-300 ${
              isMobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor-preview={`Go To ${item.label.replace(/_/g, " ")}`}
                className="text-white/50 hover:text-white transition-colors text-sm font-mono-display py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/blog"
              data-cursor-preview="Go To Blog Page"
              className="inline-flex items-center justify-center bg-white text-black text-xs font-bold tracking-wider px-4 py-3 rounded-full border-2 border-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GO TO BLOG PAGE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
