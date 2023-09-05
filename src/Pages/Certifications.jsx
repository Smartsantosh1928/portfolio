import AsyncCert from "../assets/Certificates/Async.jpg"
import MM from "../assets/Certificates/MM.jpg"
import Java from "../assets/Certificates/Java.jpg"
import Reactjs from "../assets/Certificates/Reactjs.jpg"
import NFT from "../assets/Certificates/NFT.jpeg"
import MERN from "../assets/Certificates/MERN.jpg"
import { useState } from "react";

function Certifications() {

    const [certs, setCerts] = useState([Java, Reactjs, AsyncCert, MERN, NFT, MM])

    return ( 
        <>
        <div id="CERTIFICATIONS" className="flex justify-center">
            <div className="w-[80%] h-[0.2px] bg-slate-300"></div>
        </div>
        <div className="flex justify-center items-center mt-5 md:mt-10">
            <div className="text-xl md:text-4xl font-medium md:font-extrabold text-[#8b31ff] text-center uppercase">Certificates Completed</div>
        </div>
        <div className="w-full h-[450px] overflow-hidden -mt-12">
                <div className="h-full w-full">
                    <div className="cert-animation flex items-center relative h-full w-fit gap-7">
                        {certs.map((e,i) => <div accessKey={i} className="flex justify-center items-center">
                            <div className="gradient-border mt-10" id="box">
                                <img src={e} alt="Certificate" className="certificate-image p-1 z-10" />
                            </div>
                        </div>)}
                        {certs.map((e,i) => <div accessKey={i*2} className="flex justify-center items-center">
                            <div className="gradient-border mt-10" id="box">
                                <img src={e} alt="Certificate" className="certificate-image p-1 z-10" />
                            </div>
                        </div>)}
                    </div>
                </div>
        </div>
        </>
     );
}

export default Certifications;
