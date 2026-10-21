import weather from './assets/weather-app.png';
import slicing from './assets/slicing.png';
import poster from './assets/poster.png';
import { motion as Motion } from 'motion/react';

export default function Achivement() {
    const achivement = [
        {
            title: "LEARN UI/UX DESIGN",
            category: "UI/UX DESIGN",
            description: "A dynamic web application engineered to deliver real-time weather forecasts with a clean and responsive user interface.",
            icon: weather,
            url: "https://weather-app-gvt5.vercel.app/",
            alt: "Web Development Portfolio"
        },
        {
            title: "LEARN & CRATE WEB BY WORDPRESS",
            category: "WEB DEVELOPMENT",
            description: "Translating complex, high-fidelity design layouts into precise, pixel-perfect, and highly interactive digital interfaces.",
            icon: slicing,
            url: "https://project-slicing-s1.vercel.app/",
            alt: "UI/UX Design Portfolio"
        },
        {
            title: "LEARN & CRATE WEBSITE BY CODE",
            category: "WEB DEVELOPMENT",
            description: "Crafting bold, cinematic, and visually striking visual concepts designed to capture attention and communicate stories effectively.",
            icon: poster,
            url: "https://www.figma.com/design/co9Euoyt27BF4nndU8nSR2/Tugas-lomba?node-id=40-3&t=9IPwIVY8YRkbDj0z-1",
            alt: "Poster Design Portfolio"
        }
    ];

    return (
        <section id="Achivement" className="py-24 px-6 max-w-6xl mx-auto scroll-smooth">
            {/* Title Section */}
            <Motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 relative"
            >
                <h2 className="text-3xl md:text-4xl text-yellow-400 font-impact tracking-wider uppercase">
                    MY ACHIVEMENT
                </h2>
                <div className="w-16 h-[2px] bg-yellow-400/30 mx-auto mt-4"></div>
            </Motion.div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {achivement.map((achive, index) => (
                    <Motion.a
                        key={index}
                        href={achive.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                        whileHover={{ y: -8, borderColor: "rgba(250,204,21,0.4)", boxShadow: "0 0 30px rgba(250,204,21,0.15)" }}
                        whileTap={{ scale: 0.985 }}
                        className="group flex flex-col bg-zinc-900/30 border border-zinc-800/80 rounded-2xl overflow-hidden transition-colors duration-300 backdrop-blur-md"
                    >
                        {/* Thumbnail Container (Efek Zoom Sinematik) */}
                        <div className="w-full h-48 md:h-52 overflow-hidden bg-zinc-950 relative border-b border-zinc-800/50">
                            {/* Overlay Gelap Halus di Atas Gambar */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10 transition-opacity duration-300 group-hover:opacity-40"></div>
                            <Motion.img
                                whileHover={{ scale: 1.08 }}
                                className="w-full h-full object-cover transition-[filter] duration-700 ease-out filter brightness-90 group-hover:brightness-100" 
                                src={achive.icon} 
                                alt={achive.alt} 
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-5">
                            <div className="space-y-2">
                                {/* Kategori Project */}
                                <span className="text-[10px] font-rubik tracking-[0.2em] text-yellow-400 font-medium bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/10">
                                    {achive.category}
                                </span>
                                
                                {/* Judul Project */}
                                <h3 className="font-rubik text-xl font-bold tracking-wide text-white group-hover:text-yellow-400 transition-colors duration-300 pt-1">
                                    {achive.title}
                                </h3>
                                
                                {/* Deskripsi Project */}
                                <p className="font-rubik text-xs md:text-sm text-zinc-400 leading-relaxed font-light line-clamp-3">
                                    {achive.description}
                                </p>
                            </div>

                            {/* Tanda Panah Link / Action Indikator */}
                            <div className="border-t border-zinc-800/60 pt-4 flex items-center justify-between text-xs font-rubik tracking-widest text-zinc-500 group-hover:text-yellow-400 font-medium transition-colors duration-300">
                                <span className="uppercase">View Project</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </Motion.a>
                ))}
            </div>

            {/* Call to Action Tambahan */}
            <div className="text-center mt-20">
                <Motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-zinc-600 font-rubik tracking-[0.25em] text-xs md:text-sm font-medium uppercase"
                >
                    • More projects are being engineered •
                </Motion.p>
            </div>
        </section>
    );
}