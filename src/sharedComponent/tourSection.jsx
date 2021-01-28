import React, { Component } from 'react';
import TourCard from '../sharedComponent/tourSectionCard.jsx';


// Assets
import Img1 from '../assets/images/1.jpg';
import Img2 from '../assets/images/2.jpg';
import Img3 from '../assets/images/3.jpg';


class TourSection extends Component {
    render() {
        return (
            <div>
                <div className="Tours">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>The Best Tours</h2>
                                    <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                                </div>
                            </div>
                        </div>

                        <section id="demos">
                           <div className="row">
                               <div className="col-sm-12 col-md-6 col-lg-4">
                                    <TourCard Img={Img1} Title='Holiday Tour' />
                               </div>

                               <div className="col-sm-12 col-md-6 col-lg-4">
                                    <TourCard Img={Img2} Title='New York' />
                               </div>

                               <div className="col-sm-12 col-md-6 col-lg-4" id='align'>
                                    <TourCard Img={Img3} Title='London Tour' />
                               </div>
                           </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourSection;