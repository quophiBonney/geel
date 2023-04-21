import React from 'react';
import 'aos/dist/aos.css';
import './Overall.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Services/>
    </div>
  );
}

export default App;
