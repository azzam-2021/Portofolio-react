import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { label: "HOME", id: "Home" },
        { label: "ABOUT", id: "About" },
        { label: "SKILLS", id: "Skills" },
        { label: "PROJECTS", id: "Project" },
        { label: "ACHIEVEMENTS", id: "Achivement" },
        { label: "CONTACT", id: "Contact" }
    ];

    return (
        <Motion.nav
            initial={{ y: -72 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full bg-black/80 backdrop-blur-lg h-16 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 border-b border-yellow-400/10"
        >
            <a href="#Home" className="font-impact text-2xl tracking-widest text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
                AZZAM
            </a>
            
            <button
                type="button"
                className="lg:hidden p-2 text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation"
            >
                {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            <ul className="hidden lg:flex lg:items-center lg:gap-2 text-center text-xs font-rubik tracking-widest text-yellow-400/80">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className="block p-5 lg:py-2 lg:px-3 font-medium transition-colors duration-300 hover:text-yellow-400 lg:hover:text-white relative group"
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left hidden lg:block"></span>
                        </a>
                    </li>
                ))}
            </ul>

            <AnimatePresence>
                {isMenuOpen && (
                    <Motion.ul
                        id="main-navigation"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="grid bg-black/95 text-center text-xs font-rubik tracking-widest text-yellow-400/80 absolute lg:hidden top-16 left-0 w-full z-40 border-b border-yellow-400/5"
                    >
                    {navItems.map((item) => (
                        <li key={item.id} className="border-b border-yellow-400/5 lg:border-none">
                            <a
                                href={`#${item.id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block p-5 lg:py-2 lg:px-3 font-medium transition-colors duration-300 hover:text-yellow-400 lg:hover:text-white relative group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left hidden lg:block"></span>
                            </a>
                        </li>
                    ))}
                    </Motion.ul>
                )}
            </AnimatePresence>
        </Motion.nav>
    );
}