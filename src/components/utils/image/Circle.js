import React from 'react';

const Circle = () => {
    return (
        <div className="md:flex items-center absolute md:left-[-6%] md:top-[5%] hidden">
        <div className="border-[#6E27E0] border h-[200px] w-[200px] rounded-full flex items-center justify-center">
            <div className="border-[#FF8B42] border h-[186px] w-[186px] rounded-full flex items-center justify-center">
                <div className="border-[#0089BA] border h-[170px] w-[170px] rounded-full flex items-center justify-center">
                    <div className="border-[#EA5262] border h-[156px] w-[156px] rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Circle;