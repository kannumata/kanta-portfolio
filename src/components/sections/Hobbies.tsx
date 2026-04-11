"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const hobbyKeys = ['golf', 'tigers', 'workout', 'travel'] as const;

export default function Hobbies() {
  const { t } = useLanguage();

  return (
    <section id="hobbies" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">
            {t.hobbies.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hobbyKeys.map((key) => {
              const hobby = t.hobbies[key];
              return (
                <div
                  key={key}
                  className="card-shadow rounded-lg p-6 flex items-start gap-5 transition-shadow duration-200 hover:card-shadow-hover bg-white"
                >
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1.5 tracking-tight">
                      {hobby.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {hobby.description}
                    </p>
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
