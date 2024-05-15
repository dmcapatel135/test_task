import React from "react";

const Card = ({item}) => {
    return(
        <div>
            <div>
                <img src={item.img}  alt='img' />
            </div>
            <div className="flex items-center gap-2 py-1">
                <img src="/images/yellow-star.png"  alt='star' />
                <span className="text-14 font-[600]">5.0 (392 reviews)</span>
             </div>
            <div>
                <h1 className="text-16 font-[700]">{item.heading}</h1>
            </div>
            <div className="flex items-center gap-2">
                <img src='/images/eye.png'  alt="icon" />
                <span className="text-12 font-[600]"> {item.count} students watched</span>
            </div>
        </div>
    )
}

export default Card ;   