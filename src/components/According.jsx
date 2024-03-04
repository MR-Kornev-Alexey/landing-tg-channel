import React, {useState, useEffect} from 'react';
import Arrow from "../assets/images/Svg/arrow_down.svg";
import { Transition } from 'react-transition-group';
import LineImg from "../assets/images/Svg/minus-sign_8727651.svg"

const According = ({date, title, description}) => {
    return (
        <div className="max-w-2xl mx-auto my-2 relative p-3 rounded-xl"
             data-aos="slide-left">
            <div className="absolute -inset-1">
                <div
                    className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                </div>
            </div>
            <div className="group relative overflow-hidden bg-white" >
                <div className="flex items-center px-4 marker:content-none bg-white ">
                    <div className="flex flex-col bg-white ">
                        <p dangerouslySetInnerHTML={{__html: date}} className="text-xl"/>
                        <span dangerouslySetInnerHTML={{__html: title}}  className="lg:text-xl md:text-md " />
                    </div>
                </div>
            </div>

            <div className="p-2 px-4 font-medium  relative overflow-hidden bg-white max-h-100" >
                <img className="h-[45px]" src={LineImg} alt="baby_banner" />
                <span dangerouslySetInnerHTML={{__html: description}}/>
            </div>
        </div>
    );
};

export default According;
