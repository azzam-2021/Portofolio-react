import web from './assets/web.svg'
import design from './assets/design.svg'
import ui from './assets/ui.svg'
export default function Project(){
    return(
        <>
        <h1 className="text-xl text-yellow-400 text-center font-impact mt-20 m-2 lg:text-3xl">PROJECT</h1>
        <section className='w-full flex justify-around lg:justify-evenly'>
            <div className='w-1/4 border-2 p-3 border-yellow-400 rounded-lg text-center text-yellow-400 relative hover:scale-105 lg:w-1/5 lg:rounded-xl'>
                <a className='' href="https://github.com/azzam-2021">
                    <img className='lg:w-60 lg:m-auto' src={web} alt="" />
                    <h1 className='font-rubik lg:text-2xl'>WEB PROJECT</h1>
                </a>
            </div>
            <div className='w-1/4 border-2 p-3 border-yellow-400 rounded-lg text-center text-yellow-400 hover:scale-105 lg:w-1/5 lg:rounded-xl'>
                <a className='' href="https://www.figma.com/proto/iLgwxrzz4X77ctGGoQ6tgA/Tugas-Azzam-8A-2023?node-id=1-2&t=kMCQ1QK8iQR60ePX-1">
                    <img className='lg:w-60 lg:m-auto' src={ui} alt="" />
                    <h1 className='font-rubik lg:text-2xl'>UI/UX Design</h1>
                </a>
            </div>
            <div className='w-1/4 border-2 p-3 border-yellow-400 rounded-lg text-center text-yellow-400 hover:scale-105 lg:w-1/5 lg:rounded-xl'>
                <a className='' href="https://www.figma.com/proto/ZYmsmgUThPhaknBeWWqkxL/Untitled?node-id=2-4&t=0hPEkxu8OMvfQbAU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
                    <img className='lg:w-60 lg:m-auto' src={design} alt="" />
                    <h1 className='font-rubik lg:text-2xl'>Design Figma</h1>
                </a>
            </div>
        </section>
        <h1 className='text-center text-yellow-400 font-impact m-10 text-sm lg:text-xl'>*And More Project!</h1>
        </>
    )
}