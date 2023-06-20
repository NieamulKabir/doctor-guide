import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import QuickTips from './QuickTips/QuickTips';
import DoctorsSchedule from './DoctorsSchedule/DoctorsSchedule';
import OurCare from './OurCare/OurCare';
import Award from './Award/Award';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <QuickTips />
            <DoctorsSchedule />
            <OurCare />
            <Award />
        </div>
    );
};

export default Home;