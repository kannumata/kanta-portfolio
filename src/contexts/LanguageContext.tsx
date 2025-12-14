"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { locales, Language } from '@/data/locales';

type LanguageContextType = {
    language: Language;
    t: typeof locales.ja;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('ja');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'ja' ? 'en' : 'ja'));
    };

    const t = locales[language];

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
