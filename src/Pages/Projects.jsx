import Envirron from "../assets/Projects/Envirron.png"
import Web3 from "../assets/Projects/Web3.png"
import Kriyas from "../assets/Projects/Kriyas.png"
import Stopwatch from "../assets/Projects/Stop.png"
import { useState } from "react"

function Projects() {

    const [ projects, setProjects ] = useState([
        {
            name: "Envirron",
            desc: "Envirron is a website that I created to help people learn about the environment and how to help it. It is a website that I created to help people learn about the environment and how to help it.",
            image: Envirron,
            link: "Visit Website",
            url: "https://envirron.net"
        },
        {
            name: "Web3.js",
            desc: "Web3.js is a website that I created to help people learn about the environment and how to help it. It is a website that I created to help people learn about the environment and how to help it.",
            image: Web3,
            link: "Step into the future",
            url: "https://test.unijactech.com"
        },
        {
            name: "Kriyas",
            desc: "Kriyas is a website that I created to help people learn about the environment and how to help it. It is a website that I created to help people learn about the environment and how to help it.",
            image: Kriyas,
            link: "Learn more",
            url: "https://kriyasinstitution.in"
        }
    ])

    const stopWatch = {
        name: "Stopwatch",
        desc: "Stopwatch is a website that I created to help people learn about the environment and how to help it. It is a website that I created to help people learn about the environment and how to help it.",
        image: Stopwatch,
        link: "Download Now!",
        url: "https://mega.nz/file/CUEFXTwQ#qlyu3IigwJMq4BHGEqTvtDsr_G8xT3wZCRzMf-g7qbI",
        git: "https://github.com/Smartsantosh1928/stopwatch_desktop_app"
    }

    return ( 
        <>
        <div className="flex justify-center">
            <div className="w-[80%] h-[0.2px] bg-slate-300"></div>
        </div>
            <div className="w-full flex justify-center items-center mt-5 md:-mb-10">
                <span className=" text-xl md:text-4xl flex-wrap text-center font-medium md:font-extrabold text-[#8b31ff] uppercase">A Journey Through My Creative Achievements</span>
            </div>
        <div className="w-full h-auto p-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 md:p-14 mb-10 md:mb-0 gap-10">
                {projects.map(e =>  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={e.url}>
                        <img class="rounded-t-lg" src={e.image} alt="Envirron.net" />
                    </a>
                    <div class="p-5">
                        <a href={e.url}>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.desc}</p>
                        <div className="flex justify-center items-center">
                            <a href={e.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {e.link}
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className="flex justify-center items-center">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={stopWatch.url}>
                        <img class="rounded-t-lg" src={stopWatch.image} alt="Envirron.net" />
                    </a>
                    <div class="p-5">
                        <a href={stopWatch.url}>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{stopWatch.name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{stopWatch.desc}</p>
                        <div className="flex justify-center items-center gap-3">
                            <a href={stopWatch.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {stopWatch.link}
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                            <a href={stopWatch.git} class="inline-flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Get My Repo Here
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Projects;