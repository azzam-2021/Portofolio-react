import { useState } from "react"
export default function Header(){
    const [hide, setHide] = useState(true);
    return(
        <>
            <div className='w-full bg-black h-10 px-3 flex justify-between items-center fixed z-10'>
                <h1 className='font-impact text-2xl text-yellow-400'>PORTFOLIO*</h1>
                <button onClick={() => setHide(!hide)}>
                    <img className='w-5 text' src="./src/assets/hmb.svg" alt="" />
                </button>
            </div>
            <ul  className={`bg-black text-center text-sm text-yellow-400 fixed top-10 right-0 z-10 ${hide == true ? 'hidden' : 'block'}`}>
                    <li className=' p-3 hover:bg-yellow-400'><a href="#Home">HOME</a></li>
                    <li className=' p-3  hover:bg-yellow-400'><a href="#About">ABOUT</a></li>
                    <li className=' p-3  hover:bg-yellow-400'><a href="#Skills">SKILLS</a></li>
                    <li className=' p-3  hover:bg-yellow-400'><a href="#Contact">CONTACT</a></li>
            </ul>
        </>
    )
}