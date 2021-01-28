import React, { Component } from 'react';


// Assets
import LondonBanner from '../assets/images/London.jpg';

class LondonSection extends Component {
    render() {
        return (
            <div>
                <div className="London">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Weekend in New York, London</h2>
                                    <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="London-img">
                            <figure><img src={LondonBanner} alt="img" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LondonSection;