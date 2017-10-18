import React, { Component } from 'react';
import './aboutme.less'
export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <div className="about-con">
                    <div className="about-one">
                        <img src="static/images/about1.png" alt="" />
                        <h1>SOCIAL EVENTS</h1>
                        <div className="line"></div>
                        <h3>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</h3>
                    </div>
                    <div className="about-one">
                        <img src="static/images/about2.png" alt="" />
                        <h1>NATURE & ANIMAL LIFE</h1>
                        <div className="line"></div>
                        <h3>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</h3>
                    </div>
                    <div className="about-one">
                        <img src="static/images/about3.png" alt="" />
                        <h1>SPORT EVENTS</h1>
                        <div className="line"></div>
                        <h3>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</h3>
                    </div>
                </div>
                <div className="about-img">
                    <div className="about-word">
                        <h1>ABOUT ME</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. </h3>
                        <h3>Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at. </h3>
                    </div>
                    
                    <div className="triangle-left"></div>
                    <img src="static/images/aboutimg1.png" alt=""/>
                    <img src="static/images/aboutimg2.png" alt=""/>
                    <img src="static/images/aboutimg3.png" alt=""/>
                </div>
            </div>
        );
    }
};