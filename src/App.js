import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="container">
      <Nav/>
      <main>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
