import wa from './assets/wa.svg';
import ig from './assets/ig.svg';
import gmail from './assets/gm.svg';
import linkedin from './assets/link.svg';

export default function Contact(){
    const socials = [
        { img: wa, url: "https://wa.me/621779313773", alt: "WhatsApp" },
        { img: ig, url: "https://www.instagram.com/azz4m_21/", alt: "Instagram" },
        { img: gmail, url: "mailto:azzamsiddiq2@gmail.com", alt: "Gmail" },
        { img: linkedin, url: "https://www.linkedin.com/in/azzam-siddiq-084941377", alt: "LinkedIn" } // Ditambahkan https:// agar mengarah ke luar website
    ];

    return(
        <section id='Contact' className="py-20 px-6 text-center">
            <h2 className="text-3xl md:text-4xl text-yellow-400 font-impact tracking-wider mb-12">
                CONTACT
            </h2>
            
            <div className='flex flex-wrap justify-center gap-6 md:gap-10 max-w-xl mx-auto'>
                {socials.map((social, index) => (
                    <a 
                        key={index}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-16 h-16 p-3.5 bg-black/50 border border-yellow-400/20 rounded-xl text-yellow-400 hover:text-black hover:bg-yellow-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 flex items-center justify-center'
                    >
                        <img className="w-full h-full object-contain filter hover:brightness-0" src={social.img} alt={social.alt} />
                    </a>
                ))}
            </div>
        </section>
    );
}