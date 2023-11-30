import myGIF from '../assets/music.gif';
import audio from '../assets/Audio.png';
import music from '../assets/audio.mp3';
import React, { useState, useEffect, useRef } from 'react';

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
        <div id='HOME' className={`h-16 sticky top-0 z-30 mt-3 w-full text-xl flex justify-start items-center name`}>
            <div className='w-full flex justify-end'>
                {
                    isPlaying 
                    ? <img src={myGIF} alt="gif" className='w-20 h-20 cursor-pointer' onClick={toggleGif} />
                    : <img src={audio} alt="gif" className='w-20 h-20 cursor-pointer' onClick={toggleGif} />
                }
                <audio ref={audioRef} onEnded={handleAudioEnd}>
                    <source src={music} type="audio/mpeg" />
                </audio>
            </div>
            <button className="mr-5 glow border-[#8b31ff] border text-white w-[60%] md:w-48" >GET In Touch</button>
        </div>
        </>
     );
}

export default Header;