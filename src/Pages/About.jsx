import { useEffect, useState,useRef } from "react";
import EducationLogo from "/about/edu.png";
import Programming from "/about/program.png";
import Projects from "/about/project.png";
import Tools from "/about/tools.png";
import Certification from "/about/cert.png";
import Leetcode from "/about/leetcode.png";
import CountUp from "react-countup";

function About() {

    const [ originalText, setOriginalText ] = useState("Greetings and a warm welcome!✨ I am thrilled to have you here to read my short and crisp introduction, exploring my creative space and professional journey. This portfolio is a reflection of my passion, dedication, and love for what I do. 😄 On 2004 , 03 of March a very passionate boy was born to the couples Solomon Raj and Thanga Pushpum . Yes , Your guess is correct, that's none other than myself. Everyone calls me Santosh and that's my Good name . Basically I'm a 2k kid . I was born and brought up in Sivakasi . And I had B.sc degree in ANJAC , Sivakasi and still in process of exploring .I followe my passion everyday. And I began my new venture of developing my skills. As an initiative, In My college we started a new company named Unijac Technologies by students . And I believe Hardships prepare ordinary people for an extraordinary destiny. But I never ever tried to give up. Basically I'm shrewd in investment so I invested in knowledge to get the best interest.")
    const [ text, setText ] = useState("")
    const [ readMore, SetReadMore ] = useState(false)
    const [ data, setData ] = useState([])
    const [ solutions, setSolutions ] = useState([])

    useEffect(() => {
        fetch("https://leetcodestats.cyclic.app/smartsantosh1928",{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setSolutions(data.totalSolved);
        })
        .catch(err => console.log(err))
    },[])

    useEffect(() => {
        setData(() => {
            return [
                { image : EducationLogo, count : 14, text : "Yrs of Education" },
                { image : Projects, count : 5, text : "Projects" },
                { image : Certification, count : 10, text : "Certifications" },
                { image : Tools, count : 30, text : "Tools" },
                { image : Programming, count : 8, text : "Programming Languages" },
                { image : Leetcode, count : solutions-1, text : "Leetcode Solutions" },
            ]
        })
        if(!readMore){
            const trun = originalText.slice(0,290);
            setText(trun);
        }
        else{
            setText(originalText)
        }
    },[readMore,solutions])

    return ( 
        <>
        <div className="h-auto w-full pb-10 text-white name flex justify-center items-center flex-col md:flex-row">
            <div className="md:w-[40%] ml-8 md:ml-20">
                <div className="flex flex-col gap-5">
                    <span>About</span>
                    <span className="font-bold text-4xl text-[#8b31ff]">MySelf</span>
                </div>
                <h6 className="md:mt-5 -ml-8 md:ml-0 text-justify text-xl md:pr-20 p-8 md:p-0">
                    {text}
                    <span className="cursor-pointer text-[#52317e] hover:text-[#8b31ff]" onClick={() => SetReadMore(!readMore) }>{readMore? "...Read Less" : "Read More..."}</span>
                </h6>
                <div className="mt-5 md:mt-10 w-full h-[40%] pb-10 md:pb-0 flex justify-center md:items-center items-start">
                    <a href="https://ilaforplacements.com/api/pdf/s-santosh" target="_blank">
                        <button className="glow border-[#8b31ff] border px-5 py-2 rounded-lg">Get My Resume</button>
                    </a>
                </div>
            </div>
            <div className="md:flex justify-evenly items-center w-[60%]">
                <div className="grid grid-cols-2 gap-8 w-full">
                    {data.map((e,i) => <div key={i} className="w-full flex justify-center items-center flex-col">
                        <img src={e.image} alt="Education Qualification" className="w-16 h-16" />
                        <div className="text-center">
                            <CountUp end={e.count} duration={2.5} enableScrollSpy scrollSpyDelay="1000" className="text-lg md:text-2xl" />
                            <span className="text-lg md:text-2xl">+ {e.text}</span>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        </>
     );
}

export default About;