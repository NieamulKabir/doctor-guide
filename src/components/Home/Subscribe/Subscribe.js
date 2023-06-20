import React from 'react';


const Subscribe = () => {
    return (
        <div className='my-16 '>
              <div className="md:flex items-center absolute md:left-[93%] top-[6410px] hidden">
                        <div className="border-[#6E27E0] border h-[200px] w-[200px] rounded-full flex items-center justify-center">
                            <div className="border-[#FF8B42] border h-[186px] w-[186px] rounded-full flex items-center justify-center">
                                <div className="border-[#0089BA] border h-[170px] w-[170px] rounded-full flex items-center justify-center">
                                    <div className="border-[#EA5262] border h-[156px] w-[156px] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            <div className=' w-11/12 mx-auto flex flex-row items-center rounded-lg bg-[#0089BA]'>



                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/4YJ3pYX/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6.png" className="rounded-lg h-[524px] w-[354px]" alt='' />
                        <div>
                            <h1 className="text-5xl font-bold text-white">Subscribe Now</h1>
                            <p className="py-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                            <div className="form-control">

                                <label className="input-group ">
                                    <input type="text" placeholder="Your email here" className="input input-bordered w-[90%]" />
                                    <span className='bg-[#FF8B42] text-white font-medium'>Submit</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;