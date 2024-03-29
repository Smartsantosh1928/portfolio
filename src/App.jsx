import Header from "./Pages/Header"
import Main from "./Pages/Main"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Certifications from "./Pages/Certifications"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Loading from "./Pages/Loader"
import Aos from "aos"
import { useEffect, useState } from "react"
import AnimatedCursor from "react-animated-cursor"

function App() {

  const [ loading, setLoading ] = useState(true)

  window.onload = () => {
    setLoading(false)
  }

  useEffect(() => { 
    const loader = setTimeout(() => {
      setLoading(false)
    }, 3000)
    Aos.init()
    return () => {
      clearTimeout(loader)
    }
  }, [])


  return(
    <>
      <AnimatedCursor 
        innerSize={8} 
        innerScale={1}
        showSystemCursor={true}
        outerSize={50}
        outerAlpha={0}
        hasBlendMode={true}
        trailingSpeed={10}
        clickables={['.link']}
        innerStyle={{
          backgroundColor: '#58f3f3',
          mixBlendMode: 'difference'
        }}
        outerStyle={{
          border: '2.5px solid #58f3f3'
        }}
      />
      <div className="bg-[#120e16] overflow-x-hidden">
        {
          loading ? 
          <Loading/>
          : <><Header/>
          <Main/>
          <About/>
          <Skills/>
          <Certifications/>
          <Projects/>
          <Contact/></>
        }
        
      </div>
    </>
  )  
}

export default App