import { useState } from "react";

export default function Header() {
    const [hide, setHide] = useState(true);

    return (
        <nav className="w-full bg-black/80 backdrop-blur-lg h-16 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 border-b border-yellow-400/10 transition-all duration-300">
            <h1 className="font-impact text-2xl tracking-widest text-yellow-400 hover:text-yellow-300 transition-colors duration-200 cursor-pointer">
                AZZAM
            </h1>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-yellow-400 focus:outline-none" onClick={() => setHide(!hide)}>
                {hide ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </button>

            {/* Navigation Links */}
            <ul className={`bg-black/95 lg:bg-transparent text-center text-xs font-rubik tracking-widest text-yellow-400/80 absolute lg:static top-16 left-0 w-full lg:w-auto z-40 transition-all duration-300 ease-in-out border-b border-yellow-400/5 lg:border-none ${hide ? 'hidden' : 'block'} lg:flex lg:items-center lg:gap-2`}>
                {['HOME', 'ABOUT', 'SKILLS', 'CONTACT'].map((item) => (
                    <li key={item} className="border-b border-yellow-400/5 lg:border-none">
                        <a 
                            href={`#${item.charAt(0) + item.slice(1).toLowerCase()}`} 
                            onClick={() => setHide(true)} 
                            className="block p-5 lg:py-2 lg:px-4 font-medium transition-all duration-300 hover:text-yellow-400 lg:hover:text-white relative group"
                        >
                            {item}
                            {/* Line hover effect untuk desktop */}
                            <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left hidden lg:block"></span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}