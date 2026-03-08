import { useEffect, useState } from "react";
import CountUp from "react-countup";

function About() {

    const [ originalText ] = useState("Hey there! I'm Santosh, an iOS Developer at Zoho Corporation, based in Tenkasi. I work on Zoho Cliq — a powerful team communication app used by millions worldwide. With close to 2 years of hands-on experience building native iOS applications, I specialize in Swift, SwiftUI, and UIKit to create intuitive, performant, and pixel-perfect mobile experiences. My journey started as a B.Sc student at ANJAC, Sivakasi, where I fell in love with building things that people actually use. From co-founding Unijac Technologies as a student initiative to now shipping production-grade iOS features at Zoho, I believe in writing clean code that makes a real difference. When I'm not coding, you'll find me exploring new Apple frameworks, contributing to the iOS community, or fine-tuning app interactions to feel just right.")
    const [ text, setText ] = useState("")
    const [ readMore, SetReadMore ] = useState(false)

    const data = [
        { count: 10000, suffix: "+", text: "Lines of Swift Code", icon: "{ }" },
        { count: 500, suffix: "+", text: "Git Commits", icon: "Git" },
        { count: 15, suffix: "+", text: "iOS Frameworks Used", icon: "SDK" },
        { count: 100, suffix: "+", text: "Features Shipped", icon: "App" },
        { count: 6, suffix: "+", text: "Programming Languages", icon: "< />" },
        { count: 1000, suffix: "+", text: "Cups of Coffee", icon: "Cof" },
    ]

    useEffect(() => {
        if(!readMore){
            const trun = originalText.slice(0,290);
            setText(trun);
        }
        else{
            setText(originalText)
        }
    },[readMore])

    return (
        <>
        <section id="ABOUT" className="py-24 md:py-32 relative">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#007AFF] rounded-full opacity-[0.02] blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16" data-aos="fade-up">
                    <span className="text-[#007AFF] text-sm font-semibold tracking-widest uppercase">About</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Who I Am</h2>
                    <div className="w-16 h-1 bg-[#007AFF] rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left - About Text */}
                    <div data-aos="fade-right">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {text}
                            <span className="cursor-pointer text-[#007AFF] hover:text-[#5AC8FA] transition-colors ml-1" onClick={() => SetReadMore(!readMore) }>{readMore? "Read Less" : "Read More..."}</span>
                        </p>

                        <div className="mt-8 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#007AFF] rounded-full"></div>
                                <span className="text-gray-400"><span className="text-white font-medium">Role:</span> iOS Developer</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#34C759] rounded-full"></div>
                                <span className="text-gray-400"><span className="text-white font-medium">Company:</span> Zoho Corporation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#5AC8FA] rounded-full"></div>
                                <span className="text-gray-400"><span className="text-white font-medium">Product:</span> Zoho Cliq</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#FF9500] rounded-full"></div>
                                <span className="text-gray-400"><span className="text-white font-medium">Location:</span> Tenkasi, Tamil Nadu</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a href="#CONTACT">
                                <button className="px-8 py-3 bg-transparent border border-[#007AFF] text-[#007AFF] rounded-full font-semibold hover:bg-[#007AFF] hover:text-white transition-all duration-300">
                                    Get In Touch
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right - Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-left">
                        {data.map((e,i) => (
                            <div key={i} className="ios-card p-5 rounded-2xl text-center group">
                                <div className="text-[#007AFF] text-xs font-mono mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{e.icon}</div>
                                <div className="text-white text-2xl md:text-3xl font-bold">
                                    <CountUp end={e.count} duration={2.5} enableScrollSpy scrollSpyDelay={500} separator="," />
                                    <span className="text-[#007AFF]">{e.suffix}</span>
                                </div>
                                <span className="text-gray-400 text-sm mt-1 block">{e.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default About;