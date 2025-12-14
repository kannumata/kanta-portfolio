"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 md:py-32 bg-stone-900 text-stone-100">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <div className="flex flex-col items-center text-center space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.contact.title}</h2>
                        <p className="text-lg text-stone-300 max-w-xl">
                            {t.contact.description}
                        </p>
                        <div className="flex gap-4">
                            <Link href="mailto:kanta.numa@cloudfit.co.jp" className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors">
                                <Mail className="h-5 w-5" />
                                <span>Email Me</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/kanta-numa-2b0ab1165/" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-medium transition-colors border border-stone-700">
                                <Linkedin className="h-5 w-5" />
                                <span>LinkedIn</span>
                            </Link>
                        </div>

                        <div className="border-t border-stone-800 pt-8 text-sm text-stone-500">
                            {t.contact.copyright}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
