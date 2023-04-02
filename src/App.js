import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <HeroSection />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
