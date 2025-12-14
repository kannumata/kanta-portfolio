"use client";

import { TrendingUp, Heart, RefreshCw, Target } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Values() {
    const { t } = useLanguage();

    return (
        <section id="values" className="pt-8 pb-20 md:pt-12 md:pb-32 bg-stone-50">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">{t.values.title}</h2>
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Data Driven */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-1">{t.values.data_driven.title}</h3>
                                    <div className="text-sm font-bold text-stone-900">
                                        {t.values.data_driven.subtitle}
                                    </div>
                                </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {t.values.data_driven.description}
                            </p>
                        </div>

                        {/* Enjoy the Process */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-1">{t.values.enjoy_process.title}</h3>
                                    <div className="text-sm font-bold text-stone-900">
                                        {t.values.enjoy_process.subtitle}
                                    </div>
                                </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {t.values.enjoy_process.description}
                            </p>
                        </div>

                        {/* Update & Adapt */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                                    <RefreshCw size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-1">{t.values.update_adapt.title}</h3>
                                    <div className="text-sm font-bold text-stone-900">
                                        {t.values.update_adapt.subtitle}
                                    </div>
                                </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {t.values.update_adapt.description}
                            </p>
                        </div>

                        {/* Commitment */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 shrink-0">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-1">{t.values.commitment.title}</h3>
                                    <div className="text-sm font-bold text-stone-900">
                                        {t.values.commitment.subtitle}
                                    </div>
                                </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {t.values.commitment.description}
                            </p>
                        </div>

                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
