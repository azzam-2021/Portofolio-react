import { useState } from "react";

export default function Header() {
    const [hide, setHide] = useState(true);

    return (
        <nav className="w-full bg-black/90 backdrop-blur-md h-16 px-6 flex justify-between items-center fixed top-0 left-0 z-50 border-b border-yellow-400/20 transition-all duration-300">
            <h1 className="font-impact text-2xl tracking-wider text-yellow-400 hover:scale-105 transition-transform duration-200 cursor-pointer">
                AZZAM
            </h1>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-yellow-400 focus:outline-none" onClick={() => setHide(!hide)}>
                {hide ? (
                    // Hamburger Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                ) : (
                    // Close Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </button>

            {/* Navigation Links */}
            <ul className={`bg-black/95 lg:bg-transparent text-center text-sm font-rubik tracking-widest text-yellow-400 absolute lg:static top-16 left-0 w-full lg:w-auto z-40 transition-all duration-300 ease-in-out border-b border-yellow-400/10 lg:border-none ${hide ? 'hidden' : 'block'} lg:flex lg:items-center`}>
                <li className="border-b border-yellow-400/5 lg:border-none">
                    <a href="#Home" onClick={() => setHide(true)} className="block p-4 lg:py-2 lg:mx-4 font-medium hover:text-black hover:bg-yellow-400 lg:hover:bg-transparent lg:hover:text-white lg:hover:scale-110 transition-all duration-200">HOME</a>
                </li>
                <li className="border-b border-yellow-400/5 lg:border-none">
                    <a href="#About" onClick={() => setHide(true)} className="block p-4 lg:py-2 lg:mx-4 font-medium hover:text-black hover:bg-yellow-400 lg:hover:bg-transparent lg:hover:text-white lg:hover:scale-110 transition-all duration-200">ABOUT</a>
                </li>
                <li className="border-b border-yellow-400/5 lg:border-none">
                    <a href="#Skills" onClick={() => setHide(true)} className="block p-4 lg:py-2 lg:mx-4 font-medium hover:text-black hover:bg-yellow-400 lg:hover:bg-transparent lg:hover:text-white lg:hover:scale-110 transition-all duration-200">SKILLS</a>
                </li>
                <li>
                    <a href="#Contact" onClick={() => setHide(true)} className="block p-4 lg:py-2 lg:mx-4 font-medium hover:text-black hover:bg-yellow-400 lg:hover:bg-transparent lg:hover:text-white lg:hover:scale-110 transition-all duration-200">CONTACT</a>
                </li>
            </ul>
        </nav>
    );
}