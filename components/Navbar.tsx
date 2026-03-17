"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@content/siteContent";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all flex justify-center">
      <nav
        className={`mx-auto mt-8 flex items-center justify-center gap-6 px-10 py-4 rounded-full bg-white/80 backdrop-blur-md shadow-md transition-all ${
          scrolled ? "mt-4 scale-95" : "mt-8"
        }`}
      >
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-base font-medium px-4 py-2 rounded-full transition-all hover:bg-[#E8D7D2] hover:text-[#3A3A3A] ${
                pathname === item.href ? "text-[#3A3A3A] bg-[#E8D7D2]" : "text-[#3A3A3A]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full bg-[#3A3A3A] px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-white hover:opacity-80 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? "关闭" : "菜单"}
        </button>
      </nav>

      {open && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm border border-gray-100 bg-white/95 backdrop-blur-xl md:hidden rounded-2xl shadow-xl p-6 animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-4 text-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-base font-medium px-4 py-2 rounded-xl transition-all ${
                  pathname === item.href ? "text-[#3A3A3A] bg-[#E8D7D2]" : "text-[#3A3A3A] hover:bg-[#E8D7D2]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

