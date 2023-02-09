import React from "react";
import StarRating from "./starRating";

interface IProp {
    title: string
    rate: number
}

export default function SkillItem({ title, rate }:IProp) { 

    return (
        <>
            <div className="Card-skills">
                <div className="Box-Skills">
                    
                    <span className="Title-skills">{title}</span>
                    <span className="Stars"><StarRating select={rate}/></span>                
                </div>
            </div>
        </>
    )
} 