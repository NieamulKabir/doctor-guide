import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import QuickTips from './QuickTips/QuickTips';
import DoctorsSchedule from './DoctorsSchedule/DoctorsSchedule';
import OurCare from './OurCare/OurCare';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <QuickTips />
            <DoctorsSchedule />
            <OurCare />
        </div>
    );
};

export default Home;