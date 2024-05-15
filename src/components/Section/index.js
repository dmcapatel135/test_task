import React from "react";

const Section = ({heading, list}) => {
    return(
        <div>
            <div>
                <h1>{heading}</h1>
            </div>
            <div>
                <ul>
                {list.map((item, index) => {
                      return(
                        <li key={index}>{item.name}</li>
                      )
                })
                }
                </ul>
            </div>
        </div>
    )
}

export default Section