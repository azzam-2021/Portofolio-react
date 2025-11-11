import web from './assets/web.svg'
import design from './assets/design.svg'
import ui from './assets/ui.svg'
export default function Project(){
    return(
        <>
        <h1 className="text-xl text-yellow-400 text-center font-impact mt-20 m-2">PROJECT</h1>
        <section className='w-full flex justify-around'>
            <div className='w-1/4 p-3 border-2 border-yellow-400 rounded-lg text-center text-yellow-400 hover:scale-105'>
                <a href="https://azzam-2021.github.io/Portofolio/">
                    <img src={web} alt="" />
                    <h1>WEB PROJECT</h1>
                </a>
            </div>
            <div className='w-1/4 p-3 border-2 border-yellow-400 rounded-lg text-center text-yellow-400 hover:scale-105'>
                <a href="https://www.figma.com/proto/iLgwxrzz4X77ctGGoQ6tgA/Tugas-Azzam-8A-2023?node-id=1-2&t=kMCQ1QK8iQR60ePX-1">
                    <img src={ui} alt="" />
                    <h1>UI/UX Design</h1>
                </a>
            </div>
            <div className='w-1/4 p-3 border-2 border-yellow-400 rounded-lg text-center text-yellow-400 hover:scale-105'>
                <a href="">
                    <img src={design} alt="" />
                    <h1>Design Figma</h1>
                </a>
            </div>
        </section>
        </>
    )
}