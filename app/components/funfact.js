import React, { Component } from 'react';
import './funfact.less'
export default class FunFact extends Component {
    render() {
        return (
            <div className="fun-fact">
                <h1>SOME FUN NUMBERS</h1>
                <img src="static/images/icon.png" alt="" />
                <div className="fact-wrap">
                    <div className="fact-one">
                        <img src="static/images/myphoto.png" alt="" />
                        <p>3200</p>
                        <h3>Hours of Work</h3>
                    </div>
                    <div className="fact-one">
                        <img src="static/images/my.png" alt="" />
                        <p>120</p>
                        <h3>Hours of Work</h3>
                    </div>
                    <div className="fact-one">
                        <img src="static/images/mypicture.png" alt="" />
                        <p>36</p>
                        <h3>Hours of Work</h3>
                    </div>
                    <div className="fact-one">
                        <img src="static/images/myfly.png" alt="" />
                        <p>12</p>
                        <h3>Hours of Work</h3>
                    </div>
                </div>
            </div>
        );
    }
};