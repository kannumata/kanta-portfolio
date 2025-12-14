import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-100">
            <div className="max-w-5xl mx-auto px-6 md:px-12 flex h-16 items-center justify-between">
                <div className="text-xl font-bold tracking-tight">Kanta Numa</div>
                <div className="flex gap-6 text-sm font-medium text-stone-600">
                    <Link href="#career" className="hover:text-stone-900 transition-colors">Career</Link>
                    <Link href="#skills" className="hover:text-stone-900 transition-colors">Skills</Link>
                    <Link href="#values" className="hover:text-stone-900 transition-colors">Values</Link>
                    <Link href="#contact" className="hover:text-stone-900 transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
