import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


// Custom Component
import HeaderWhite from '../sharedComponent/headerWhiteSection.jsx'
import Navbar from '../sharedComponent/navbar.jsx';
import BannerMain from '../sharedComponent/bannerMain.jsx';
import About from '../sharedComponent/about.jsx';
import Travel from '../sharedComponent/traveling.jsx';
import LondonBanner from '../sharedComponent/london.jsx';
import TourSection from '../sharedComponent/tourSection';
import AmazineSection from '../sharedComponent/amazineSection.jsx';
import Blog from '../sharedComponent/blog.jsx';
import Footer from '../sharedComponent/footer.jsx';


class HomePage extends Component {
    render() {
        return (
            <div>
                {/* Head start */}
                <Helmet>
                    <title>Eforlad Travel</title>
                </Helmet>

                {/* Body start */}
                <body class="main-layout">
                    
                    <header>
                        {/* Header Component*/}
                        <div class="header">
                            <HeaderWhite />
                            <Navbar />
                        </div>
                    </header>

                    <section>
                        {/* Banner Component */}
                        <BannerMain />
                    </section>

                    {/* About Component */}
                    <About />

                    {/* Travel Component */}
                    <Travel />

                    {/* LondonBanner Component */}
                    <LondonBanner />

                    {/* TourSection Component */}
                    <TourSection />

                    {/* AmazineSection Component */}
                    <AmazineSection />

                    {/* Blog Component */}
                    <Blog />

                    
                    <footer>
                        {/* Footer Component */}
                        <Footer />
                    </footer>

                </body>
            </div>
        );
    }
}

export default HomePage;