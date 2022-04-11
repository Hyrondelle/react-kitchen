import React from 'react';
import Navigation from '../components/navigation';
import Search from '../components/search';

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
            <h1>Home</h1>
            <Search/>
        </div>
    );
};

export default Home;