import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <Header/>

            <div className='wrapper'>
                <Navigation/>
                <div class='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={ProfileContent}/>*/}

                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <ProfileContent state={props.state.profilePage}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
