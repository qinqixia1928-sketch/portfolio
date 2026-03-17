"use client";

import React, { useEffect, useRef, useState } from "react";
import type { NavItemId } from "@content/siteContent";
import { useSectionObserver } from "@components/SectionObserverProvider";

type SectionProps = {
  id: string;
  navId: NavItemId;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, navId, children, className = "" }: SectionProps) {
  const { registerSection } = useSectionObserver();
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerSection(id, navId);
  }, [id, navId, registerSection]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section fade-section ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

