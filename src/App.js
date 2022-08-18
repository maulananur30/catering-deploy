import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Card from './components/Card.jsx'




function App() {
  return (
    <div>
      <Navbar />
      <Welcome/>
      {/* <Hero /> */}
      <About />
      <Testimonials />
      <Card/>
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
