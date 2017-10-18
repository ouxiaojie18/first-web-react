import React, { Component } from 'react';
import './imgcon.less'


export default class ImgCon extends Component {
    constructor(props) {
        super(props);
        this.state={
            refresh:true
        };
    }
    _randomsort() {
        this.setState({refresh:false});
    }
    render() {
        var imgDatas = [];
        var points = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        points.sort(function (a, b) {    //function(a, b） 是一个排序指针方法

            return 0.5 - Math.random()   //  a -b 从小到大， b - a 从大到小 ，Math.random()  产生一个随机数，大于0.5 数组从小到大，小于0.5，数组从大到小排。

        });
        for (var i = 0; i < points.length; i++) {
            var src = "static/images/" + points[i] + ".png";
            imgDatas.push(<img key={i} src={src} alt=""/>);
        }
        var ImgLeft = (document.body.clientWidth - 838) / 2;
        var BtnLeft = (document.body.clientWidth - 75) / 2;
        return (
            <div className="img-content">
                <img className="big-bg" src="static/images/bg.png" alt="" />
                <div className="mask">
                    <div>
                        <a href="#"><img src="static/images/btn1.png" alt="" /></a>
                        <a href="#"><img src="static/images/btn2.png" alt="" /></a>
                        <a href="#"><img src="static/images/btn3.png" alt="" /></a>
                        <a href="#"><img src="static/images/btn4.png" alt="" /></a>
                    </div>
                </div>
                <div className="squre" style={{ marginLeft: ImgLeft }}>
                    {imgDatas}
                </div>
                <img className="refresh" src="static/images/refresh.png" alt=""  style={{ marginLeft: BtnLeft }} onClick={this._randomsort.bind(this)}/>
            </div>
        );
    }
};