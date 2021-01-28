import React, { Component } from 'react';

class TravelCard extends Component {
    render(props) {
        return (
            <div>
                <div className="traveling-box">
                    <i><img src={this.props.Img} alt="icon" /></i>
                    <h3>{this.props.Title}</h3>
                    <p> going to use a passage of Lorem Ipsum, you need to be </p>
                    <div className="read-more">
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TravelCard;