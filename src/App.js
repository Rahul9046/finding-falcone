import React from 'react';
import './css/App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';

const number_of_inputs = 4;
function App() {
  return (
    <div className="App">
      <div className="header-main-container">
        <Header/>
      </div>
      <div className="content-main-container">
        <Home noOfInputs={number_of_inputs}/>
      </div>
      <div className="footer-main-container">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
