import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import QuickTips from './QuickTips/QuickTips';
import DoctorsSchedule from './DoctorsSchedule/DoctorsSchedule';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <QuickTips />
            <DoctorsSchedule />
        </div>
    );
};

export default Home;