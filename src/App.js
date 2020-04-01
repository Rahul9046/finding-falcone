import React from 'react';
import './css/App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <div className="header-main-container">
        <Header/>
      </div>
      <div className="body-main-container"></div>
      <div className="footer-main-container">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
