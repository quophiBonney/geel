import React from 'react';
import 'aos/dist/aos.css';
import './Overall.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import VariousService from './components/VariousService';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <VariousService/>
      <Services/>
      <About/>
    </div>
  );
}

export default App;
