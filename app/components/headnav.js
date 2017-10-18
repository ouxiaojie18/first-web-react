import React, { Component } from 'react';
import './headnav.less'
export default class HeadNav extends Component {
    render(){
        return(
            <div className="head-nav">
                <img src="static/images/logo.png" alt=""/>
                <a href="#"><span>HOME</span></a>
                <a href="#"><span className="active">WORK</span></a>
                <a href="#"><span>ABOUT</span></a>
                <a href="#"><span>CONTACT</span></a>
            </div>
        );
    }
};