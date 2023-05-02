import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import VariousService from './components/VariousService';
import { BrowserRouter } from 'react-router-dom';
import Counter from './components/Counter';
import Footer from './components/Footer';
function App() {
  AOS.init();
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Banner/>
      <VariousService/>
      <Services/>
      <Counter/>
      <About/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
