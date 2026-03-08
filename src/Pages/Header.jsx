import React, { useState, useEffect } from 'react';

function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#HOME" },
        { name: "About", href: "#ABOUT" },
        { name: "Skills", href: "#SKILLS" },
        { name: "Projects", href: "#PROJECTS" }
    ];

    return (
        <>
        <nav id='HOME' className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#HOME" className="text-white hover:text-[#007AFF] transition-colors duration-300">
                    <svg className="w-7 h-7" viewBox="0 0 384 512" fill="currentColor">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                </a>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.href} className="text-gray-400 hover:text-[#007AFF] transition-colors duration-300 text-sm font-medium tracking-wide uppercase">
                            {link.name}
                        </a>
                    ))}
                    <a href="#CONTACT">
                        <button className="px-5 py-2 bg-[#007AFF] text-white rounded-full text-sm font-semibold hover:bg-[#0056b3] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,122,255,0.4)]">
                            Let's Talk
                        </button>
                    </a>
                </div>
                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        {mobileMenuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        }
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-white/5 mt-2">
                    <div className="flex flex-col items-center py-6 gap-4">
                        {navLinks.map((link, i) => (
                            <a key={i} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#007AFF] transition-colors duration-300 text-sm font-medium tracking-wide uppercase">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
        </>
     );
}

export default Header;