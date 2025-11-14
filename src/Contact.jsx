import wa from './assets/wa.svg'
import ig from './assets/ig.svg'
import gmail from './assets/gm.svg'
import linkedin from './assets/link.svg'

export default function Contact(){
    return(
        <>
        <h1 id='Contact' className="text-xl text-yellow-400 text-center font-impact m-2 mt-20 lg:text-3xl scroll-smooth">CONTACT</h1>
        <section className='w-full flex justify-evenly lg:justify-center'>
            <div className='w-14 p-3 text-yellow-400 hover:scale-110 lg:w-20 lg:mx-10'>
                <a href="https://wa.me/621779313773">
                    <img src={wa} alt="" />
                </a>
            </div>
            <div className='w-14 p-3 text-yellow-400 hover:scale-110 lg:w-20 lg:mx-10'>
                <a href="https://www.instagram.com/azz4m_21/">
                    <img src={ig} alt="" />
                </a>
            </div>
            <div className='w-14 p-3 text-yellow-400 hover:scale-110 lg:w-20 lg:mx-10'>
                <a href="mailto:azzamsiddiq2@gmail.com">
                    <img src={gmail} alt="" />
                </a>
            </div>
            <div className='w-14 p-3 text-yellow-400 hover:scale-110 lg:w-20 lg:mx-10'>
                <a href="www.linkedin.com/in/azzam-siddiq-084941377">
                    <img src={linkedin} alt="" />
                </a>
            </div>
        </section>
        </>
    )
}