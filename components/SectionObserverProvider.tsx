"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import type { NavItemId } from "@content/siteContent";

type SectionId = string;

type SectionObserverContextValue = {
  activeNavId: NavItemId;
  setActiveNavId: (id: NavItemId) => void;
  registerSection: (id: SectionId, navId: NavItemId) => void;
};

const SectionObserverContext =
  createContext<SectionObserverContextValue | null>(null);

type Mapping = { sectionId: SectionId; navId: NavItemId };

export function SectionObserverProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [activeNavId, setActiveNavId] = useState<NavItemId>("home");
  const [mappings, setMappings] = useState<Mapping[]>([]);

  const registerSection = (sectionId: SectionId, navId: NavItemId) => {
    setMappings((prev) => {
      if (prev.find((m) => m.sectionId === sectionId)) return prev;
      return [...prev, { sectionId, navId }];
    });
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const mapping = mappings.find((m) => m.sectionId === id);
          if (mapping) {
            setActiveNavId(mapping.navId);
          }
        }
      });
    };

    if (mappings.length === 0) return;

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.35
    });

    mappings.forEach((mapping) => {
      const el = document.getElementById(mapping.sectionId);
      if (el) observer.observe(el);
    });

    observers.push(observer);

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [mappings]);

  const value = useMemo(
    () => ({
      activeNavId,
      setActiveNavId,
      registerSection
    }),
    [activeNavId]
  );

  return (
    <SectionObserverContext.Provider value={value}>
      {children}
    </SectionObserverContext.Provider>
  );
}

export function useSectionObserver() {
  const ctx = useContext(SectionObserverContext);
  if (!ctx) {
    throw new Error(
      "useSectionObserver must be used within a SectionObserverProvider"
    );
  }
  return ctx;
}

