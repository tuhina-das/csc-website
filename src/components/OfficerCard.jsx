import React, { useState } from "react";

function OfficerCard(props) {
    return (
        <div>
            <div className="p-[2vh] m-auto h-fit border-solid border-5">
                <img className="m-auto w-[40%] rounded-full" src={props.img} />
                <h1 className="mt-[1vh] text-2xl font-bold font-['Red_Hat_Display_Light']">{props.name}</h1>
                <h3 className="mt-[1vh] font-['Red_Hat_Display_Light']">{props.role}</h3>
                <h3 className="font-['Red_Hat_Display_Light']">{props.email}</h3>
            </div>
        </div>
    )
};

export default OfficerCard;