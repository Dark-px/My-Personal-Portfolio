import { Twitter, Pin, Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.08-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.104 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.371-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.01c.12.099.246.198.372.291a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.04.105c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028 19.875 19.875 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028Zm-11.79 11.63c-1.183 0-2.157-1.085-2.157-2.419 0-1.334.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.418 0 1.334-.956 2.419-2.157 2.419Zm6.946 0c-1.184 0-2.157-1.085-2.157-2.419 0-1.334.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z" />
  </svg>
);

export const Footer = () => {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();
  const onHomePage = pathname === '/';
  const getSectionHref = (id: string) => (onHomePage ? `#${id}` : `/#${id}`);

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com', label: 'X' },
    { icon: DiscordIcon, href: 'https://discord.com', label: 'Discord' },
    { icon: Pin, href: 'https://www.pinterest.com', label: 'Pinterest' },
  ];

  return (
    <footer className="py-12 border-t border-white/10 bg-[#050506]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-black text-white mb-4">PARSA GHAEI</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Aspiring Game Developer & Designer, documenting the journey.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={getSectionHref('hero')}
                  data-cursor-preview="Go To Home"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={getSectionHref('projects_title')}
                  data-cursor-preview="Go To Projects"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={getSectionHref('journey_title')}
                  data-cursor-preview="Go To Journey"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Journey
                </a>
              </li>
              <li>
                <a
                  href={getSectionHref('about_title')}
                  data-cursor-preview="Go To About"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={getSectionHref('contact_title')}
                  data-cursor-preview="Go To Contact"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={getSectionHref('featured_blogs_title')}
                  data-cursor-preview="Go To Featured Blogs"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Featured Blogs
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  data-cursor-preview="Go To Blog Page"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Blog Page
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-preview={`Open ${link.label}`}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-mono-display">
            © {currentYear} PARSA GHAEI // ALL_RIGHTS_RESERVED
          </p>
          <p className="text-white/30 text-sm flex items-center gap-2">
            BUILT_WITH <Heart className="w-4 h-4" /> BY PARSA
          </p>
        </div>
      </div>
    </footer>
  );
};
