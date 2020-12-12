import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfileContent from "./components/ProfileContent/ProfileContent";


const App = ()   => {
  return (
    <div className='wrapper'>
        <Header />
        <Navigation />
        <ProfileContent />
    </div>

  );
}


export default App;
