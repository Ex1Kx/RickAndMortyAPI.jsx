import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {AboutUs} from './pages/AboutUs'
import {News} from './pages/News'
import {SignIn} from './pages/SignIn'
import {Anonymous} from './pages/Anonymous'
import { Posts } from './pages/Posts';
import {NoFound} from './pages/NoFound'
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="about_us" element={<AboutUs/>}/>
      <Route path="/sign_in" element={<SignIn/>}/>
      <Route path="/anonymous" element={<Anonymous/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
    </Router>
    </>
    );
    
}

export default App;
