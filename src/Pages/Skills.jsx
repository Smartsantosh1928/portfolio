import HtmlIcon from "../assets/html-file.svg"
import CssIcon from "../assets/css.svg"
import JSIcon from "../assets/javascript.svg"

function Skills() {
    return ( 
        <>
        <div className="flex justify-center">
            <div className="w-[80%] h-[0.2px] bg-slate-300"></div>
        </div>
        <div className="relative">
            <div class="bubbles">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
            </div>
        </div>
        <div className="w-full h-[650px] md:h-[800px] text-white name flex">
            <div className="md:m-20 p-5 flex justify-center items-start flex-col gap-5 w-full md:w-[70%]">
                <span>Skills</span>
                <span className="text-4xl font-extrabold text-[#8b31ff]">My Skills</span>
                <span className="md:w-[60%] w-full">
                    <p className="text-2xl font-medium text-justify">I like to take responsibility to craft aesthetic user experience using modern front-end Architechture.</p>
                </span>
                <div className="w-full md:mt-10">
                    <span className="text-xl">Languages & Tools</span>
                    <div className="w-full grid grid-cols-12 gap-1 py-6">
                        <img src={HtmlIcon} alt="HTML" />
                        <img src={CssIcon} alt="HTML" />
                        <img src={JSIcon} alt="HTML" />
                        <img src={HtmlIcon} alt="HTML" />
                        <img src={CssIcon} alt="HTML" />
                        <img src={JSIcon} alt="HTML" />
                    </div>                                  
                    <span className="text-xl">Libraries & Frameworks</span>
                    <div className="w-full grid grid-cols-12 gap-1 py-6">
                        <img src={HtmlIcon} alt="HTML"  />
                        <img src={CssIcon} alt="HTML" />
                        <img src={JSIcon} alt="HTML"  />
                        <img src={HtmlIcon} alt="HTML"  />
                        <img src={CssIcon} alt="HTML"  />
                        <img src={JSIcon} alt="HTML"  />
                    </div>
                    <div className="w-full grid grid-cols-2">
                        <div >
                            <span className="text-xl">Databases</span>
                            <div className="w-full grid grid-cols-7 gap-1 py-6">
                                <img src={HtmlIcon} alt="HTML"  />
                                <img src={CssIcon} alt="HTML" />
                                <img src={JSIcon} alt="HTML" />
                            </div>                                  
                        </div>
                        <div >
                            <span className="text-xl">Others</span>
                            <div className="w-full grid grid-cols-5 gap-4 py-6">
                                <img src={HtmlIcon} alt="HTML"  />
                                <img src={CssIcon} alt="HTML" />
                                <img src={JSIcon} alt="HTML" />
                            </div>                                  
                        </div>
                    </div>                          
                </div>
            </div>
            {/* <div className="w-[30%] h-[30%] bg-[#8b31ff] shape ml-40 mt-20">
            </div> */}
        </div>
        </>
     );
}

export default Skills;