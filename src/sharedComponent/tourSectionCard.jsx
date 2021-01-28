import React, { Component } from 'react';


class TourCard extends Component {
    render(props) {
        return (
            <div>
                <div className="item">
                    <div className="img-responsive">
                         <img src={this.props.Img} alt="#" />
                    </div>
                    <h3>{this.props.Title}</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</p>
                </div>
            </div>
        );
    }
}

export default TourCard;