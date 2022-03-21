import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';

function App() {
  return (
    <div className="container">
      <Nav/>
      <main>
        <Header/>
        <Header/>
      </main>
    </div>
  );
}

export default App;
