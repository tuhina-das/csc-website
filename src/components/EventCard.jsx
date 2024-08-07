import React, { useState } from "react";

function EventCard(props) {
    return (
        <div className="mx-auto my-[3vh] rounded-lg shadow-2xl shadow-[#48abe0] w-[75vw] lg:w-[50vw] h-fit xs:p-5 p-[4vh] bg-gradient-to-t from-[#3b9aff] to-[#38afff] bg-opacity-20">
            <h1 className='font-[Red_Hat_Display_Bold] text-white text-[3vh]'>{props.heading}</h1>
            <h2 className='mb-[2vh] font-[Red_Hat_Display_Light] text-white text-[2vh]'>{props.date}</h2>
            <img src={props.img} className='rounded shadow-2xl shadow-[#1c5fb8] m-auto w-[50%] mb-[3vh]' />
            <p className='text-white font-bold'>{props.description}</p>
        </div>
    )
};

export default EventCard;