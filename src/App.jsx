import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

import Spinner from './components/Spinner';
import About from './pages/About';
import Contact from './pages/Contect';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Project from './pages/Project';
import Service from './pages/Service';
import Skill from './pages/Skill';
import Experience from "./pages/experience"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-bgOne scroll-smooth font-serif text-hThree'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skill />
          <Service />
          <Project />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;