import foto from './assets/foto.PNG';
import { motion as Motion } from 'motion/react';

export default function About() {
    return (
        <Motion.section
            id='About'
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className='py-20 px-6 md:px-12 max-w-5xl mx-auto bg-zinc-950 text-white rounded-2xl my-16 border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden'
        >
            {/* Dekorasi ambient glow tipis di pojok kartu */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>

            <Motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl text-yellow-400 text-center font-impact tracking-wider mb-16 relative"
            >
                ABOUT ME
            </Motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Frame Foto Sinematik */}
                <div className="relative group justify-self-center lg:justify-self-end">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl border border-yellow-400/30 shadow-2xl bg-zinc-900">
                        <Motion.img
                            initial={{ opacity: 0, scale: 1.05 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="w-52 h-64 md:w-[260px] md:h-[340px] object-cover transform group-hover:scale-105 transition duration-500 filter brightness-95 group-hover:brightness-100" 
                            src={foto} 
                            alt="Azzam Siddiq" 
                        />
                    </div>
                </div>
                
                {/* Deskripsi Teks Profesional */}
                <Motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    className="text-center lg:text-left max-w-xl space-y-5 font-rubik"
                >
                    <p className='text-zinc-300 text-base md:text-lg leading-relaxed font-light'>
                        Hi, I’m <span className='text-yellow-400 font-bold tracking-wide'>Azzam Siddiq Mutahar</span>, a high school student with a fierce passion for <span className="text-white font-medium underline decoration-yellow-400 decoration-2 underline-offset-4">web development</span> and <span className="text-white font-medium underline decoration-yellow-400 decoration-2 underline-offset-4">UI/UX design</span>. 
                    </p>
                    <p className='text-zinc-400 text-sm md:text-base leading-relaxed font-light'>
                        I love building interactive, clean, and visually engaging web applications while engineering seamless, user-centric digital experiences. Combining logical structure with aesthetic beauty is what drives me forward every day.
                    </p>
                </Motion.div>
            </div>
        </Motion.section>
    );
}