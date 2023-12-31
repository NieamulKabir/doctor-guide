import React from 'react';

const OurExpert = () => {
    return (


        <div className='mb-16 w-11/12 mx-auto mr-10'>
            <div className=' text-center pt-20'>
                <h1 className='text-[40px] font-bold'>Our Medical Experts</h1>
                <p className='text-[16px] font-[500px] pt-3 pb-16 w-[65%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="carousel ">

                <div id="" className="carousel-item relative w-11/12 mx-auto">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                        <div>
                            <div className="card card-compact  bg-base-100 ">
                                <figure><img className='w-[100%] h-[343px] ' src='https://i.ibb.co/q77wkhz/Rectangle-13.png' alt="" /></figure>

                                <div className="flex items-center">
                                    <div className='w-[65%]'>
                                        <h1 className='text-[20px] font-semibold py-2'>Dr. Emrul Kayes</h1>
                                        <p className='text-[16px] pb-6'>MBBS, FCFS, BCS, BSCBS</p>
                                        <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                    </div>
                                    <div className='w-[35%] flex flex-col items-center'>
                                        <p className='item-start'>
                                            <i class="fa-solid fa-bookmark"></i>
                                        </p>
                                        <button className='text-[16px] px-5 py-3 text-white rounded-md bg-[#0089BA] mt-16'>Book Now</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="card card-compact  bg-base-100 ">
                                <figure><img className='w-[100%] h-[343px] ' src='https://i.ibb.co/PNSV0nN/Rectangle-108.png' alt="" /></figure>


                                <div className="flex items-center">
                                    <div className='w-[65%]'>
                                        <h1 className='text-[20px] font-semibold py-2'>Dr. Emrul Kayes</h1>
                                        <p className='text-[16px] pb-6'>MBBS, FCFS, BCS, BSCBS</p>
                                        <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                    </div>
                                    <div className='w-[35%] flex flex-col items-center'>
                                        <p className='item-start'>
                                            <i class="fa-solid fa-bookmark"></i>
                                        </p>
                                        <button className='text-[16px] px-5 py-3 text-white rounded-md bg-[#FF8B42] mt-16'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card card-compact  bg-base-100 ">
                                <figure><img className='w-[100%] h-[343px] ' src='https://i.ibb.co/q77wkhz/Rectangle-13.png' alt="" /></figure>

                                <div className="flex items-center">
                                    <div className='w-[65%]'>
                                        <h1 className='text-[20px] font-semibold py-2'>Dr. Emrul Kayes</h1>
                                        <p className='text-[16px] pb-6'>MBBS, FCFS, BCS, BSCBS</p>
                                        <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                    </div>
                                    <div className='w-[35%] flex flex-col items-center'>
                                        <p className='item-start'>
                                            <i class="fa-solid fa-bookmark"></i>
                                        </p>
                                        <button className='text-[16px] px-5 py-3 text-white rounded-md bg-[#FF8B42] mt-16'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                        <a href="/" className="btn btn-circle">❮</a>
                    </div>
                </div>
                <div id="" className="carousel-item relative w-full">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="/" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurExpert;