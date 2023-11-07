import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Skills />
    </div>
  );
}

export default App;
