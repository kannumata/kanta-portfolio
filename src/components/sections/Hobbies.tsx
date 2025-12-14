"use client";

import { Dumbbell, Globe, Trophy, Trees } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hobbies() {
    const { t } = useLanguage();

    return (
        <section id="hobbies" className="py-20 md:py-32 bg-white">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">{t.hobbies.title}</h2>
                    <div className="grid md:grid-cols-2 gap-6">

                        <HobbyCard
                            icon={<Trees className="h-6 w-6 text-emerald-600" />}
                            title={t.hobbies.golf.title}
                            description={t.hobbies.golf.description}
                        />

                        <HobbyCard
                            icon={<Trophy className="h-6 w-6 text-yellow-500" />}
                            title={t.hobbies.tigers.title}
                            description={t.hobbies.tigers.description}
                        />

                        <HobbyCard
                            icon={<Dumbbell className="h-6 w-6 text-blue-500" />}
                            title={t.hobbies.workout.title}
                            description={t.hobbies.workout.description}
                        />

                        <HobbyCard
                            icon={<Globe className="h-6 w-6 text-sky-500" />}
                            title={t.hobbies.travel.title}
                            description={t.hobbies.travel.description}
                        />

                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function HobbyCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-md transition-all">
            <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-stone-900 mb-2 text-lg">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
