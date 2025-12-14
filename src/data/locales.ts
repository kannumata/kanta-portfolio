export type Language = 'ja' | 'en';

export const locales = {
    ja: {
        nav: {
            career: 'Career',
            skills: 'Skills',
            values: 'Values',
            contact: 'Contact',
        },
        hero: {
            role: 'BtoB Business Growth Partner',
            description1: '株式会社CloudFitにて、BtoBマーケティング・インサイドセールス・AI・セールステックを用いた成果創出を支援しています。',
            description2: 'Sales × Marketing × Technology を武器に、現場レベルの実装から経営視点の支援まで一気通貫で伴走します。',
        },
        career: {
            title: 'Career',
            cloudfit: {
                role: '2024.06 - Current (1y 6m)',
                description: '大手企業やSaaS企業のクライアントに向けて、インサイドセールス・マーケティング・営業プロセス改善・データ活用・セールステックの導入/運用支援など、事業グロース領域に従事。',
                entry_link: '入社エントリ',
                articles_link: '執筆した記事一覧',
            },
            company3ma: {
                role: '2023.06 - Current (2y 6m)',
                description: '株式会社3MAを創業。主にSaaS/AI企業向けに営業代行・コンサルティングサービスを提供。営業戦略策定からインサイドセールス代行、組織構築支援までワンストップで支援。',
            },
            side_projects: {
                role: 'Side Business',
                description: '「決算が読めるようになるノート」での企業分析記事の企画・執筆（ビジネスモデル構造化・戦略分析）に加え、新規ITサービスの企画・開発におけるPdM/PMも経験。',
                note_link: '企画・執筆した記事はこちら',
            },
            aws: {
                role: '2021.04 - 2024.05 (New Graduate)',
                description: 'Telecom、SMB、ISV、Startupなど幅広い業界・顧客層を対象に、BDR/SDRとしてインサイドセールスや新規開拓営業を経験。架電・メールに加え、LinkedIn Sales Navigatorや手紙を活用したCxOアプローチを実践。また、インテントデータを活用したセールスDXプロジェクトを担当し、セールステック・AIツールの導入推進も行う。',
            },
        },
        skills: {
            title: 'Skills',
            sales: {
                title: 'Inside Sales / Sales',
                items: [
                    '架電・メールによる新規／既存顧客開拓',
                    'Salesforceを活用した営業KPIマネジメント',
                    'SPIN話法を使ったコンサルティング型営業',
                    'Linkedin Sales Navigatorや手紙を活用したCxOアプローチ',
                    '大手企業における部署・子会社別攻略のABM推進',
                ],
            },
            marketing: {
                title: 'Marketing',
                items: [
                    'BtoBマーケティング戦略設計',
                    '広告運用ディレクション',
                    'LP構成案作成・改善（LPO）',
                    'SEO施策のマネジメント',
                    'コンテンツマーケティング（記事・WP）',
                ],
            },
            ops: {
                title: 'Ops',
                items: [
                    'BigQueryを活用したデータ加工・抽出',
                    'データ基盤構築・可視化',
                    'セールステック／AIツールの導入・活用支援',
                    'Account Engagement (Pardot) の設定・運用',
                    '業務プロセス改善・業務整理',
                ],
            },
        },
        certifications: {
            title: 'Certifications',
            items: [
                { name: 'Google Ads Search Certification', date: '2024.11' },
                { name: 'Google Analytics Certification', date: '2024.11' },
                { name: 'Salesforce Certified Sales Cloud Consultant', date: '2024.10' },
                { name: 'Salesforce Certified Associate', date: '2024.09' },
                { name: 'Salesforce Certified AI Associate', date: '2024.09' },
                { name: 'Salesforce Certified Administrator', date: '2024.08' },
                { name: 'AWS Certified Solutions Architect - Associate', date: '2024.06' },
                { name: 'IT Passport', date: '2022.10' },
                { name: 'AWS Certified Cloud Practitioner', date: '2021.06' },
            ]
        },
        values: {
            title: 'Values',
            data_driven: {
                title: 'Data Driven',
                subtitle: '事実とデータに基づく意思決定',
                description: '感覚論ではなく、データというファクトを共通言語に。再現性のある戦略で、不確実なビジネス環境を確かな一歩へと導きます。',
            },
            enjoy_process: {
                title: 'Enjoy the Process',
                subtitle: '構築のプロセスに、熱狂を。',
                description: '困難な課題や、0から1を作り上げる泥臭いプロセスこそに最大のワクワクを。結果だけでなく、そこに至る試行錯誤の道のりそのものを大切にします。',
            },
            update_adapt: {
                title: 'Update & Adapt',
                subtitle: '変化を楽しみ、自らを変え続ける',
                description: '市場の変化を恐れず、常に最新の知見をキャッチアップ。固定観念にとらわれない柔軟なスタンスで、チームと共に成長し続けます。',
            },
            commitment: {
                title: 'Commitment',
                subtitle: '「支援」ではなく「成果」にこだわる',
                description: '外部パートナーという立ち位置に甘んじず、クライアントと同じ視座で事業成長（グロース）にコミットします。',
            },
        },
        hobbies: {
            title: 'Hobbies & Interests',
            golf: {
                title: 'Golf',
                description: 'ベストスコア96。週末は自然の中でリフレッシュしながら、戦略的なプレーを楽しんでいます。',
            },
            tigers: {
                title: 'Hanshin Tigers',
                description: '兵庫県西宮市出身なので、幼少期から応援しています。熱狂的な阪神ファンです。',
            },
            workout: {
                title: 'Workout',
                description: '無理しない範囲でトレーニングやストレッチに取り組み、心身をメンテナンスしています。',
            },
            travel: {
                title: 'Travel',
                description: '海外旅行で異文化に触れることが好きです。旅行を通じて新しい視点やインスピレーションを得ています。',
            },
        },
        contact: {
            title: "Let's Talk",
            description: 'お仕事のご相談、カジュアルなお話、お気軽にメッセージをお送りください。',
            copyright: '© 2025 Kanta Numa. All rights reserved.',
        },
    },
    en: {
        nav: {
            career: 'Career',
            skills: 'Skills',
            values: 'Values',
            contact: 'Contact',
        },
        hero: {
            role: 'BtoB Business Growth Partner',
            description1: 'Supporting business growth through BtoB marketing, inside sales, AI, and SalesTech at CloudFit Inc.',
            description2: 'Leveraging Sales × Marketing × Technology, I provide end-to-end support from field-level implementation to executive-level strategy.',
        },
        career: {
            title: 'Career',
            cloudfit: {
                role: '2024.06 - Current (1y 6m)',
                description: 'Engaged in business growth areas for major enterprises and SaaS clients, including inside sales, marketing, sales process improvement, data utilization, and SalesTech implementation/operation support.',
                entry_link: 'Entry Story',
                articles_link: 'Articles',
            },
            company3ma: {
                role: '2023.06 - Current (2y 6m)',
                description: 'Founded 3MA Inc. Provide sales outsourcing and consulting services mainly for SaaS/AI companies. One-stop support from sales strategy formulation to inside sales outsourcing and organizational development.',
            },
            side_projects: {
                role: 'Side Business',
                description: 'Planning and writing corporate analysis articles for "Notes to Read Financial Statements" (business model structuring/strategic analysis), and experience as PdM/PM in planning and development of new IT services.',
                note_link: 'Planned/Written Articles',
            },
            aws: {
                role: '2021.04 - 2024.05 (New Graduate)',
                description: 'Experienced inside sales and new business development as BDR/SDR for a wide range of industries and customers including Telecom, SMB, ISV, and Startups. Practiced CxO approach using LinkedIn Sales Navigator and letters in addition to calls and emails. Also in charge of sales DX projects utilizing intent data and promoted implementation of SalesTech and AI tools.',
            },
        },
        skills: {
            title: 'Skills',
            sales: {
                title: 'Inside Sales / Sales',
                items: [
                    'New/Existing customer development via call & email',
                    'Sales KPI management using Salesforce',
                    'Consultative sales using SPIN method',
                    'CxO approach using LinkedIn Sales Navigator & Letters',
                    'ABM promotion for departments/subsidiaries of major companies',
                ],
            },
            marketing: {
                title: 'Marketing',
                items: [
                    'BtoB marketing strategy design',
                    'Ad operation direction',
                    'LP structure creation and improvement (LPO)',
                    'SEO management',
                    'Content marketing (Articles/WP)',
                ],
            },
            ops: {
                title: 'Ops',
                items: [
                    'Data processing & extraction using BigQuery',
                    'Data infrastructure construction & visualization',
                    'Implementation & utilization support of SalesTech/AI tools',
                    'Account Engagement (Pardot) configuration & operation',
                    'Business process improvement & organization',
                ],
            },
        },
        certifications: {
            title: 'Certifications',
            items: [
                { name: 'Google Ads Search Certification', date: 'Nov 2024' },
                { name: 'Google Analytics Certification', date: 'Nov 2024' },
                { name: 'Salesforce Certified Sales Cloud Consultant', date: 'Oct 2024' },
                { name: 'Salesforce Certified Associate', date: 'Sep 2024' },
                { name: 'Salesforce Certified AI Associate', date: 'Sep 2024' },
                { name: 'Salesforce Certified Administrator', date: 'Aug 2024' },
                { name: 'AWS Certified Solutions Architect - Associate', date: 'Jun 2024' },
                { name: 'IT Passport', date: 'Oct 2022' },
                { name: 'AWS Certified Cloud Practitioner', date: 'Jun 2021' },
            ]
        },
        values: {
            title: 'Values',
            data_driven: {
                title: 'Data Driven',
                subtitle: 'Decision making based on facts and data',
                description: 'Using data as a common language instead of intuition. Leading to certain steps in an uncertain business environment with reproducible strategies.',
            },
            enjoy_process: {
                title: 'Enjoy the Process',
                subtitle: 'Enthusiasm in the building process.',
                description: 'Finding the greatest excitement in difficult challenges and the gritty process of creating from zero to one. Cherishing not only the results but also the path of trial and error.',
            },
            update_adapt: {
                title: 'Update & Adapt',
                subtitle: 'Enjoy change and continue to change yourself',
                description: 'Not afraid of market changes, always catching up with the latest knowledge. Growing with the team with a flexible stance not bound by fixed ideas.',
            },
            commitment: {
                title: 'Commitment',
                subtitle: 'Focus on "Results" not just "Support"',
                description: 'Not settling for the position of an external partner, but committing to business growth with the same perspective as the client.',
            },
        },
        hobbies: {
            title: 'Hobbies & Interests',
            golf: {
                title: 'Golf',
                description: 'Best score 96. I enjoy strategic play while refreshing myself in nature on weekends.',
            },
            tigers: {
                title: 'Hanshin Tigers',
                description: 'I have been cheering for them since childhood as I am from Nishinomiya. A passionate Hanshin fan.',
            },
            workout: {
                title: 'Workout',
                description: 'I work on training and stretching within a reasonable range to maintain my body and mind.',
            },
            travel: {
                title: 'Travel',
                description: 'I like experiencing different cultures through overseas travel. I gain new perspectives and inspiration through traveling.',
            },
        },
        contact: {
            title: "Let's Talk",
            description: 'Please feel free to send a message for work consultation or casual talk.',
            copyright: '© 2025 Kanta Numa. All rights reserved.',
        },
    },
};
