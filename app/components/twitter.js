import React, { Component } from 'react';
import './twitter.less'
export default class Twitter extends Component {
    render() {
        return (

            <div className="twitter">
                <div className="wrap">
                    <div className="content">
                        <div data-ride="carousel" className="carousel slide" id="carousel1-example-generic">
                            <ol className="carousel-indicators">
                                <li className="active" data-slide-to="0" data-target="#carousel1-example-generic"></li>
                                <li data-slide-to="1" data-target="#carousel1-example-generic" className=""></li>
                                <li data-slide-to="2" data-target="#carousel1-example-generic" className=""></li>
                                <li data-slide-to="3" data-target="#carousel1-example-generic" className=""></li>
                                <li data-slide-to="4" data-target="#carousel1-example-generic" className=""></li>
                            </ol>
                            <div role="listbox" className="carousel-inner">
                                <div className="item active">
                                    <div className="con-wrap">
                                        <img src="static/images/bird.png" alt="" />
                                        <p><strong>AOD New York  @aod  </strong><span> /  35 min</span></p>
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                    </div>

                                </div>
                                <div className="item">
                                    <div className="con-wrap">
                                        <img src="static/images/bird.png" alt="" />
                                        <p><strong>AOD New York  @aod  </strong><span> /  35 min</span></p>
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="con-wrap">
                                        <img src="static/images/bird.png" alt="" />
                                        <p><strong>AOD New York  @aod  </strong><span> /  35 min</span></p>
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="con-wrap">
                                        <img src="static/images/bird.png" alt="" />
                                        <p><strong>AOD New York  @aod  </strong><span> /  35 min</span></p>
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                    </div>
                                </div>
                                <div className="item">

                                    <div className="con-wrap">
                                        <img src="static/images/bird.png" alt="" />
                                        <p><strong>AOD New York  @aod  </strong><span> /  35 min</span></p>
                                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
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