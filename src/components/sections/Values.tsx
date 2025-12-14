import { TrendingUp, Heart, RefreshCw, Target } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Values() {
    return (
        <section id="values" className="pt-8 pb-20 md:pt-12 md:pb-32 bg-stone-50">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">Values</h2>
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Data Driven */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-1">Data Driven</h3>
                                    <div className="text-sm font-bold text-stone-900">
                                        事実とデータに基づく意思決定
                                    </div>
                                </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                感覚論ではなく、データというファクトを共通言語に。再現性のある戦略で、不確実なビジネス環境を確かな一歩へと導きます。
                            </p>
                        </div>

                        {/* Enjoy the Process */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-1">Enjoy the Process</h3>
                                    <div className="text-sm font-bold text-stone-900">
                                        構築のプロセスに、熱狂を。
                                    </div>
                                </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                困難な課題や、0から1を作り上げる泥臭いプロセスこそに最大のワクワクを。結果だけでなく、そこに至る試行錯誤の道のりそのものを大切にします。
                            </p>
                        </div>

                        {/* Update & Adapt */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                                    <RefreshCw size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-1">Update & Adapt</h3>
                                    <div className="text-sm font-bold text-stone-900">
                                        変化を楽しみ、自らを変え続ける
                                    </div>
                                </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                市場の変化を恐れず、常に最新の知見をキャッチアップ。固定観念にとらわれない柔軟なスタンスで、チームと共に成長し続けます。
                            </p>
                        </div>

                        {/* Commitment */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 shrink-0">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight mb-1">Commitment</h3>
                                    <div className="text-sm font-bold text-stone-900">
                                        「支援」ではなく「成果」にこだわる
                                    </div>
                                </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                外部パートナーという立ち位置に甘んじず、クライアントと同じ視座で事業成長（グロース）にコミットします。
                            </p>
                        </div>

                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
