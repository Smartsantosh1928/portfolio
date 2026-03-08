function Skills() {

    const skillCategories = [
        {
            title: "Languages",
            icon: "</>",
            skills: [
                { name: "Swift", level: 90 },
                { name: "JavaScript", level: 70 },
                { name: "Java", level: 65 },
                { name: "Python", level: 60 },
                { name: "C / C++", level: 55 },
                { name: "Objective-C", level: 50 },
                { name: "HTML / CSS", level: 75 },
                { name: "PHP", level: 45 },
            ]
        },
        {
            title: "iOS Frameworks",
            icon: "iOS",
            skills: [
                { name: "UIKit", level: 90 },
                { name: "SwiftUI", level: 85 },
                { name: "Combine", level: 75 },
                { name: "Core Data", level: 70 },
                { name: "AVFoundation", level: 60 },
                { name: "WebKit", level: 65 },
                { name: "Push Notifications", level: 80 },
                { name: "URLSession", level: 85 },
            ]
        },
        {
            title: "Tools & Platforms",
            icon: "Dev",
            skills: [
                { name: "Xcode", level: 95 },
                { name: "Git / GitHub", level: 85 },
                { name: "CocoaPods", level: 80 },
                { name: "Swift Package Manager", level: 80 },
                { name: "Instruments", level: 70 },
                { name: "TestFlight", level: 75 },
                { name: "Docker", level: 50 },
                { name: "VS Code", level: 70 },
            ]
        },
        {
            title: "Architecture & Others",
            icon: "Sys",
            skills: [
                { name: "MVVM", level: 85 },
                { name: "MVC", level: 90 },
                { name: "Protocol-Oriented Design", level: 80 },
                { name: "REST APIs", level: 85 },
                { name: "Unit Testing (XCTest)", level: 70 },
                { name: "React / Node.js", level: 65 },
                { name: "MongoDB / MySQL", level: 60 },
                { name: "CI/CD Pipelines", level: 55 },
            ]
        }
    ];

    return (
        <>
        <section id="SKILLS" className="py-24 md:py-32 relative">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5AC8FA] rounded-full opacity-[0.02] blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16" data-aos="fade-up">
                    <span className="text-[#007AFF] text-sm font-semibold tracking-widest uppercase">Skills</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Tech Stack</h2>
                    <div className="w-16 h-1 bg-[#007AFF] rounded-full mt-4"></div>
                    <p className="text-gray-400 text-lg mt-4 max-w-2xl">
                        From native iOS development to full-stack fundamentals — a blend of mobile expertise and general programming proficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="ios-card rounded-2xl p-8" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center">
                                    <span className="text-[#007AFF] text-xs font-bold font-mono">{category.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill, sidx) => (
                                    <div key={sidx} className="group">
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                                            <span className="text-xs text-gray-500 group-hover:text-[#007AFF] transition-colors">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className="h-full rounded-full skill-bar"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
     );
}

export default Skills;