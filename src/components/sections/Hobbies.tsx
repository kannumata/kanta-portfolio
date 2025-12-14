import { Dumbbell, Globe, Trophy, Trees } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-20 md:py-32 bg-white">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">Hobbies & Interests</h2>
                    <div className="grid md:grid-cols-2 gap-6">

                        <HobbyCard
                            icon={<Trees className="h-6 w-6 text-emerald-600" />}
                            title="Golf"
                            description="ベストスコア96。週末は自然の中でリフレッシュしながら、戦略的なプレーを楽しんでいます。"
                        />

                        <HobbyCard
                            icon={<Trophy className="h-6 w-6 text-yellow-500" />}
                            title="Hanshin Tigers"
                            description="兵庫県西宮市出身なので、幼少期から応援しています。熱狂的な阪神ファンです。"
                        />

                        <HobbyCard
                            icon={<Dumbbell className="h-6 w-6 text-blue-500" />}
                            title="Workout"
                            description="無理しない範囲でトレーニングやストレッチに取り組み、心身をメンテナンスしています。"
                        />

                        <HobbyCard
                            icon={<Globe className="h-6 w-6 text-sky-500" />}
                            title="Travel"
                            description="海外旅行で異文化に触れることが好きです。旅行を通じて新しい視点やインスピレーションを得ています。"
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
