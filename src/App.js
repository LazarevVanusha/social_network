import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Navigation/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={ProfileContent}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
