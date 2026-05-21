import imghero from './assets/Hero.jpg';

export default function Hero() {
    return (
        <div id='Home' style={{ backgroundImage: `url(${imghero})` }} className="relative w-full h-screen bg-cover bg-center flex justify-center items-center overflow-hidden">
            {/* Overlay gradasi gelap yang menyatu sempurna */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/95"></div>
            
            <div className="z-10 text-center px-4 max-w-5xl animate-fadeIn">
                <h3 className="text-yellow-400 text-xs md:text-sm font-rubik tracking-[0.3em] mb-3 uppercase opacity-90">
                    Hello, My Name Is
                </h3>
                <h1 className="text-yellow-400 text-5xl sm:text-7xl md:text-8xl font-impact tracking-wider uppercase my-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.9)] selection:bg-white selection:text-black">
                    Azzam Siddiq
                </h1>
                <h2 className="text-zinc-300 text-base md:text-xl font-rubik tracking-wide max-w-2xl mx-auto mb-12 font-light">
                    I am a <span className="text-yellow-400 font-semibold shadow-yellow-400/10">UI/UX Designer</span> & <span className="text-yellow-400 font-semibold">Web Developer</span>
                </h2>
                <a href="#About" className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-rubik font-medium text-sm px-10 py-3.5 rounded-full tracking-widest transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] uppercase">
                    Know More
                </a>
            </div>
        </div>
    );
}