import React, { Component } from 'react';

// Assets
import Image1 from '../assets/images/1.png';
import Image2 from '../assets/images/2.png';
import Image3 from '../assets/images/3.png';

class HeaderWhite extends Component {
    render() {
        return (
            <div>
                <div className="header_white_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="header_information">
                                    <ul>
                                        <li><img src={Image1} alt="#" /> 145.street road new York</li>
                                        <li><img src={Image2} alt="#" /> +71  5678954378</li>
                                        <li><img src={Image3} alt="#" /> Demo@hmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderWhite;