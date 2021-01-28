import React, { Component } from 'react';
import TravelCard from '../sharedComponent/travellingCard'

// Assets
import Icon1 from '../assets/icon/travel-icon.png';
import Icon2 from '../assets/icon/travel-icon2.png';
import Icon3 from '../assets/icon/travel-icon3.png';
import Icon4 from '../assets/icon/travel-icon4.png';

class Travel extends Component {
    render() {
        return (
            <div>
                {/* Traveling Start */}
                <div id="travel" className="traveling">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="titlepage">
                                    <h2>Select Offers For Traveling</h2>
                                    <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                 <TravelCard Img={Icon1} Title='Different Countrys' />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                 <TravelCard Img={Icon2} Title='Mountains Tours' />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                 <TravelCard Img={Icon3} Title='Bus Tours' />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                 <TravelCard Img={Icon4} Title='Summer Rest' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Travel;