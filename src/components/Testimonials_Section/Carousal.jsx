import React, { useState, useEffect } from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { message } from 'antd';
import axios from 'axios';



function Carousal() {
  const [customerExperience, setCustomerExperience] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/getallfeedback');
        setCustomerExperience(response.data.feedback);
      } catch (error) {
        message.error('Internet is slow to get feedbacks');
      }
    };
    fetchExperience();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % customerExperience?.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [customerExperience?.length]);

 

  return (
    <div>
      <div className="relative 1487:w-[55vw] w-[92vw] max-w-[1200px] min-h-[50vh] h-[80vh] overflow-hidden rounded-lg">
        <div className="relative w-full  h-[80vh] flex items-center justify-center">
          {customerExperience.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0  flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="md:w-[45rem] h-[25rem] flex flex-col justify-between p-3">
                <p className="text-[1.3rem] leading-7 text-gray-400 overflow-hidden">
                  {slide.feedback}
                </p>
                <RiDoubleQuotesR className="absolute w-[5rem] h-[5rem] z-5 top-6 left-1 text-hoverColor hidden md:flex" />
                <div className="flex items-center justify-start md:mt-10">
                  <div className=" text-white  flex justify-center p-1 text-[2rem] h-[3rem] w-[3rem] rounded-full bg-hoverColor">
                    <h1 > {slide.name.slice(0,2)} </h1>
                    
                  </div>
                  <div className="ml-5 text-white">
                    <h1>{slide.name}</h1>
                    <h1 className="text-hoverColor">{slide.service}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousal;
