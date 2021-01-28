import React, {Component} from 'react';
import planeImg from '../assets/images/plane-img.png';

// Assets


class About extends Component {
    render(){
        return (
            <div>
                {/* About Start */}
                <div id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="titlepage">
                                    <h2>About  our travel agency</h2>
                                    <span> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="about-box">
                                        <p> <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure thereThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</span></p>
                                        <div className="palne-img-area">
                                            <img src={planeImg} alt="images"/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
            </div>
        )
    }
}
export default About;