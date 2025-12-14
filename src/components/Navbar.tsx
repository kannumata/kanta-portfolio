"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-100">
            <div className="max-w-5xl mx-auto px-6 md:px-12 flex h-16 items-center justify-between">
                <div className="text-xl font-bold tracking-tight">Kanta Numa</div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
                        <Link href="#career" className="hover:text-stone-900 transition-colors">{t.nav.career}</Link>
                        <Link href="#skills" className="hover:text-stone-900 transition-colors">{t.nav.skills}</Link>
                        <Link href="#values" className="hover:text-stone-900 transition-colors">{t.nav.values}</Link>
                        <Link href="#contact" className="hover:text-stone-900 transition-colors">{t.nav.contact}</Link>
                    </div>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors border border-stone-200 rounded-full px-3 py-1 bg-white"
                    >
                        <Globe className="w-3 h-3" />
                        <span>{language === 'ja' ? 'EN' : 'JA'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
