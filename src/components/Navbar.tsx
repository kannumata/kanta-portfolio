"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#career', label: t.nav.career },
    { href: '#skills', label: t.nav.skills },
    { href: '#values', label: t.nav.values },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex h-16 items-center justify-between">
        <div className="text-xl font-bold tracking-tight">Kanta Numa</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-stone-900 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors border border-stone-200 rounded-full px-3 py-1 bg-white"
          >
            <Globe className="w-3 h-3" />
            <span>{language === 'ja' ? 'EN' : 'JA'}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-stone-50/95 backdrop-blur-md border-b border-stone-100"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
