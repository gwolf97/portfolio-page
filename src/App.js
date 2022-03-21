import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="container">
      <Nav/>
      <main>
        <Header/>
        <About/>
        <Skills/>
      </main>
    </div>
  );
}

export default App;
