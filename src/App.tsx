import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import { scrollToHashTarget } from "./lib/scroll";

import Index from "./pages/Index";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";
import PromptsPage from "./pages/PromptsPage";

const queryClient = new QueryClient();

const App = () => {
  const hostname = typeof window !== "undefined" ? window.location.hostname.toLowerCase() : "";
  const isPromptsVariant = import.meta.env.VITE_SITE_VARIANT === "prompts";
  const isPromptsHost = hostname === "prompts.parsaghaei.dev" || isPromptsVariant;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchDevice) {
      delete window.__lenis;
      return;
    }

    const lenis = new Lenis({
      duration: 0.95,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1,
      syncTouch: false,
      lerp: 0.13,
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
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const targetSelector = ".section-enter, .section-enter-soft";

    const prepareElement = (element: HTMLElement) => {
      if (element.style.animationDelay) {
        element.style.transitionDelay =
          isTouchDevice || prefersReducedMotion ? "0ms" : element.style.animationDelay;
      }
    };

    const revealIfInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const immediateRevealLimit = isTouchDevice ? window.innerHeight * 1.06 : window.innerHeight * 0.92;
      if (rect.top <= immediateRevealLimit) {
        element.classList.add("is-visible");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: isTouchDevice ? 0.06 : 0.18,
        rootMargin: isTouchDevice ? "0px 0px 14% 0px" : "0px 0px -8% 0px",
      }
    );

    const registerElement = (element: HTMLElement) => {
      prepareElement(element);
      revealIfInViewport(element);
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    };

    const observedElements = Array.from(document.querySelectorAll<HTMLElement>(targetSelector));
    observedElements.forEach(registerElement);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches(targetSelector)) {
            registerElement(node);
          }

          const nestedTargets = Array.from(node.querySelectorAll<HTMLElement>(targetSelector));
          nestedTargets.forEach(registerElement);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isPromptsHost ? <PromptsPage /> : <Index />} />
            <Route path="/prompts" element={<PromptsPage />} />
            <Route path="/blog" element={isPromptsHost ? <Navigate replace to="/" /> : <BlogPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={isPromptsHost ? <Navigate replace to="/" /> : <NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
