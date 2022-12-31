// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Carousel } from 'antd';
// import { Alert, Space } from 'antd';
import Header from './Components/Header';
 import Cars_slider from './Components/Cars_slider';
 import Carousel from './Components/Carousel';
import Slider from './Slider';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Slider /> */}
      <Carousel />
      {/* <Cars_slider /> */}
      
     
    </div>
  );
}

export default App;
