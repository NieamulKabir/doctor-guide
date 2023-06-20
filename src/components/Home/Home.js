import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import QuickTips from './QuickTips/QuickTips';
import DoctorsSchedule from './DoctorsSchedule/DoctorsSchedule';
import OurCare from './OurCare/OurCare';
import Award from './Award/Award';
import OurExpert from './OurExpert/OurExpert';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <QuickTips />
            <DoctorsSchedule />
            <OurCare />
            <Award />
            <OurExpert />
        </div>
    );
};

export default Home;