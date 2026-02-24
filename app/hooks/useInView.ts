"use client";

import { useEffect, useRef } from "react";

export function useInView(threshold = 0.08) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe the element itself and all animate-* children
    const animatables = el.querySelectorAll(
      "[class*='animate-fade'], [class*='animate-scale'], [class*='animate-pop']"
    );

    if (animatables.length > 0) {
      animatables.forEach((child) => observer.observe(child));
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
