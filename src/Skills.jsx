export default function Skills(){
    const skillList = [
        { name: "WEB DESIGN", value: "80%" },
        { name: "WEB CODING", value: "70%" },
        { name: "UI/UX DESIGN", value: "85%" }
    ];

    return (
        <section id="Skills" className="py-20 px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-yellow-400 text-center font-impact tracking-wider mb-12">
                MY SKILLS
            </h2>
            
            <div className="space-y-6">
                {skillList.map((skill, index) => (
                    <div key={index} className="w-full">
                        {/* Label & Persentase ditaruh di atas bar agar responsif */}
                        <div className="flex justify-between items-center mb-2 font-rubik text-sm md:text-base text-yellow-400 font-medium tracking-wide">
                            <span>{skill.name}</span>
                            <span>{skill.value}</span>
                        </div>
                        {/* Bar lintasan */}
                        <div className="w-full h-4 bg-black border border-yellow-400/30 rounded-full overflow-hidden shadow-inner">
                            {/* Bar isian */}
                            <div 
                                style={{ width: skill.value }} 
                                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full relative shadow-[0_0_10px_rgba(250,204,21,0.3)]"
                            >
                                {/* Efek Kilatan/Glossy */}
                                <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}