import React from 'react'


import { RiArmchairLine } from "react-icons/ri";
import { FaHelmetSafety } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";

import PageBanner from './PageBanner';
import ContactUsForm from './Forms/Booking_Forms/ContactUsForm';
import { useParams } from 'react-router-dom';


function FleetsDetails() {

    const { moredetails } = useParams();
    let briefData = {};

    briefData = JSON.parse(decodeURIComponent(moredetails));


    const { _id, chartertype, subCategoryName, pax, speed, price, description, image, availability, bookingtype, departure, arrival, journeytype, date, yom, seats, crew, airhosts, levatory, fromtime, endtime, flyingrange, cabinwidth, cabinheight, baggage, cabinlength, pilot, discount, discountprice } = briefData;

    return (
        <div>

            <PageBanner data={'Premium High Class Fleet'} />
            <div className=' bg-white flex items-center justify-around'>
                <div className=' gap-1 items-center justify-around flex p-4 pb-10 700:w-[50rem] 1024:w-[100rem]   flex-wrap '>
                    <div>
                        {/* <img src={fleetsimg} alt="" className='w-[37rem] rounded-lg ' /> */}
                        <img src={image} alt="" className='w-[37rem] rounded-lg' />
                    </div>
                    <div className=' flex flex-col justify-around md:h-[30rem] md:w-[48rem] md:p-[3rem]'>
                        <div >
                            <div>
                                <h1>
                                    {subCategoryName}
                                </h1>
                                <h4>
                                    {chartertype}
                                </h4>
                            </div>
                            <div>
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-4 flex-wrap'>
                            <div className='flex gap-2 w-[13rem]'>

                                <RiArmchairLine className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Seats :
                                </h5>

                                <h4>
                                    {seats}
                                </h4>

                            </div>


                            <div className='flex gap-2  w-[13rem]'>
                                <FaHelmetSafety className='w-[1.5rem] h-[1.5rem]' />

                                <h5>
                                    YOM :
                                </h5>

                                <h4>
                                    {yom}
                                </h4>

                            </div>


                            <div className='flex gap-2 w-[13rem]'>
                                <TbBrandGithubCopilot className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Crew :
                                </h5>
                                <h4>
                                    {crew}
                                </h4>
                            </div>
                            <div className='flex gap-2 w-[13rem]'>
                                <FaBagShopping className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Baggage :
                                </h5>
                                <h4>
                                    {baggage}
                                </h4>
                            </div>

                            <div className='flex gap-2  w-[13rem]'>
                                <IoIosSpeedometer className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Speed :
                                </h5>
                                <h4>
                                    {speed}
                                </h4>
                            </div>

                            <div className='flex gap-2 w-[13rem]'>
                                <IoIosPeople className='w-[1.5rem] h-[1.5rem]' />
                                <h5>
                                    Flight Attendent :
                                </h5>
                                <h4>
                                    {airhosts}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-white flex flex-wrap py-10  shadow-xl items-center justify-around'>
                <div className=' w-[100%] md:w-[45rem]  p-4'>
                    <h1 className='text-[1.5rem]'>Specifications</h1>
                    <div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Aorcraft Type</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{chartertype}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Baggage Capacity</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{baggage}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cruise Speed</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{speed}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Seats</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{seats}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>YOM</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{yom}</h1>
                        </div>

                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Pilots</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{pilot}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Crew</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{crew}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Flying Range</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{flyingrange}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Height</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{cabinheight}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Width</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{cabinwidth}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Cabin Length</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{cabinlength}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Lavatory</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>{levatory}</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className='p-2 bg-gray-400 w-[50%] h-[2rem] m-[0.1rem]'>Price ( 1 Hr )</h1>
                            <h1 className='p-2 bg-gray-200 w-[50%] h-[2rem] m-[0.1rem]'>$ {price}</h1>
                        </div>
                    </div>
                </div>



                <ContactUsForm props={briefData} />


            </div>



        </div >
    )
}

export default FleetsDetails