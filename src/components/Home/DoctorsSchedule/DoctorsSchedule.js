import React from 'react';
import './DoctorsSchedule.css'
const DoctorsSchedule = () => {
    return (
        <div className='w-11/12 mx-auto mb-20'>
            <div className='flex  items-center'>
                <div className='w-[50%] mr-20'>
                    <h1 className='text-center font-bold text-2xl pb-16'>Doctor's Schedule Today</h1>
                    <div className='flex items-center justify-evenly'>
                        <p className='text-[#EA5262] font-semibold text-[28px] pb-6 pt-3'>
                            08:00
                        </p>
                        <div className='pb-8 pt-2'>
                            <h4 className='text-[20px] font-[500px]'>General Pracitioner</h4>
                            <p className='text-[16px] font-normal'>Dr. Robbert Algazali</p>
                        </div>
                    </div>
                    <hr />

                    <div className='flex items-center justify-evenly'>
                        <p className='text-[#EA5262] font-semibold text-[28px] pb-6 pt-3'>
                            06:00
                        </p>
                        <div className='pb-8 pt-6'>
                            <h4 className='text-[20px] font-[500px]'>Dentist Specialist</h4>
                            <p className='text-[16px] font-normal'>Dr. Robbert Algazali</p>
                        </div>
                    </div>
                    <hr />

                    <div className='flex items-center justify-evenly'>
                        <p className='text-[#EA5262] font-semibold text-[28px] pb-6 pt-3'>
                            09:00
                        </p>
                        <div className='pb-8 pt-6'>
                            <h4 className='text-[20px] font-[500px]'>General Pracitioner</h4>
                            <p className='text-[16px] font-normal'>Dr. Robbert Algazali</p>
                        </div>
                    </div>
                    <hr />

                    <div className='flex items-center justify-evenly'>
                        <p className='text-[#EA5262] font-semibold text-[28px] pb-6 pt-3'>
                            10:00
                        </p>
                        <div className='pb-8 pt-6'>
                            <h4 className='text-[20px] font-[500px]'>Pediatric</h4>
                            <p className='text-[16px] font-normal'>Dr. Robbert Algazali</p>
                        </div>
                    </div>
                    <hr />

                    <div className='flex items-center justify-evenly'>
                        <p className='text-[#EA5262] font-semibold text-[28px] pb-6 pt-3'>
                            07:00
                        </p>
                        <div className='pb-8 pt-6'>
                            <h4 className='text-[20px] font-[500px]'>General Pracitioner</h4>
                            <p className='text-[16px] font-normal'>Dr. Robbert Algazali</p>
                        </div>
                    </div>
                    <hr />

                    
                </div>

                <div className='w-[50%] pl-16'>
                    <img className=' scheduleDoctor' src="https://i.ibb.co/rsqBp77/al-fath-gadgets.png" alt="" />
                    <div className=''></div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsSchedule;