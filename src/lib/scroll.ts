import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export const scrollToHashTarget = (hashOrId: string, offset?: number) => {
  const cleanId = hashOrId.replace("#", "");
  const target = document.getElementById(cleanId);
  if (!target) {
    return;
  }

  const nav = document.querySelector("nav");
  const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 80;
  const finalOffset = -(navHeight + 2);

  if (window.__lenis) {
    window.__lenis.scrollTo(target, {
      offset: typeof offset === "number" ? offset : finalOffset,
      duration: 1.05,
      easing: (value: number) => 1 - Math.pow(1 - value, 3),
    });
  } else {
    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY +
      (typeof offset === "number" ? offset : finalOffset);
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }
};
