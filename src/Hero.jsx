import imghero from './assets/Hero.jpg';
import { motion as Motion } from 'motion/react';

export default function Hero() {
    return (
        <section id='Home' style={{ backgroundImage: `url(${imghero})` }} className="relative w-full min-h-screen bg-cover bg-center flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/95"></div>
            <Motion.div
                aria-hidden="true"
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <Motion.div
                className="z-10 text-center px-4 max-w-5xl"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } }
                }}
            >
                <Motion.h3
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="text-yellow-400 text-xs md:text-sm font-rubik tracking-[0.3em] mb-3 uppercase opacity-90"
                >
                    Hello, My Name Is
                </Motion.h3>
                <Motion.h1
                    variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-yellow-400 text-5xl sm:text-7xl md:text-8xl font-impact tracking-wider uppercase my-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.9)] selection:bg-white selection:text-black"
                >
                    Azzam Siddiq
                </Motion.h1>
                <Motion.h2
                    variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="text-zinc-300 text-base md:text-xl font-rubik tracking-wide max-w-2xl mx-auto mb-12 font-light"
                >
                    I am a <span className="text-yellow-400 font-semibold shadow-yellow-400/10">UI/UX Designer</span> & <span className="text-yellow-400 font-semibold">Web Developer</span>
                </Motion.h2>
                <Motion.a
                    href="#About"
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -4, boxShadow: "0 0 25px rgba(250,204,21,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-rubik font-medium text-sm px-10 py-3.5 rounded-full tracking-widest transition-colors duration-300 uppercase"
                >
                    Know More
                </Motion.a>
            </Motion.div>
        </section>
    );
}