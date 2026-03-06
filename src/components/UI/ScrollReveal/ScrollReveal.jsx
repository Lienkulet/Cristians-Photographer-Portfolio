"use client";

import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll(
        "body > nav, body > nav *, main section, main section *, body > footer, body > footer *"
      )
    ).filter((el) => {
      const tag = el.tagName.toLowerCase();
      return !["style", "script", "noscript"].includes(tag);
    });

    targets.forEach((el, index) => {
      el.classList.add("scroll-reveal");
      el.style.setProperty("--reveal-delay", `${(index % 6) * 40}ms`);
    });

    const revealWithAnimation = (el) => {
      const delay = Number.parseInt(
        el.style.getPropertyValue("--reveal-delay"),
        10
      );
      window.setTimeout(() => {
        el.classList.add("is-visible");
      }, Number.isNaN(delay) ? 0 : delay + 60);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealWithAnimation(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        revealWithAnimation(el);
        return;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;
