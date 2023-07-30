import myGIF from '../assets/music.gif';
import audio from '../assets/Audio.png';
import music from '../assets/audio.mp3';
import React, { useState, useRef } from 'react';

function Header() {

    const [isPlaying, setIsPlaying] = useState(false);
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

    return ( 
        <>
        <div className="h-20 w-full text-xl flex justify-start items-center font-extrabold name">
            <div className="pl-40">
                <span className="text-[#8b31ff] text-[12px]">Hi, My name</span>
                <div className="border-b-4 border-[#8b31ff] mr-16">
                    <span className="text-[#006666]">
                        SAN
                    </span>
                    <span className="text-[#3bbbbb]">
                        TOSH.
                    </span>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                {
                    isPlaying 
                    ? <img src={myGIF} alt="gif" className='w-20 h-20 cursor-pointer' onClick={toggleGif} />
                    : <img src={audio} alt="gif" className='w-20 h-20 cursor-pointer' onClick={toggleGif} />
                }
                <audio ref={audioRef} onEnded={handleAudioEnd}>
                    <source src={music} type="audio/mpeg" />
                </audio>
                <div className='flex gap-10 text-[#46f7f7] items-center pr-10'>
                        <span>About</span>
                        <span>Skills</span>
                        <span>Certifications</span>
                        <span>Projects</span>
                        <span>Get in Touch</span>
                </div>
            </div>
        </div>
        </>
     );
}

export default Header;