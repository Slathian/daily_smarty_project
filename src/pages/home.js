import React from 'react';

import Logo from '../components/logo';
import SearchBar from '../components/search-bar';
import RecentPosts from '../components/recent-posts';

const Home = () => {
    return (
        <div className='home-wrapper'>
            
            <Logo height={"105px"}/>

            <SearchBar />

            <RecentPosts />
            
        </div>
    )
};
export default Home;