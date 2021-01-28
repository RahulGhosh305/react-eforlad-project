import React, { Component } from 'react';
import BlogCard from '../sharedComponent/blogCard.jsx'


// Assets
import Blog1 from '../assets/images/blog-image0.jpg';
import Blog2 from '../assets/images/blog-image.jpg';

class Blog extends Component {
    render() {
        return (
            <div>
                <div id="blog" className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Our Blog</h2>
                                    <span>Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                               <BlogCard Img={Blog1} Title='London Amazing Tour' date='4 Feb 2020'/>
                           </div>

                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                               <BlogCard Img={Blog2} Title='Beauty Of Nature'  date='21 Dec 2020'/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;