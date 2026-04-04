import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import { scrollToHashTarget } from "./lib/scroll";

import Index from "./pages/Index";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.7 : isTouchDevice ? 0.92 : 0.95,
      smoothWheel: true,
      wheelMultiplier: prefersReducedMotion ? 0.88 : isTouchDevice ? 0.92 : 1.0,
      touchMultiplier: prefersReducedMotion ? 0.92 : 0.96,
      syncTouch: !prefersReducedMotion,
      lerp: prefersReducedMotion ? 0.2 : isTouchDevice ? 0.16 : 0.13,
    });
    window.__lenis = lenis;

    let rafId: number | null = null;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    const startRaf = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(raf);
    };

    const stopRaf = () => {
      if (rafId === null) {
        return;
      }
      window.cancelAnimationFrame(rafId);
      rafId = null;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopRaf();
      } else {
        startRaf();
      }
    };

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopRaf();
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const syncTabStateClass = () => {
      root.classList.toggle("tab-inactive", document.hidden);
    };

    syncTabStateClass();
    document.addEventListener("visibilitychange", syncTabStateClass);

    return () => {
      document.removeEventListener("visibilitychange", syncTabStateClass);
      root.classList.remove("tab-inactive");
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const anchor = target.closest("a[href^='#']");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const sectionId = href.slice(1);
      const section = document.getElementById(sectionId);
      if (!section) {
        return;
      }

      event.preventDefault();
      scrollToHashTarget(href);
      window.history.replaceState(null, "", href);
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    const observedElements = Array.from(
      document.querySelectorAll<HTMLElement>(".section-enter, .section-enter-soft")
    );

    observedElements.forEach((element) => {
      if (element.style.animationDelay) {
        element.style.transitionDelay = element.style.animationDelay;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    observedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
