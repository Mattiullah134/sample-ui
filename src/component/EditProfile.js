import React from 'react'
import EditProfileNavBar from './EditProfileNavBar'
import men1Img from '../assets/men1.jpg'

const EditProfile = () => {
    return (
        <div>
            <EditProfileNavBar />
            <div className='w-[70%] mx-auto mt-10'>
                <h1 className='text-4xl font-bold text-white'>Edit profile</h1>
                <p className=' text-gray-500 text-m mt-5'>You can set preferred display name, create <span className='text-white'>your profile URL</span> and manage other personal settings</p>
                <div className='formContainer grid md:grid-cols-2  mt-20  '>
                    <div className='flex items-start max-sm:flex-col max-sm:items-center gap-5'>
                        <img className="w-32 h-32 max-sm:w-24 max-sm:h-24 mb-3 rounded-full shadow-lg" src={men1Img} alt="" />
                        <div className='max-sm:text-center'>
                            <p className='text-white font-semibold'>Profile Photo</p>
                            <p className='md:w-48 font-normal  text-gray-500'>We recommend an image of at least 400×400 Gifs work too🙌</p>
                            <button type="button" className="bg-transparent border mt-3 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  text-white  border-gray-600  hover:bg-gray-700 ">Upload</button>
                        </div>
                    </div>
                    <div className='md:w-[80%] '>

                        <h5 className='text-white font-semibold'>Account info</h5>
                        <form className='mt-5 w-[100%]'>
                            <div className="mb-6">
                                <label for="displayname" className="block mb-2 text-sm font-bold text-gray-600 ">Display name</label>
                                <input name='displayname' type="text" id="displayname" className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:font-semibold placeholder:text-gray-800  border-gray-600  placeholder-gray-400  text-white " placeholder="Enter your display name" required />
                            </div>
                            <div className="mb-6">
                                <label for="customurl" className="block mb-2 text-sm font-bold text-gray-600 ">Custom Url</label>
                                <input type="text" name='customurl' id="customurl" className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-600  placeholder-gray-400  text-white placeholder:font-semibold placeholder:text-gray-800" placeholder="ui8.net/Your Custom URL" required />
                            </div>

                            <label for="bio" className="block mb-2 text-sm font-bold text-gray-600">BIO</label>
                            <textarea id="bio" rows="4" className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg block placeholder:font-semibold placeholder:text-gray-800 w-full p-2.5  border-gray-600  placeholder-gray-400  text-white" placeholder="About yourself in a few second"></textarea>
                            <h5 className='text-white my-8 font-semibold'>Social</h5>
                            <div className="mb-6">
                                <label for="portflioorwebsite" className="block mb-2 text-sm font-bold text-gray-600 ">PORTFOLIO OR WEBSITE</label>
                                <input name='portflioorwebsite' type="text" id="portflioorwebsite" className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:font-semibold placeholder:text-gray-800  border-gray-600  placeholder-gray-400  text-white " placeholder="Enter URL" required />
                            </div>
                            <div className="mb-6">
                                <label for="twitter" className="block mb-2 text-sm font-bold text-gray-600 ">TWITTER</label>
                                <input name='twitter' type="text" id="twitter" className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:font-semibold placeholder:text-gray-800  border-gray-600  placeholder-gray-400  text-white " placeholder="@twitter username" required />

                            </div>
                            <div className="mb-6">

                                <button type="button" className=" text-gray-500 bg-transparent w-[80%] border mt-3 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm px-5 py-2.5 mr-2 mb-2  font-semibold  border-gray-600  hover:bg-gray-700 "><i className="fa-solid fa-circle-plus mr-3"></i>Add more social account</button>
                            </div>
                            <div className="mb-6">
                                <p className='font-normal  text-gray-500'>To update your settings you should sign message through your wallet.Click 'Update profile' then sign the message</p>
                            </div>
                            <hr className='my-10  bg-gray-500 ' />
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800">Update Profile</button>
                            <button type="submit" className=" text-gray-500 font-semibold  font-mediumtext-sm w-full sm:w-auto ml-3 px-5 py-2.5 text-center "><i className="fa-regular fa-circle-xmark mr-2"></i>Clear all</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
