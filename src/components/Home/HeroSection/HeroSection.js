import React from 'react';
import './HeroSection.css'


const HeroSection = () => {
    return (
        <div className='ml-16 pb-10 items-center'>
            <div className='2xl:mr-60 md:flex row max-w-full mx-auto items-center '>
                <div className='ml-20 mt-64 '>
                    <h1 className='text-lg md:text-[40px] font-bold '>Find The Care <br /> <br />You Need</h1>
                    <p className='text-[14px] mt-[31px] mb-[34px] w-[45%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <button className='font-medium bg-[#FF8B42] px-10 py-4 rounded-lg text-white'>Make Appointment</button>
                </div>
                <div className=''>
                    <div className=' '>
                        <div className='shape1'></div>
                        <div className='shape2'></div>
                        <div className='doctor1' ></div>

                    </div>
                    <div className=''>
                        <div className='shape4'></div>
                        <div className='shape3'></div>
                        <div className='doctor2' ></div>
                    </div>
                </div>

            </div>
            <br /> <br /> <br />
        </div>
    );
};

export default HeroSection;