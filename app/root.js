import React, { Component } from 'react';
import HeadNav from './components/headnav';
import ImgCon from './components/imgcon';
import UserMessage from './components/usermessage';
import AboutMe from './components/aboutme';
import FunFact from './components/funfact';
import Twitter from './components/twitter';
import Contact from './components/contact';


export default class Root extends Component {
    render() {
        return (
            <div>
                <HeadNav />
                <ImgCon />
                <UserMessage />
                <AboutMe />
                <FunFact />
                <Twitter/>
                <Contact/>
            </div>
        );
    }
};