import { useEffect, useState,useRef } from "react";
import EducationLogo from "../assets/education-hat.svg";
import Programming from "../assets/web-programming.svg";
import Projects from "../assets/atom.svg";
import Tools from "../assets/painting-tools.svg";
import Certification from "../assets/certification.svg";
import CountUp from "react-countup";

function About() {

    const [ originalText, setOriginalText ] = useState("Greetings and a warm welcome!✨ I am thrilled to have you here to read my short and crisp introduction, exploring my creative space and professional journey. This portfolio is a reflection of my passion, dedication, and love for what I do. 😄 On 2004 , 03 of March a very passionate boy was born to the couples Solomon Raj and Thanga Pushpum . Yes , Your guess is correct, that's none other than myself. Everyone calls me Santosh and that's my Good name . Basically I'm a 2k kid . I was born and brought up in Sivakasi . And I had B.sc degree in ANJAC , Sivakasi and still in process of exploring .I followe my passion everyday. And I began my new venture of developing my skills. As an initiative, In My college we started a new company named Unijac Technologies by students . And I believe Hardships prepare ordinary people for an extraordinary destiny. But I never ever tried to give up. Basically I'm shrewd in investment so I invested in knowledge to get the best interest.")
    const [ text, setText ] = useState("")
    const [ readMore, SetReadMore ] = useState(false)
    const [ data, setData ] = useState([])

    useEffect(() => {
        setData(() => {
            return [
                { image : EducationLogo, count : 14, text : "Yrs of Education" },
                { image : Projects, count : 5, text : "Projects" },
                { image : Certification, count : 10, text : "Certifications" },
                { image : Tools, count : 30, text : "Tools" },
            ]
        })
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
        <div id="ABOUT" className="flex justify-center">
            <div className="w-[80%] h-[0.2px] bg-slate-300"></div>
        </div>
        <div className="h-auto w-full pb-10 mt-10 text-white name grid grid-cols-1 md:grid-cols-2">
            <div className="w-full">
                <span className="font-bold ml-8 md:ml-20 text-2xl text-[#8b31ff]">MySelf</span>
                <h6 className="md:mt-5 md:ml-20 text-justify md:pr-20 p-8 md:p-0">
                    {text}
                    <span className="cursor-pointer text-[#52317e] hover:text-[#8b31ff]" onClick={() => SetReadMore(!readMore) }>{readMore? "...Read Less" : "Read More..."}</span>
                </h6>
                <div className="mb-10 w-full h-[40%] flex justify-center md:items-center items-start">
                    <a href="https://ilaforplacements.com/api/pdf/s-santosh" target="_blank">
                        <button className="glow border-[#8b31ff] border px-5 py-2 rounded-lg">GET MY CV</button>
                    </a>
                </div>
            </div>
            <div className="md:flex justify-evenly items-center">
                <div className="grid grid-cols-2 gap-5 md:gap-20">
                    {data.map((e,i) => <div key={i} className="flex justify-center items-center flex-col">
                        <img src={e.image} alt="Education Qualification" className="w-16 h-16" />
                        <div className="flex">
                            <CountUp end={e.count} duration={5} enableScrollSpy scrollSpyDelay="1000" className="text-lg md:text-2xl" />+
                            <span className="text-lg md:text-2xl">{e.text}</span>
                        </div>
                    </div>)}
                </div>
                <div className="flex justify-center items-center flex-col">
                    <img src={Programming} alt="Education Qualification" className="w-16 h-16" />
                    <div>
                        <CountUp end={8} duration={5} enableScrollSpy scrollSpyDelay="1000" className="text-2xl" />
                        <span className="text-2xl">+ Programming Languages</span>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default About;