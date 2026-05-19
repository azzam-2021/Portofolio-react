export default function Footer(){
    return(
        <footer className="bg-black/40 border-t border-yellow-400/10 py-12 mt-10">
            <div className="max-w-4xl mx-auto text-center px-4 text-yellow-400">
                <div className="mb-6 max-w-xl mx-auto">
                    <p className="italic font-rubik text-base md:text-lg font-light leading-relaxed tracking-wide">
                        "Everyone here has done bad things. You can't escape the past."
                    </p>
                    <p className="text-xs md:text-sm tracking-widest font-rubik mt-2 text-yellow-400/70 uppercase">
                        — Yelena Belova
                    </p>
                </div>
                <div className="text-yellow-400/40 text-xs font-rubik tracking-wider border-t border-yellow-400/5 pt-6">
                    <p>Copyright &copy; 2025 Azzam Siddiq. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}