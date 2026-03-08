import AsyncCert from "../assets/Certificates/Async.jpg"
import MM from "../assets/Certificates/MM.jpg"
import Java from "../assets/Certificates/Java.jpg"
import Reactjs from "../assets/Certificates/Reactjs.jpg"
import NFT from "../assets/Certificates/NFT.jpeg"
import MERN from "../assets/Certificates/MERN.jpg"
import { useState, useEffect } from "react";

function Certifications() {

    const [selected, setSelected] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const certs = [
        { img: Java, title: "Java Programming", issuer: "Certified Course", category: "language", color: "#FF3B30" },
        { img: Reactjs, title: "React.js Development", issuer: "Frontend Mastery", category: "frontend", color: "#5AC8FA" },
        { img: AsyncCert, title: "Async Programming", issuer: "Advanced Concepts", category: "language", color: "#FF9500" },
        { img: MERN, title: "MERN Stack", issuer: "Full Stack Development", category: "fullstack", color: "#34C759" },
        { img: NFT, title: "NFT & Blockchain", issuer: "Web3 Fundamentals", category: "web3", color: "#AF52DE" },
        { img: MM, title: "Modern Methods", issuer: "Software Engineering", category: "fullstack", color: "#007AFF" },
    ];

    const filters = [
        { key: 'all', label: 'All' },
        { key: 'language', label: 'Languages' },
        { key: 'frontend', label: 'Frontend' },
        { key: 'fullstack', label: 'Full Stack' },
        { key: 'web3', label: 'Web3' },
    ];

    const filteredCerts = activeFilter === 'all' ? certs : certs.filter(c => c.category === activeFilter);

    // Close modal on Escape
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') setSelected(null); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <>
        <section id="CERTIFICATIONS" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-40 -right-20 w-96 h-96 bg-[#007AFF] rounded-full opacity-[0.03] blur-[120px]"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#5856D6] rounded-full opacity-[0.02] blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007AFF]/10 border border-[#007AFF]/20 rounded-full mb-6 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#007AFF]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                        <span className="text-[#007AFF] text-sm font-medium">Certifications</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Achievements & <span className="bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] bg-clip-text text-transparent">Credentials</span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                        Courses and certifications from my learning journey — core programming to modern web technologies.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="inline-flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-2xl backdrop-blur-sm">
                        {filters.map(f => (
                            <button
                                key={f.key}
                                onClick={() => setActiveFilter(f.key)}
                                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    activeFilter === f.key
                                        ? 'bg-[#007AFF] text-white shadow-[0_0_20px_rgba(0,122,255,0.3)]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredCerts.map((cert, i) => (
                        <div
                            key={cert.title}
                            className="group relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                            onClick={() => setSelected(certs.indexOf(cert))}
                        >
                            {/* Card background with border */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-white/[0.02] rounded-[20px]"></div>
                            <div className="absolute inset-[1px] bg-[#0A0A0F] rounded-[19px]"></div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${cert.color}08, transparent 40%)` }}></div>

                            <div className="relative z-10">
                                {/* Image section */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/40 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0A0A0F]/30"></div>

                                    {/* Top badge */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-white/10">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cert.color }}></div>
                                        <span className="text-white/80 text-xs font-medium">{cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}</span>
                                    </div>

                                    {/* Expand icon */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 pt-3">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <h3 className="text-white font-semibold text-[15px] leading-tight group-hover:text-[#007AFF] transition-colors duration-300 truncate">
                                                {cert.title}
                                            </h3>
                                            <p className="text-gray-500 text-[13px] mt-1.5 flex items-center gap-1.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                                                </svg>
                                                {cert.issuer}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300" style={{ backgroundColor: `${cert.color}15` }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" style={{ color: cert.color }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="mt-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:via-white/10 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats row */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="200">
                    {[
                        { value: '6+', label: 'Certifications', icon: '🏆' },
                        { value: '4+', label: 'Technologies', icon: '⚡' },
                        { value: '100+', label: 'Hours of Learning', icon: '📚' },
                        { value: '∞', label: 'Curiosity', icon: '🚀' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:border-[#007AFF]/20 transition-all duration-300">
                            <span className="text-2xl">{stat.icon}</span>
                            <div className="text-2xl font-bold text-white mt-2">{stat.value}</div>
                            <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selected !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>

                    <div
                        className="relative max-w-4xl w-full max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'modalUp 0.3s ease-out' }}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute -top-14 right-0 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation arrows */}
                        <button
                            onClick={() => setSelected(selected > 0 ? selected - 1 : certs.length - 1)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm hidden md:flex"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setSelected(selected < certs.length - 1 ? selected + 1 : 0)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm hidden md:flex"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        {/* Modal content */}
                        <div className="rounded-[20px] overflow-hidden bg-[#1C1C1E] border border-white/10">
                            <img
                                src={certs[selected].img}
                                alt={certs[selected].title}
                                className="w-full h-auto max-h-[65vh] object-contain bg-black/50"
                            />
                            <div className="p-6 flex items-center justify-between border-t border-white/5">
                                <div>
                                    <h3 className="text-white font-bold text-xl">{certs[selected].title}</h3>
                                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: certs[selected].color }}></span>
                                        {certs[selected].issuer}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#34C759]/20 bg-[#34C759]/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#34C759]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    <span className="text-[#34C759] text-sm font-medium">Verified</span>
                                </div>
                            </div>
                        </div>

                        {/* Counter */}
                        <div className="text-center mt-4 text-gray-500 text-sm">
                            {selected + 1} / {certs.length}
                        </div>
                    </div>
                </div>
            )}
        </section>

        <style>{`
            @keyframes modalUp {
                from { opacity: 0; transform: translateY(20px) scale(0.97); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
        `}</style>
        </>
     );
}

export default Certifications;