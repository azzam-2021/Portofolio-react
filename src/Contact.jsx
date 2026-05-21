import wa from './assets/wa.svg';
import ig from './assets/ig.svg';
import gmail from './assets/gm.svg';
import linkedin from './assets/link.svg';

export default function Contact(){
    const socials = [
        { img: wa, url: "https://wa.me/621779313773", alt: "WhatsApp" },
        { img: ig, url: "https://www.instagram.com/azz4m_21/", alt: "Instagram" },
        { img: gmail, url: "mailto:azzamsiddiq2@gmail.com", alt: "Gmail" },
        { img: linkedin, url: "https://www.linkedin.com/in/azzam-siddiq-084941377", alt: "LinkedIn" }
    ];

    return(
        <section id='Contact' className="py-24 px-6 text-center bg-gradient-to-t from-zinc-950 to-transparent">
            <h2 className="text-3xl md:text-4xl text-yellow-400 font-impact tracking-wider mb-4">
                CONTACT
            </h2>
            <p className="text-zinc-500 text-sm font-rubik tracking-wide mb-12 max-w-xs mx-auto">
                Let's connect and build something incredible together.
            </p>
            
            <div className='flex flex-wrap justify-center gap-6 max-w-xl mx-auto'>
                {socials.map((social, index) => (
                    <a 
                        key={index}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-14 h-14 md:w-16 md:h-16 p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-yellow-400 hover:text-black hover:bg-yellow-400 hover:border-yellow-400 hover:scale-110 hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] transition-all duration-300 flex items-center justify-center group'
                    >
                        <img 
                            className="w-full h-full object-contain transition-all duration-300 group-hover:invert group-hover:brightness-0" 
                            src={social.img} 
                            alt={social.alt} 
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}