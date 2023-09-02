import { useEffect,useRef } from "react";
import Lottie from "lottie-web";
import anim from "../../public/footer/lottie.json"

function Contact() {

    function labelFocus(input) {
        input.target.previousElementSibling.classList.remove('hidden');
        input.target.previousElementSibling.classList.add('top-0', '-translate-y-4', 'text-[rgb(149,88,229)]', 'text-sm', 'opacity-100');
    }
    
    function labelBlur(input) {
        if (input.target.value === '') {
          input.target.previousElementSibling.classList.add('hidden');
          input.target.previousElementSibling.classList.remove('top-0', '-translate-y-4', 'text-[rgb(149,88,229)]', 'text-sm', 'opacity-100');
        }
    }

    const lottieRef = useRef(null);

    useEffect(() => {
        const animation = Lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: anim,
        });

        return () => animation.destroy();
    }, [Lottie]);
      
    return ( 
        <>
        <div className="flex justify-center">
            <div className="w-[80%] h-[0.2px] bg-slate-300"></div>
        </div>
        <div className="w-full h-[500px] md:p-10 grid grid-cols-1 md:grid-cols-2">
            <div className="m-auto">
                <div className="flex justify-center items-center md:items-start flex-col">
                    <span className="text-[rgb(115,6,255)] text-5xl font-extrabold">Contact</span>
                    <span className="text-gray-100 ml-1 mt-5 mb-10 md:mb-0 text-xl font-light">Get In Touch</span>
                </div>
                <div className="w-60 bg-orange-500 h-60 left-[60%] md:left-[32%] absolute rounded-[50%]"></div>
                <div className="flex justify-center items-start flex-col h-[500px]">
                <div className="w-60 bg-pink-500 h-60 -left-8 md:left-12 mt-32  absolute rounded-[50%]"></div>
                    <div className="card flex justify-center items-center flex-col gap-3 mb-20 p-10 w-[400px] h-auto relative rounded-3xl">
                        <div className="mb-4 flex justify-start items-start flex-col">
                            <label class="hidden text-[rgb(149,88,229)] text-sm font-bold -mb-3" for="name">
                                Name
                            </label>
                                <input onFocus={labelFocus} onBlur={labelBlur} className="p-1 pl-3 text-xl border-4 rounded-xl border-[rgb(115,6,255)] outline-none" placeholder="Name" type="text" name="name" id="name" />
                        </div>
                        <div className="mb-4 flex justify-start items-start flex-col">
                            <label class="hidden text-[rgb(149,88,229)] text-sm font-bold -mb-3" for="email">
                                Email
                            </label>
                            <input onFocus={labelFocus} onBlur={labelBlur} className="p-1 pl-3 text-xl border-4 rounded-xl border-[rgb(115,6,255)] outline-none" placeholder="Email" type="text" name="email" id="email" />
                        </div>
                        <div className="mb-4 flex justify-start items-start flex-col">
                            <label class="hidden text-[rgb(149,88,229)] text-sm font-bold -mb-3" for="desc">
                                Message
                            </label>
                            <textarea onFocus={labelFocus} onBlur={labelBlur} className="p-4 text-xl border-4 rounded-xl border-[rgb(115,6,255)] outline-none" placeholder="Message" id="desc"></textarea>                    
                        </div>
                        <button className="glow border-white border px-5 py-2 rounded-xl text-white">Send</button>
                    </div>
                </div>
            </div>
            <div ref={lottieRef} className="invisible w-[80%] m-auto bottom-1.5 lg:visible lg:right-12 2xl:right-16"></div>
        </div>
        <div className="top mt-32">
            <div className="background">
                <div className="background__one"></div>
                <div className="background__two"></div>
            </div>
        </div>
        <div className="w-full h-auto pt-20 bg-[rgb(115,6,255)]">
            <div className="flex justify-center items-center flex-col">
                <span className="text-xl md:text-3xl text-white font-bold">Feel Free to connect on Socail Media</span>
                <div className="flex justify-center items-center gap-3 mt-5 text-white font-extrabold">
                    <a href="mailto:smartsantosh1928@gmail.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/smartsantosh1928" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://github.com/smartsantosh1928" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://instagram.com/tosh_san03" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://twitter.com/ITZ_ME_SANTOSH/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                </div>
                <button className="mt-5 glow border-white border px-5 py-2 rounded-xl text-white">Let's Talk</button>
                <span className="text-lg text-white font-semibold mt-5">Developed with <span className="animate-pulse">💜</span> by Santosh</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,128L26.7,122.7C53.3,117,107,107,160,122.7C213.3,139,267,181,320,202.7C373.3,224,427,224,480,202.7C533.3,181,587,139,640,149.3C693.3,160,747,224,800,256C853.3,288,907,288,960,277.3C1013.3,267,1067,245,1120,218.7C1173.3,192,1227,160,1280,144C1333.3,128,1387,128,1413,128L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </div>
        </>
     );
}

export default Contact;