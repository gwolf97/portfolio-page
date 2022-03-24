import './App.css';
import React from 'react';
import Nav from './Components/Nav';
import MobileNav from './Components/MobileNav';
import {GiHamburgerMenu} from 'react-icons/gi'
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const [largerThanMobile, setLargerThanMobile ] = React.useState(window.innerWidth > 600)
  const [menuOpen, setMenuOpen] = React.useState(false)

  const updateMedia = () => {
    setLargerThanMobile(window.innerWidth > 600);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  function toggleMenu(){
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="container">
      {largerThanMobile && <Nav/>}
      {!largerThanMobile &&  <MobileNav menuOpen={menuOpen} toggle={toggleMenu}/>}
      <main>
      {!largerThanMobile && !menuOpen && <div className="hamburger" onClick={toggleMenu}><GiHamburgerMenu/></div>}
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
