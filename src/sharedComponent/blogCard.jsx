import React, { Component } from 'react';

class BlogCard extends Component {
    render(props) {
        return (
            <div>
                <div className="blog-box">
                     <figure><img src={this.props.Img} alt="#"/>
                        <span>{this.props.date}</span>
                     </figure>
                     <div className="travel">
                        <span>Post  By :  Travel  Agency</span> 
                        <p><strong className="Comment"> 06 </strong>  Comment</p>
                        <p><strong className="like">05 </strong>Like</p>
                     </div>
                     <h3>{this.props.Title}</h3>
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>
                  </div>
            </div>
        );
    }
}

export default BlogCard;