export default function Skills(){
    return(
        <>
        <h1 id="Skills" className="text-xl text-yellow-400 text-center font-impact m-2">MY SKILLS</h1>
        <section className="h-auto text-center flex justify-center">
            <div className="w-[80%]">
                <div className="w-full h-5 border-2 border-yellow-400 my-2 rounded-full relative">
                    <div className="w-[80%] h-full bg-yellow-400 rounded-full text-xs">WEB DESIGN 80%</div>
                </div>
                <div className="w-full h-5 border-2 border-yellow-400 my-2 rounded-full relative">
                    <div className="w-[70%] h-full bg-yellow-400 rounded-full text-xs">WEB CODING 70%</div>
                </div>
                <div className="w-full h-5 border-2 border-yellow-400 my-2 rounded-full relative">
                    <div className="w-[80%] h-full bg-yellow-400 rounded-full text-xs">UI/UX 80%</div>
                </div>
            </div>
        </section>
        </>
    )
}