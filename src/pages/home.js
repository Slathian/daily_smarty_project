import React from 'react';

import Logo from '../components/logo';

const Home = () => {
    return (
        <div className='home-wrapper'>
            <div className="logo-main">
                <Logo height={"105px"}/>
            </div>
            <div className="search-bar-main">
            <input type="Search DailySmarty" name="daily-smarty-searchbar" id="homepage-input" />
            </div>
            <div className="recent-posts-main">
                <ul>
                    <li>post</li>
                    <li>post</li>
                    <li>post</li>
                </ul>
            </div>
        </div>
    )
};
export default Home;