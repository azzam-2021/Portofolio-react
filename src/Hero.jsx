import imghero from './assets/NYC.webp';

export default function Hero() {
    return (
        <div id='Home' style={{ backgroundImage: `url(${imghero})` }} className="relative w-full h-screen bg-cover bg-center flex justify-center items-center overflow-hidden">
            {/* Overlay kegelapan yang lebih sinematik */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
            
            <div className="z-10 text-center px-4 max-w-4xl animate-fadeIn">
                <h3 className="text-yellow-400 text-base md:text-xl font-rubik tracking-widest mb-4 opacity-90">
                    HELLO, MY NAME IS
                </h3>
                <h1 className="text-yellow-400 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-impact tracking-wide my-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                    AZZAM SIDDIQ
                </h1>
                <h2 className="text-white text-lg md:text-2xl font-rubik tracking-wide max-w-2xl mx-auto mb-10 opacity-80">
                    I am a <span className="text-yellow-400 font-medium">UI/UX Designer</span> & <span className="text-yellow-400 font-medium">Web Developer</span>
                </h2>
                <a href="#About" className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-rubik font-medium px-8 py-3 rounded-full tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                    Know More!
                </a>
            </div>
        </div>
    );
}