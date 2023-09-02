import Header from "./Pages/Header"
import Main from "./Pages/Main"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Certifications from "./Pages/Certifications"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"

function App() {
  return(
    <>
      <div className="bg-[#120e16]">
        <Header/>
        <Main/>
        <About/>
        <Skills/>
        <Certifications/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )  
}

export default App