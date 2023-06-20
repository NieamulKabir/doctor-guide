import React from 'react';

let bgStyle = {
    "background-image": "url('https://i.ibb.co/7rqKp9v/Rectangle-34.png')"
}

const Award = () => {
    return (
        <div>
            <div className=' h-full'>
                <div className="hero h-[510px]" style={bgStyle}>
                    <div className="hero-overlay bg-opacity-60 bg-gradient-to-t from-[#4c07bcd4] to-[#ffffff05] "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className='flex items-center justify-evenly'>


                            <div className='mr-10'>
                                <p className='text-7xl'>
                                    <i className="fa-solid fa-user-doctor"></i>
                                </p>
                                <h1 className='text-[40px] font-bold'>50</h1>
                                <hr h-10 />
                                <h1 className='text-[32px] font-bold'>Medical Experts</h1>
                            </div>

                            <div className='mr-10'>
                                <p className='text-7xl'>
                                    <i className="fa-solid fa-bed"></i>
                                </p>
                                <h1 className='text-[40px] font-bold'>500</h1>
                                <hr h-10 />
                                <h1 className='text-[32px] font-bold'>Hospital Rooms</h1>

                            </div>

                            <div className='mr-10'>
                                <p className='text-7xl'>
                                <i className="fa-solid fa-trophy"></i>
                                </p>
                                <h1 className='text-[40px] font-bold'>20</h1>
                                <hr h-10 />
                                <h1 className='text-[32px] font-bold'>Awards Win</h1>
                            </div>

                            <div className='mr-10'>
                                <p className='text-7xl'>
                                <i className="fa-solid fa-face-smile"></i>
                                </p>
                                <h1 className='text-[40px] font-bold'>5000</h1>
                                <hr h-10 />
                                <h1 className='text-[32px] font-bold'>Happy Patients</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Award;