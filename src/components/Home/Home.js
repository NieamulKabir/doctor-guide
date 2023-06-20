import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import QuickTips from './QuickTips/QuickTips';
import DoctorsSchedule from './DoctorsSchedule/DoctorsSchedule';
import OurCare from './OurCare/OurCare';
import Award from './Award/Award';
import OurExpert from './OurExpert/OurExpert';
import UpcomingEvent from './UpcomingEvent/UpcomingEvent';
import Subscribe from './Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <QuickTips />
            <DoctorsSchedule />
            <OurCare />
            <Award />
            <OurExpert />
            <UpcomingEvent />
            <Subscribe />
        </div>
    );
};

export default Home;