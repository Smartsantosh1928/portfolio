import myGIF from '../assets/music.gif';
import audio from '../assets/Audio.png';
import music from '../assets/audio.mp3';
import React, { useState, useEffect, useRef } from 'react';

function Header() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const audioRef = useRef(null);

    const toggleGif = () => {
        if (isPlaying) 
            audioRef.current.pause();
        else
            audioRef.current.play();
        setIsPlaying((prevState) => !prevState);
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Add an event listener for the scroll event
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ( 
        <>
        <div id='HOME' className={`h-16 sticky top-0 ${isSticky ? 'card' : ''} z-30 w-full text-xl flex justify-start items-center name`}>
            <div className='image'>

            </div>
            <div className='w-full flex justify-end mr-10'>
                {
                    isPlaying 
                    ? <img src={myGIF} alt="gif" className='w-20 h-20 cursor-pointer' onClick={toggleGif} />
                    : <img src={audio} alt="gif" className='w-20 h-20 cursor-pointer' onClick={toggleGif} />
                }
                {!isOpen && 
                <div className='text-[#51b2b2] mt-5 block md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>}
                
                <audio ref={audioRef} onEnded={handleAudioEnd}>
                    <source src={music} type="audio/mpeg" />
                </audio>
                <div className={`${isOpen ? '-mr-10 z-10 card w-full h-screen mt-[548px]' : ' hidden md:flex'}`}>
                    {isOpen && 
                    <div className='text-[#51b2b2] mt-5 mr-10 flex justify-end md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 mt-3' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </div>}
                    <div className={`md:flex md:gap-10 text-[#46f7f7] items-center ${isOpen ? ' flex justify-center gap-8 flex-col ' : '' }`}>
                        <a href="#HOME"><span>HOME</span></a>
                        <a href="#ABOUT"><span>ABOUT</span></a>
                        <a href="#SKILLS"><span>SKILLS</span></a>
                        <a href="#CERTIFICATIONS"><span>CERTIFICATIONS</span></a>
                        <a href="#PROJECTS"><span>PROJECTS</span></a>
                        <a href="#CONTACT"><span>GET IN TOUCH</span></a>
                        {/* <span>About</span>
                        <span>Skills</span>
                        <span>Certifications</span>
                        <span>Projects</span>
                        <span>Get in Touch</span> */}
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Header;