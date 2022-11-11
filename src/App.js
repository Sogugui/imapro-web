import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
    </div>
  );
}

export default App;
