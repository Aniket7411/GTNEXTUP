"use client";
import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  // useLayoutEffect runs synchronously before browser paint
  // This ensures scroll happens immediately when route changes
  useLayoutEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll, no animation
    });

    // Also scroll the document element (for older browsers)
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }

    // Scroll body as well
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  // Fallback useEffect for edge cases
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
