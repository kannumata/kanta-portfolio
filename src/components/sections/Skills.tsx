"use client";

import { Mic2, Rocket, LineChart, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="pt-20 pb-8 md:pt-32 md:pb-12 bg-stone-50">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">{t.skills.title}</h2>
                    <div className="flex flex-col gap-8">

                        {/* Inside Sales / Sales */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="flex items-center gap-4 md:gap-6 md:w-1/3 shrink-0">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Mic2 className="h-7 w-7 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-en leading-tight">{t.skills.sales.title}</h3>
                            </div>

                            <div className="w-full border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8">
                                <ul className="grid gap-3">
                                    {t.skills.sales.items.map((item, i) => (
                                        <SkillItem key={i} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Marketing */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="flex items-center gap-4 md:gap-6 md:w-1/3 shrink-0">
                                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Rocket className="h-7 w-7 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-en">{t.skills.marketing.title}</h3>
                            </div>

                            <div className="w-full border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8">
                                <ul className="grid gap-3">
                                    {t.skills.marketing.items.map((item, i) => (
                                        <SkillItem key={i} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Ops */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="flex items-center gap-4 md:gap-6 md:w-1/3 shrink-0">
                                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                                    <LineChart className="h-7 w-7 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-en">{t.skills.ops.title}</h3>
                            </div>

                            <div className="w-full border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8">
                                <ul className="grid gap-3">
                                    {t.skills.ops.items.map((item, i) => (
                                        <SkillItem key={i} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function SkillItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-stone-700 leading-relaxed font-medium">{text}</span>
        </li>
    );
}
