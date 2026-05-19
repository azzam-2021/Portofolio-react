import foto from './assets/foto.PNG';

export default function About() {
    return (
        <section id='About' className='py-24 px-6 max-w-5xl mx-auto bg-black text-white rounded-2xl my-10 border border-yellow-400/10 shadow-2xl'>
            <h2 className="text-3xl md:text-4xl text-yellow-400 text-center font-impact tracking-wider mb-12">
                ABOUT ME
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center">
                {/* Frame Foto yang Dipercantik */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <img 
                        className="relative w-48 h-56 md:w-[260px] md:h-[320px] object-cover rounded-2xl border-2 border-yellow-400 shadow-xl transform group-hover:scale-[1.02] transition duration-300" 
                        src={foto} 
                        alt="Azzam Siddiq" 
                    />
                </div>
                
                {/* Deskripsi Teks */}
                <div className="text-center lg:text-left max-w-xl">
                    <p className='text-yellow-400/90 text-base md:text-lg font-rubik leading-relaxed space-y-4'>
                        My name is <span className="text-yellow-400 font-bold">Azzam Siddiq Mutahar</span>, born in Sumedang on December 12, 2009. 
                        I am currently a high school student at <span className="text-white underline decoration-yellow-400 decoration-2">SMA Plus AbuDzar</span>. 
                    </p>
                    <p className='text-yellow-400/90 text-base md:text-lg font-rubik leading-relaxed mt-4'>
                        I have a massive passion for crafting interactive, clean websites like this, alongside conceptualizing elegant and seamless user experiences through UI/UX design.
                    </p>
                </div>
            </div>
        </section>
    );
}