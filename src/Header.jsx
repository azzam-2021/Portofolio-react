import { useState } from "react"
export default function Header(){
    const [hide, setHide] = useState(true);
    return(
        <>
            <div className='w-full bg-black h-10 px-3 flex justify-between items-center fixed z-10 lg:h-14'>
                <h1 className='font-impact text-2xl text-yellow-400'>PORTFOLIO*</h1>
                <button className="lg:hidden" onClick={() => setHide(!hide)}>
                    <img className='w-5 text' src="./src/assets/hmb.svg" alt="" />
                </button>
                <ul  className={`bg-black text-center text-sm text-yellow-400 fixed top-10 right-0 z-10 ${hide == true ? 'hidden' : 'block'} lg:flex lg:top-auto`}>
                    <li className=' p-3 lg:mx-5 hover:bg-yellow-400 lg:hover:scale-105 lg:hover:text-white lg:hover:bg-transparent'><a href="#Home">HOME</a></li>
                    <li className=' p-3 lg:mx-5 hover:bg-yellow-400 lg:hover:scale-105 lg:hover:text-white lg:hover:bg-transparent'><a href="#About">ABOUT</a></li>
                    <li className=' p-3 lg:mx-5 hover:bg-yellow-400 lg:hover:scale-105 lg:hover:text-white lg:hover:bg-transparent'><a href="#Skills">SKILLS</a></li>
                    <li className=' p-3 lg:mx-5 hover:bg-yellow-400 lg:hover:scale-105 lg:hover:text-white lg:hover:bg-transparent'><a href="#Contact">CONTACT</a></li>
                </ul>
            </div>
            
        </>
    )
}