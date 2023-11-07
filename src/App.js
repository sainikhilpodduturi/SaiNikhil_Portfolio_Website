import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
