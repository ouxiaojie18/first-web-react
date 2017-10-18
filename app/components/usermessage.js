import React, { Component } from 'react';
import './usermessage.less'
export default class UserMessage extends Component {
    render() {
        return (

            <div className="user-message">
                <div className="wrap">
                    <div className="content">
                        <div data-ride="carousel" className="carousel slide" id="carousel-example-generic">
                            <ol className="carousel-indicators">
                                <li className="active" data-slide-to="0" data-target="#carousel-example-generic"></li>
                                <li data-slide-to="1" data-target="#carousel-example-generic" className=""></li>
                                <li data-slide-to="2" data-target="#carousel-example-generic" className=""></li>
                                <li data-slide-to="3" data-target="#carousel-example-generic" className=""></li>
                                <li data-slide-to="4" data-target="#carousel-example-generic" className=""></li>
                            </ol>
                            <div role="listbox" className="carousel-inner">
                                <div className="item active">
                                    <div className="con-wrap">
                                        <img src="static/images/user.png" alt="" />
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                        <h1>DANIEL ElIAS - ATLAS NEWS1</h1>
                                    </div>

                                </div>
                                <div className="item">
                                    <div className="con-wrap">
                                        <img src="static/images/user.png" alt="" />
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                        <h1>DANIEL ElIAS - ATLAS NEWS2</h1>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="con-wrap">
                                        <img src="static/images/user.png" alt="" />
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                        <h1>DANIEL ElIAS - ATLAS NEWS3</h1>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="con-wrap">
                                        <img src="static/images/user.png" alt="" />
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                        <h1>DANIEL ElIAS - ATLAS NEWS4</h1>
                                    </div>
                                </div>
                                <div className="item">

                                    <div className="con-wrap">
                                        <img src="static/images/user.png" alt="" />
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                        <h1>DANIEL ElIAS - ATLAS NEWS5</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};