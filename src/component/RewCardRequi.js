import React from 'react';
const RewCardRequi = ({ logo, title, para, icon }) => {
    return (
        <div className='flex items-center max-sm:items-start justify-between my-8'>
            <div className='flex items-center max-sm:items-start max-sm:gap-2 gap-4'>
                {logo && <img className='invert w-10 max-sm:w-5' src={logo} alt="" />}
                {icon && icon}
                <div>
                    <h1 className='text-white max-sm:font-light font-semibold'>{title}</h1>
                    <p className='text-gray-500'>{para}</p>
                </div>
            </div>
            <button type="button" className="text-white  bg-transparent border-2  border-[#323540]  font-bold rounded-full text-sm max-sm:px-2 px-5 py-2.5 max-sm:mr-0.5 mr-2 mb-2 max-sm:font-light  ">Connect</button>
        </div>
    )
}

export default RewCardRequi
