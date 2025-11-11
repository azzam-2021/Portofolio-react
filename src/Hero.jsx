import imghero from './assets/NYC.webp'
export default function Hero(){
    return(
        <div id='Home' style={{ backgroundImage: `url(${imghero})` }} className="relative w-full h-screen bg-yellow-400 brightness- bg-cover bg-center flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="z-10">
                <h1 className="text-yellow-400 text-center text-xl">HELLO MY NAME IS</h1>
                <h1 className="text-yellow-400 text-5xl text-center font-impact my-10">AZZAM SIDDIQ</h1>
                <h1 className="text-yellow-400 text-center text-xl">I am UI/UX & Beginner web developer</h1>
                <button className="bg-transparent border-2 border-black px-5 py-1 rounded-full self-center hidden">Know more!</button>
            </div>
        </div>
    )
}