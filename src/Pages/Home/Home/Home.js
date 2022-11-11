import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyPage from '../WhyPage/WhyPage';
import RecentWork from './RecentWork/RecentWork';

const Home = () => {
    useTitle('Home')
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