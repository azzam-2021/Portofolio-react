import web from './assets/web.svg';
import design from './assets/design.svg';
import ui from './assets/ui.svg';

export default function Project() {
    const projectList = [
        {
            title: "WEB PROJECT",
            icon: web,
            url: "https://github.com/azzam-2021",
            alt: "Web Development Portfolio"
        },
        {
            title: "UI/UX DESIGN",
            icon: ui,
            url: "https://www.figma.com/proto/iLgwxrzz4X77ctGGoQ6tgA/Tugas-Azzam-8A-2023?node-id=1-2&t=kMCQ1QK8iQR60ePX-1",
            alt: "UI/UX Design Portfolio"
        },
        {
            title: "POSTER DESIGN",
            icon: design,
            url: "https://www.figma.com/proto/ZYmsmgUThPhaknBeWWqkxL/Untitled?node-id=2-4&t=0hPEkxu8OMvfQbAU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
            alt: "Poster Design Portfolio"
        }
    ];

    return (
        <section id="Project" className="py-20 px-6 max-w-6xl mx-auto scroll-smooth">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl text-yellow-400 text-center font-impact tracking-wider mb-14">
                MY PROJECTS
            </h2>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {projectList.map((project, index) => (
                    <a 
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full max-w-[280px] sm:max-w-none bg-black/40 border-2 border-yellow-400/30 p-6 md:p-8 rounded-2xl text-center text-yellow-400 flex flex-col items-center justify-between gap-6 transform hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all duration-300 backdrop-blur-sm"
                    >
                        {/* Wrapper Icon dengan Efek Animasi Gemetar/Naik Tipis */}
                        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-2 rounded-xl bg-yellow-400/5 group-hover:bg-yellow-400/10 transition-colors duration-300">
                            <img 
                                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300" 
                                src={project.icon} 
                                alt={project.alt} 
                            />
                        </div>

                        {/* Title Project */}
                        <h3 className="font-rubik text-lg md:text-xl font-bold tracking-wide group-hover:text-white transition-colors duration-200">
                            {project.title}
                        </h3>
                        
                        {/* Tanda Panah Link Kecil sebagai Indikator Dapat Diklik */}
                        <span className="text-xs font-rubik tracking-widest text-yellow-400/60 group-hover:text-yellow-400 font-medium flex items-center gap-1 transition-colors duration-200">
                            VIEW PROJECT 
                            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </a>
                ))}
            </div>

            {/* Footer / Call to Action Tambahan */}
            <div className="text-center mt-16 animate-pulse">
                <p className="text-yellow-400/80 font-impact tracking-widest text-sm md:text-lg">
                    * AND MORE PROJECTS COMING SOON!
                </p>
            </div>
        </section>
    );
}