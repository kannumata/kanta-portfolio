"use client";

import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="pb-20 pt-0 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white card-shadow hover:card-shadow-hover transition-all duration-200"
            >
              <span className="font-bold text-stone-700 text-sm group-hover:text-emerald-700 transition-colors">
                {t.certifications.title}
              </span>
              <ChevronDown
                className={clsx(
                  "h-4 w-4 text-stone-400 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-full max-w-2xl"
                >
                  <div className="card-shadow rounded-lg p-6 bg-white">
                    <ul className="space-y-4">
                      {t.certifications.items.map((cert, index) => (
                        <li
                          key={index}
                          className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100 last:border-0 last:pb-0"
                        >
                          <span className="text-stone-700 font-medium text-sm">
                            {cert.name}
                          </span>
                          <span className="text-xs text-stone-400 font-mono whitespace-nowrap">
                            {cert.date}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
