"use client";

import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Career() {
    const { t } = useLanguage();

    return (
        <section id="career" className="py-20 md:py-32 bg-white">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-8">{t.career.title}</h2>
                    <div className="border-l-2 border-stone-200 pl-8 ml-4 md:ml-0 space-y-12">

                        {/* CloudFit */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-emerald-500 shadow-sm"></span>
                            <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold text-stone-900">株式会社CloudFit</h3>
                                    <Link href="https://cloudfit.co.jp/" target="_blank" className="text-stone-400 hover:text-emerald-600 transition-colors">
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </div>
                                <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit">{t.career.cloudfit.role}</span>
                            </div>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                {t.career.cloudfit.description}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <Link href="https://note.com/cloudfit/n/nb45bf5b0d174" target="_blank" className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800 hover:underline transition-colors font-medium">
                                    {t.career.cloudfit.entry_link} <ExternalLink className="h-3 w-3" />
                                </Link>
                                <Link href="https://cloudfit.co.jp/blog/writers/kanta-numa" target="_blank" className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800 hover:underline transition-colors font-medium">
                                    {t.career.cloudfit.articles_link} <ExternalLink className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>

                        {/* 3MA Inc. */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-emerald-500 shadow-sm"></span>
                            <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold text-stone-900">株式会社3MA</h3>
                                    <Link href="https://3majp.com/" target="_blank" className="text-stone-400 hover:text-emerald-600 transition-colors">
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </div>
                                <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit">{t.career.company3ma.role}</span>
                            </div>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                {t.career.company3ma.description}
                            </p>
                        </div>

                        {/* Side Projects */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-stone-400 shadow-sm"></span>
                            <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <h3 className="text-xl font-bold text-stone-900">Side Projects</h3>
                                <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit">{t.career.side_projects.role}</span>
                            </div>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                {t.career.side_projects.description}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <Link href="https://note.com/kannumata/m/mdd75b23ee567" target="_blank" className="flex items-center gap-1 text-stone-500 hover:text-stone-800 hover:underline transition-colors font-medium">
                                    {t.career.side_projects.note_link} <ExternalLink className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>

                        {/* AWS */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-stone-400 shadow-sm"></span>
                            <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold text-stone-900">Amazon Web Services Japan</h3>
                                    <Link href="https://aws.amazon.com/jp/" target="_blank" className="text-stone-400 hover:text-emerald-600 transition-colors">
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </div>
                                <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit">{t.career.aws.role}</span>
                            </div>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                {t.career.aws.description}
                            </p>
                        </div>

                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
