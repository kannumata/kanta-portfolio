'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award, Calendar } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import clsx from 'clsx';

const certifications = [
    { name: "Google Ads Search Certification", date: "2024.11" },
    { name: "Google Analytics Certification", date: "2024.10" },
    { name: "Salesforce Certified Marketing Cloud Account Engagement Specialist", date: "2024.09" },
    { name: "Salesforce Certified Administrator", date: "2024.08" },
    { name: "Salesforce Certified Associate", date: "2024.07" },
    { name: "Salesforce Certified Sales Representative", date: "2024.07" },
    { name: "AWS Certified Solutions Architect - Associate", date: "2021.04" },
    { name: "ITパスポート試験", date: "2021.04" },
    { name: "AWS Certified Cloud Practitioner", date: "2021.03" },
];

export default function Certifications() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="pb-20 pt-0 bg-stone-50">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <div className="flex flex-col items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={clsx(
                                "flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 group",
                                isOpen && "bg-stone-100"
                            )}
                        >
                            <Award className="h-5 w-5 text-emerald-600" />
                            <span className="font-medium text-stone-700">資格・認定一覧 (Certifications)</span>
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
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="w-full overflow-hidden"
                                >
                                    <div className="pt-8 pb-4">
                                        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                                            {certifications.map((cert, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-stone-50 last:border-0 hover:bg-stone-50 transition-colors"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                                                        <span className="font-medium text-stone-700">{cert.name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 mt-1 sm:mt-0 pl-5 sm:pl-0 text-xs text-stone-400 font-mono">
                                                        <Calendar className="h-3 w-3" />
                                                        {cert.date}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
