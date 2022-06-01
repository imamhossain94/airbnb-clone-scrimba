import CardImage from "../src/images/card-image.png"
import './App.css';
import Navbar from '../src/components/Navbar.js';
import Hero from '../src/components/Hero.js';
import Card from '../src/components/Card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
          img={CardImage}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
      />
      <Card 
          img={CardImage}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
      />
    </div>
  );
}

export default App;
