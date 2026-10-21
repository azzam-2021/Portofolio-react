import { motion as Motion } from "motion/react";

export default function Skills(){
    const skillList = [
        { name: "WEB DESIGN", value: "80%" },
        { name: "WEB CODING", value: "70%" },
        { name: "UI/UX DESIGN", value: "85%" }
    ];

    return (
        <section id="Skills" className="py-20 px-6 max-w-3xl mx-auto">
            <Motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl text-yellow-400 text-center font-impact tracking-wider mb-14"
            >
                MY SKILLS
            </Motion.h2>
            
            <div className="space-y-8">
                {skillList.map((skill, index) => (
                    <Motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.45, delay: index * 0.12 }}
                        className="w-full group"
                    >
                        {/* Label & Persentase */}
                        <div className="flex justify-between items-center mb-2.5 font-rubik text-sm text-zinc-400 group-hover:text-yellow-400 transition-colors duration-300 tracking-widest font-medium">
                            <span>{skill.name}</span>
                            <span className="text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded text-xs border border-yellow-400/20">{skill.value}</span>
                        </div>
                        {/* Bar Lintasan */}
                        <div className="w-full h-3 bg-zinc-950 border border-zinc-800 rounded-full overflow-hidden shadow-inner p-[2px]">
                            {/* Bar Isian */}
                            <Motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: skill.value }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, delay: 0.2 + index * 0.12, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-yellow-300 rounded-full relative shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-500"
                            >
                                {/* Efek Kilatan Glossy */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                            </Motion.div>
                        </div>
                    </Motion.div>
                ))}
            </div>
        </section>
    );
}