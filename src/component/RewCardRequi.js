import React from 'react';
const RewCardRequi = ({ logo, title, para, icon, checkBox }) => {
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
            {!checkBox && <button type="button" className="text-white  bg-transparent border-2  border-[#323540]  font-bold rounded-full text-sm max-sm:px-2 px-5 py-2.5 max-sm:mr-0.5 mr-2 mb-2 max-sm:font-light  ">Connect</button>}

            {checkBox && <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

            </label>}

        </div>
    )
}

export default RewCardRequi
