"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const valueKeys = ['data_driven', 'enjoy_process', 'update_adapt', 'commitment'] as const;
const numbers = ['01', '02', '03', '04'];

export default function Values() {
  const { t } = useLanguage();

  return (
    <section id="values" className="pt-8 pb-20 md:pt-12 md:pb-32 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">
            {t.values.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {valueKeys.map((key, i) => {
              const value = t.values[key];
              return (
                <div
                  key={key}
                  className="card-shadow rounded-lg p-8 flex flex-col gap-4 transition-shadow duration-200 hover:card-shadow-hover bg-white"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm font-medium text-emerald-500 mt-0.5">
                      {numbers[i]}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight leading-tight">
                        {value.title}
                      </h3>
                      <p className="text-sm font-bold text-stone-900 mt-1">
                        {value.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed pl-9">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
