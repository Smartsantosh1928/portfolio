import Tilt from 'react-parallax-tilt';

function Projects() {

    const projects = [
        {
            name: "Zoho Cliq",
            role: "iOS Developer",
            desc: "A powerful team communication and collaboration platform used by millions. I contribute to building and maintaining the native iOS app — delivering real-time messaging, channels, bots, and seamless integrations.",
            tech: ["Swift", "SwiftUI", "UIKit", "Core Data", "WebSocket", "Push Notifications"],
            link: "View on App Store",
            url: "https://apps.apple.com/app/zoho-cliq/id1056478397",
        },
    ];

    return (
        <>
        <section id="PROJECTS" className="py-24 md:py-32 relative">
            <div className="absolute top-20 right-0 w-80 h-80 bg-[#007AFF] rounded-full opacity-[0.02] blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16" data-aos="fade-up">
                    <span className="text-[#007AFF] text-sm font-semibold tracking-widest uppercase">Projects</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">What I Build</h2>
                    <div className="w-16 h-1 bg-[#007AFF] rounded-full mt-4"></div>
                </div>

                <div className="flex justify-center">
                    {projects.map((e, idx) =>
                    <Tilt key={idx} tiltMaxAngleX={4} tiltMaxAngleY={4} className="w-full max-w-3xl">
                    <div className="ios-card rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex justify-center items-center py-14 bg-gradient-to-br from-[#007AFF]/5 to-[#5AC8FA]/5 relative overflow-hidden">
                            <div className="absolute w-64 h-64 border border-[#007AFF]/10 rounded-full"></div>
                            <div className="absolute w-96 h-96 border border-[#007AFF]/5 rounded-full"></div>
                            <div className="iphone-mockup-project">
                                <div className="iphone-dynamic-island"></div>
                                <div className="iphone-screen-project">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="text-4xl mb-3">💬</div>
                                        <div className="text-[#007AFF] font-bold text-xl">Zoho Cliq</div>
                                        <div className="text-gray-500 text-xs mt-1 mb-4">Team Communication</div>
                                        <div className="flex flex-col gap-2 w-full px-4">
                                            <div className="bg-[#007AFF]/10 rounded-xl p-2.5 flex items-center gap-2">
                                                <div className="w-6 h-6 bg-[#007AFF] rounded-full flex items-center justify-center text-white text-[10px]">S</div>
                                                <div>
                                                    <div className="text-white text-[10px] font-medium">Santosh</div>
                                                    <div className="text-gray-400 text-[8px]">Building something cool...</div>
                                                </div>
                                            </div>
                                            <div className="bg-white/5 rounded-xl p-2.5 flex items-center gap-2">
                                                <div className="w-6 h-6 bg-[#34C759] rounded-full flex items-center justify-center text-white text-[10px]">T</div>
                                                <div>
                                                    <div className="text-white text-[10px] font-medium">Team</div>
                                                    <div className="text-gray-400 text-[8px]">Sprint review at 3pm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iphone-home-indicator"></div>
                            </div>
                        </div>
                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">{e.name}</h3>
                                <span className="text-xs bg-[#007AFF]/15 text-[#007AFF] px-3 py-1 rounded-full font-medium">{e.role}</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6">{e.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {e.tech.map((t, ti) =>
                                    <span key={ti} className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/5 hover:border-[#007AFF]/30 hover:text-[#007AFF] transition-all duration-300">{t}</span>
                                )}
                            </div>
                            <a href={e.url} target="_blank" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#007AFF] rounded-full hover:bg-[#0056b3] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,122,255,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                                {e.link}
                            </a>
                        </div>
                    </div>
                    </Tilt>
                    )}
                </div>
            </div>
        </section>
        </>
     );
}

export default Projects;