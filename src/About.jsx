import foto from './assets/foto.PNG'
import foto2 from './assets/foto-2.JPG'
import logo from './assets/Logo.svg'
export default function About() {
    return(
        <>
        <div id='About' className='text-center m-5 my-20'>
            <h1 className="text-xl text-yellow-400 text-center font-impact m-5">ABOUT ME</h1>
            <img className=" w-40 h-48 m-auto rounded-lg border-2 border-yellow-400" src={foto} alt="" />
            <p className='text-yellow-400 my-5 text-sm'>
                My name is Azzam Siddiq Mutahar, i was born in Sumedang in 12 december 2009, i’m a junior high school students in SMA Plus AbuDzar, i like to make a website like this
                , and i can make UI/UX design.
            </p>
        </div>
        </>
        
    )
}