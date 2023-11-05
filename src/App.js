import Education from "./components/Education";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
