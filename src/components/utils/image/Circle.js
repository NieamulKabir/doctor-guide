import React from 'react';

const Circle = () => {
    return (
        <div className="md:flex items-center absolute md:left-[-6%] md:top-[5%] hidden">
        <div className="border-[#6E27E0] border h-[200px] w-[200px] rounded-full flex items-center justify-center">
            <div className="border-[#FF8B42] border h-[184px] w-[184px] rounded-full flex items-center justify-center">
                <div className="border-[#0089BA] border h-[168px] w-[168px] rounded-full flex items-center justify-center">
                    <div className="border-[#EA5262] border h-[154px] w-[154px] rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Circle;