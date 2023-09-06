import HtmlIcon from "../assets/html-file.svg"
import CssIcon from "../assets/css.svg"
import JSIcon from "../assets/javascript.svg"
import JSPIcon from "../assets/logos/spring.svg"
import CIcon from "../assets/logos/c.svg"
import CPIcon from "../assets/logos/c++.svg"
import JAVAIcon from "../assets/logos/java.svg"
import PYIcon from "../assets/logos/python.svg"
import PHPIcon from "../assets/logos/php.svg"
import DNIcon from "../assets/logos/dotnet.svg"
import CSIcon from "../assets/logos/csharp.svg"
import ReactIcon from "../assets/logos/react.svg"
import RNIcon from "../assets/logos/rn.svg"
import ExpressIcon from "../assets/logos/express.svg"
import ElectronIcon from "../assets/logos/electron.svg"
import NodeIcon from "../assets/logos/node-js.svg"
import BCIcon from "../assets/logos/metamask-icon.svg"
import MDBIcon from "../assets/logos/mongodb.svg"
import SQLIcon from "../assets/logos/mysql.svg"
import OracleIcon from "../assets/logos/oracle.svg"
import DockerIcon from "../assets/logos/docker.svg"
import ViteIcon from "../assets/logos/vite.svg"
import GitIcon from "../assets/logos/git.svg"
import GithubIcon from "../assets/logos/github.svg"
import FBIcon from "../assets/logos/fb.svg"
import NGINXIcon from "../assets/logos/nginx.svg"
import NPMIcon from "../assets/logos/npm.svg"
import PMIcon from "../assets/logos/postman.svg"
import PuttyIcon from "../assets/logos/putty.svg"
import TuxIcon from "../assets/logos/tux.svg"
import WinIcon from "../assets/logos/win.svg"
import AndroidIcon from "../assets/logos/android.svg"
import VSIcon from "../assets/logos/vs.svg"
import XamppIcon from "../assets/logos/xampp.svg"

function Skills() {
    return ( 
        <>
        <div id="SKILLS" className="flex justify-center">
            <div className="w-[80%] h-[0.2px] bg-slate-300"></div>
        </div>
        <div className="relative">
            <div class="bubbles h-[850px] md:h-[800px]">
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
        <div className="w-full h-[850px] md:h-[800px] text-white name grid grid-cols-1 md:grid-cols-2">
            <div className="md:m-20 p-5 flex justify-center items-start flex-col gap-5 w-full ">
                <span>Skills</span>
                <span className="text-4xl font-extrabold text-[#8b31ff]">My Skills</span>
                <span className="md:w-[60%] w-full">
                    <p className="text-2xl font-medium text-justify">I like to take responsibility to craft aesthetic user experience using modern front-end Architechture.</p>
                </span>
                <div className="w-full md:mt-10">
                    <span className="text-xl">Languages & Tools</span>
                    <div className="w-full grid grid-cols-9 md:grid-cols-12 gap-1 py-6">
                        <img src={CIcon} alt="HTML" />
                        <img src={CPIcon} alt="HTML" />
                        <img src={JAVAIcon} alt="HTML" className="w-14 h-14" />
                        <img src={PYIcon} alt="HTML" />
                        <img src={PHPIcon} alt="HTML" />
                        <img src={CSIcon} alt="HTML"  />
                        <img src={HtmlIcon} alt="HTML" />
                        <img src={CssIcon} alt="css" />
                        <img src={JSIcon} alt="js" />
                        <img src={PMIcon} alt="js" />
                        <img src={GitIcon} alt="js" />
                        <img src={GithubIcon} alt="js" />
                    </div>                                  
                    <span className="text-xl">Libraries & Frameworks & Tools</span>
                    <div className="w-full grid grid-cols-8 md:grid-cols-12 gap-1 py-6">
                        <img src={ReactIcon} alt="HTML" />
                        <img src={NodeIcon} alt="HTML" />
                        <img src={ExpressIcon} alt="HTML" className="bg-gray-400 rounded-3xl" />
                        <img src={ElectronIcon} alt="HTML" className="bg-gray-400 rounded-3xl" />
                        <img src={RNIcon} alt="HTML"  />
                        <img src={JSPIcon} alt="HTML"  />
                        <img src={DNIcon} alt="HTML" />
                        <img src={ViteIcon} alt="js" />
                        <img src={DockerIcon} alt="js" />
                        <img src={VSIcon} alt="js" />
                        <img src={NGINXIcon} alt="js" />
                        <img src={FBIcon} alt="js" />
                    </div>
                    <div className="w-full grid -mt-8 md:mt-0 grid-cols-1 md:grid-cols-2">
                        <div >
                            <span className="text-xl">Databases</span>
                            <div className="w-full grid grid-cols-6 gap-2 py-4">
                                <img src={MDBIcon} alt="HTML"  />
                                <img src={SQLIcon} alt="HTML" />
                                <img src={OracleIcon} alt="HTML" className="" />
                                <img src={BCIcon} alt="HTML" className="" />
                            </div>                                  
                        </div>
                        <div className="md:-ml-20">
                            <span className="text-xl">Others</span>
                            <div className="w-full grid grid-cols-9 gap-1 py-6 ">
                                <img src={TuxIcon} alt="HTML"  />
                                <img src={WinIcon} alt="HTML" />
                                <img src={AndroidIcon} alt="HTML" />
                                <img src={PuttyIcon} alt="HTML" />
                                <img src={NPMIcon} alt="HTML" />
                                <img src={XamppIcon} alt="HTML"  />
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