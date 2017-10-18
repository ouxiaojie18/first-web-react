import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './contact.less'
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letterWidth: '',
            letterHeight: '',
        };
    }
    // componentDidMount() {
    //     var letterDOM = ReactDOM.findDOMNode(this.refs.letter),
    //         letterWidth = letterDOM.scrollWidth,
    //         letterHeight = letterDOM.scrollHeight;
    //     this.setState({
    //         letterWidth: letterWidth,
    //         letterHeight:letterHeight
    //     });
    //     alert(letterWidth);

    // }
    _scrollToTop(){
        window.scrollTo(0,0);
    }
    render() {

        // var letterWidth=this.refs.letter.clientWidth;
        // alert(this.state.letterWidth);
        return (
            <div className="contact">
                <div className="wrap">
                    <h1>SOME FUN NUMBERS</h1>
                    <img src="static/images/icon2.png" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.</p>
                    <div className="icon">
                        <img src="static/images/iconbird.png" alt="" />
                        <img src="static/images/iconbe.png" alt="" />
                        <img src="static/images/iconin.png" alt="" />
                        <img src="static/images/icondot.png" alt="" />
                    </div>
                    <img src="static/images/letter.png" ref="letter" className="letter" alt="" />
                    <div className="message clearfix">
                        <div className="title">Send me a message</div>
                        <input className="textone" type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Message"/>
                        <button>send</button>
                    </div>
                    <h1>SEE YOU SOON</h1>
                    <img src="static/images/icon3.png" alt="" />
                    <p>Thanks for visit my home. I hope you come back</p>
                    <img src="static/images/top.png" alt="" onClick={this._scrollToTop.bind(this)}/>
                </div>
                <div className="footer">
                    <div>© Copyright 2014 by Joan Costa. All Rights Reserved</div>
                </div>
            </div>
        );
    }
};