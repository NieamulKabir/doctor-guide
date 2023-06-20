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
                        <div className="max-w-md">
                            <div className='grid grid-cols-3 gap-10'>
                                <div className='flex items-center'>
                                    <div>
                                        <p className='text-7xl'>
                                            <i className="fa-solid fa-user-doctor"></i>
                                        </p>
                                        <h1 className='text-[40px] font-bold'>50</h1>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Award;