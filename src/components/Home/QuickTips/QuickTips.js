import React from 'react';
import './QuickTips.css'


const QuickTips = () => {
    return (
        <div className='mt-60 w-11/12 mx-auto'>
            <div className='flex items-center justify-evenly'>
                <div>
                   <img className='h-[614px] w-[436px] ml-20 absolute' src="https://i.ibb.co/6XPrhYS/kisspng-physician-nursing-medicine-health-care-foreign-doctor-5a6b98c3c69386.png" alt="" />
                    <div className='w-[626px] h-[422px] bg-[#FF8B42] mt-[193px] me-20 rounded-full '></div>
                </div>
                <div className='mt-36'>
                    <h1 className='font-bold text-3xl'>Sick Kid? How to Deal with a <br /> Child’s Fever: 4 Steps</h1>
                    <div className='flex mb-5 mt-16'>
                        <p className='text-[#FF8B42] mr-6 w-7 h-6'><i className="fa-solid fa-briefcase-medical"></i></p>
                        <p className='text-[16px]'>Cras sit sed nec a nunc</p>
                    </div>
                    <div className='flex mb-5'>
                        <p className='text-[#FF8B42] mr-6 w-7 h-6'><i className="fa-solid fa-briefcase-medical"></i></p>
                        <p className='text-[16px]'>Tempor mauris mauris in</p>
                    </div>
                    <div className='flex mb-5'>
                        <p className='text-[#FF8B42] mr-6 w-7 h-6'><i className="fa-solid fa-briefcase-medical"></i></p>
                        <p className='text-[16px]'>Nibh turpis praesent pretium</p>
                    </div>
                    <div className='flex mb-5'>
                        <p className='text-[#FF8B42] mr-6 w-7 h-6'><i className="fa-solid fa-briefcase-medical"></i></p>
                        <p className='text-[16px]'>Cras sit sed nec a nunc</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickTips;