import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar.js';
import Hero from '../src/components/Hero.js';
import Card from '../src/components/Card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
