import { ExternalLink } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Career() {
    return (
        <section id="career" className="py-20 md:py-32 bg-white">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-8">Career</h2>
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
                                <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit">2024.06 - Current (1y 6m)</span>
                            </div>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                大手企業やSaaS企業のクライアントに向けて、インサイドセールス・マーケティング・営業プロセス改善・データ活用・セールステックの導入/運用支援など、事業グロース領域に従事。
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <Link href="https://note.com/cloudfit/n/nb45bf5b0d174" target="_blank" className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800 hover:underline transition-colors font-medium">
                                    入社エントリ <ExternalLink className="h-3 w-3" />
                                </Link>
                                <Link href="https://cloudfit.co.jp/blog/writers/kanta-numa" target="_blank" className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800 hover:underline transition-colors font-medium">
                                    執筆した記事一覧 <ExternalLink className="h-3 w-3" />
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
                                <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit">2023.06 - Current (2y 6m)</span>
                            </div>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                株式会社3MAを創業。主にSaaS/AI企業向けに営業代行・コンサルティングサービスを提供。営業戦略策定からインサイドセールス代行、組織構築支援までワンストップで支援。
                            </p>
                        </div>

                        {/* Side Projects */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-stone-400 shadow-sm"></span>
                            <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <h3 className="text-xl font-bold text-stone-900">Side Projects</h3>
                                <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit">Side Business</span>
                            </div>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                「決算が読めるようになるノート」での企業分析記事の企画・執筆（ビジネスモデル構造化・戦略分析）に加え、新規ITサービスの企画・開発におけるPdM/PMも経験。
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <Link href="https://note.com/kannumata/m/mdd75b23ee567" target="_blank" className="flex items-center gap-1 text-stone-500 hover:text-stone-800 hover:underline transition-colors font-medium">
                                    企画・執筆した記事はこちら <ExternalLink className="h-3 w-3" />
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
                                <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit">2021.04 - 2024.05 (New Graduate)</span>
                            </div>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                Telecom、SMB、ISV、Startupなど幅広い業界・顧客層を対象に、BDR/SDRとしてインサイドセールスや新規開拓営業を経験。<br />
                                架電・メールに加え、LinkedIn Sales Navigatorや手紙を活用したCxOアプローチを実践。また、インテントデータを活用したセールスDXプロジェクトを担当し、セールステック・AIツールの導入推進も行う。
                            </p>
                        </div>



                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
