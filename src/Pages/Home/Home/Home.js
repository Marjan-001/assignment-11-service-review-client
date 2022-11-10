import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyPage from '../WhyPage/WhyPage';
import RecentWork from './RecentWork/RecentWork';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyPage></WhyPage>
            <RecentWork></RecentWork>
        </div>
    );
};

export default Home;