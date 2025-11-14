import { useState } from "react"
export default function Skills(){
    return(
        <>
        <h1 id="Skills" className="text-xl text-yellow-400 text-center font-impact m-2 lg:text-3xl  scroll-smooth">MY SKILLS</h1>
        <section className="h-auto text-center flex justify-center">
            <div className="w-[80%]">
                <div className="w-full h-5 border-2 border-yellow-400 my-2 rounded-full relative lg:h-7">
                    <div id="design" className="w-[80%] h-full bg-yellow-400 rounded-full text-xs font-rubik lg:text-lg">WEB DESIGN 80%</div>
                </div>
                <div className="w-full h-5 border-2 border-yellow-400 my-2 rounded-full relative lg:h-7">
                    <div id="coding" className="w-[70%] h-full bg-yellow-400 rounded-full text-xs font-rubik lg:text-lg">WEB CODING 70%</div>
                </div>
                <div className="w-full h-5 border-2 border-yellow-400 my-2 rounded-full relative lg:h-7">
                    <div id="uiux" className="w-[85%] h-full bg-yellow-400 rounded-full text-xs font-rubik lg:text-lg">UI/UX 85%</div>
                </div>
            </div>
        </section>
        </>
    )
}