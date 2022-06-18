import './App.css';
import React, { useState } from 'react';
import {Navbar} from './Components/Navbar';
import {Services} from './Components/Services';
import {About }from './Components/About';
import {Contact} from './Components/Contact';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
    <Router>
    <LoadingBar
            color='#f11946'
            height={4}
            progress={progress}
          />
      <Navbar/>
      
      <Routes>
        <Route exact path="/"element={<Home setProgress={setProgress}/>}/>
        <Route exact path="/services"element={<Services setProgress={setProgress}/>}/>
        <Route exact path="/about"element={<About setProgress={setProgress}/>}/>
        <Route exact path="/contact"element={<Contact setProgress={setProgress}/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
