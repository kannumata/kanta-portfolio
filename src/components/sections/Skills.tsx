"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = ['sales', 'marketing', 'technology'] as const;
const numbers = ['01', '02', '03'];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="pt-20 pb-8 md:pt-32 md:pb-12 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">
            {t.skills.title}
          </h2>
          <div className="flex flex-col gap-6">
            {categories.map((key, i) => {
              const skill = t.skills[key];
              return (
                <div
                  key={key}
                  className="card-shadow rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 transition-shadow duration-200 hover:card-shadow-hover bg-white"
                >
                  <div className="flex items-center gap-4 md:gap-5 md:w-1/3 shrink-0">
                    <span className="font-mono text-2xl font-semibold text-emerald-500 tracking-tight">
                      {numbers[i]}
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 tracking-tight leading-tight">
                      {skill.title}
                    </h3>
                  </div>

                  <div className="w-full border-t md:border-t-0 md:border-l border-stone-200 pt-4 md:pt-0 md:pl-8">
                    <ul className="grid gap-2.5">
                      {skill.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-stone-300 mt-1.5 shrink-0">—</span>
                          <span className="text-stone-700 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
