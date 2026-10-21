import { motion as Motion } from 'motion/react';

export default function Footer(){
    return(
        <Motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-zinc-950 border-t border-zinc-900 py-12"
        >
            <div className="max-w-4xl mx-auto text-center px-4">
                {/* Quote section yang lebih berjarak dan puitis */}
                <div className="mb-8 max-w-lg mx-auto space-y-2">
                    <p className="text-zinc-400 italic font-rubik text-sm md:text-base font-light leading-relaxed tracking-wide">
                        "Everyone here has done bad things. You can't escape the past."
                    </p>
                    <p className="text-[10px] md:text-xs tracking-[0.2em] font-rubik text-yellow-400/60 font-medium uppercase">
                        — Yelena Belova
                    </p>
                </div>
                
                {/* Divider Line Kecil */}
                <div className="w-12 h-[1px] bg-yellow-400/20 mx-auto mb-6"></div>

                <div className="text-zinc-600 text-[11px] font-rubik tracking-widest uppercase">
                    <p>Copyright &copy; {new Date().getFullYear()} Azzam Siddiq. All Rights Reserved.</p>
                </div>
            </div>
        </Motion.footer>
    );
}