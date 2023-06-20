import React from 'react';
import './HeroSection.css'
import Circle from '../../utils/image/Circle';
import doctor1 from '../../utils/image/doctorImg/doctor1.png'
import doctor2 from '../../utils/image/doctorImg/doctor2.png'

const HeroSection = () => {
    return (
        <div className="relative">
            <Circle />
            <div className="my-container grid md:grid-cols-3 md:ms-12 gap-4 relative">
                <div className="flex items-center relative">
                    <div className="absolute top-0"></div>
                    <div className='ml-10'>
                        <h2 className="text-lg md:text-[40px] font-bold">Find The Care <br /> <br /> You Need </h2>
                        <p className="text-[14px] py-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s,</p>
                        <button className='font-medium bg-[#FF8B42] px-10 py-4 rounded-lg text-white'>Make Appointment</button>
                    </div>
                </div>

                <div className="relative mb-14 mt-8 ms-auto">
                    <img className="absolute bottom-0 md:h-full pt-[100px]" src={doctor1} alt="" />
                    <div className="absolute bottom-[-56px] left-[-60px]"></div>
                    <div className="flex flex-col justify-between h-full">
                        <div className="h-[177px] mb-14 w-[338] bg-[#FF8B42] rounded-b-[150px] rounded-t-[20px] mt-[70px]"></div>
                        <div className="h-[434px] w-[338px] bg-[#FF8B42] rounded-t-[150px] rounded-b-[20px]"></div>
                    </div>
                </div>

                <div className="ms-auto mr-[110px] relative">
                    <img className="bottom-0 h-[792px] absolute" src={doctor2} alt="" />
                    <div className="flex flex-col justify-between h-full">
                        <div className="h-[434px] w-[338px] bg-[#0089BA] rounded-b-[150px] rounded-t-[20px] mt-[150px]"></div>
                        <div className="h-[177px] w-[338] bg-[#0089BA] rounded-t-[150px] rounded-b-[20px]"></div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default HeroSection;