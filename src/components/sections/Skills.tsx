import { Mic2, Rocket, LineChart, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Skills() {
    return (
        <section id="skills" className="pt-20 pb-8 md:pt-32 md:pb-12 bg-stone-50">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-12">Skills</h2>
                    <div className="flex flex-col gap-8">

                        {/* Inside Sales / Sales */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="flex items-center gap-4 md:gap-6 md:w-1/3 shrink-0">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Mic2 className="h-7 w-7 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-en leading-tight">Inside Sales / Sales</h3>
                            </div>

                            <div className="w-full border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8">
                                <ul className="grid gap-3">
                                    <SkillItem text="架電・メールによる新規／既存顧客開拓" />
                                    <SkillItem text="Salesforceを活用した営業KPIマネジメント" />
                                    <SkillItem text="SPIN話法を使ったコンサルティング型営業" />
                                    <SkillItem text="Linkedin Sales Navigatorや手紙を活用したCxOアプローチ" />
                                    <SkillItem text="大手企業における部署・子会社別攻略のABM推進" />
                                </ul>
                            </div>
                        </div>

                        {/* Marketing */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="flex items-center gap-4 md:gap-6 md:w-1/3 shrink-0">
                                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Rocket className="h-7 w-7 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-en">Marketing</h3>
                            </div>

                            <div className="w-full border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8">
                                <ul className="grid gap-3">
                                    <SkillItem text="BtoBマーケティング戦略設計" />
                                    <SkillItem text="広告運用ディレクション" />
                                    <SkillItem text="LP構成案作成・改善（LPO）" />
                                    <SkillItem text="SEO施策のマネジメント" />
                                    <SkillItem text="コンテンツマーケティング（記事・WP）" />
                                </ul>
                            </div>
                        </div>

                        {/* Ops */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="flex items-center gap-4 md:gap-6 md:w-1/3 shrink-0">
                                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                                    <LineChart className="h-7 w-7 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-en">Ops</h3>
                            </div>

                            <div className="w-full border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8">
                                <ul className="grid gap-3">
                                    <SkillItem text="BigQueryを活用したデータ加工・抽出" />
                                    <SkillItem text="データ基盤構築・可視化" />
                                    <SkillItem text="セールステック／AIツールの導入・活用支援" />
                                    <SkillItem text="Account Engagement (Pardot) の設定・運用" />
                                    <SkillItem text="業務プロセス改善・業務整理" />
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
        <li className="flex items-start gap-3 group">
            <ChevronRight className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
            <span className="text-stone-700 leading-relaxed font-medium">{text}</span>
        </li>
    );
}
