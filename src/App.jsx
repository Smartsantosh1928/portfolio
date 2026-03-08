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

function App() {

  const [ loading, setLoading ] = useState(true)

  window.onload = () => {
    setLoading(false)
  }

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false)
    }, 3000)
    Aos.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true
    })
    return () => {
      clearTimeout(loader)
    }
  }, [])


  return(
    <>
      <div className="bg-[#0A0A0F] overflow-x-hidden">
        {
          loading ?
          <Loading/>
          : <>
          <Header/>
          <Main/>
          <About/>
          <Skills/>
          <Certifications/>
          <Projects/>
          <Contact/>
          </>
        }

      </div>
    </>
  )
}

export default App