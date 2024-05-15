import React from "react";
import Section from "../Section";
import { aboutUs, myAccount, ourInformation, policy } from "./constant";


const Footer = () => {
    return(
       <div className="container mx-12">
         <div className="grid grid-cols-12">
             <div className="col-span-3">
                <Section heading='About Us' list={aboutUs} />
             </div>
             <div className="col-span-3">
                <Section heading='Our Information' list={ourInformation} />
             </div>
             <div className="col-span-3">
                <Section heading='My Account' list={myAccount} />
             </div>
             <div className="col-span-3">
                <Section heading='Policy' list={policy} />
             </div>
         </div>
       </div>
    )
}
export default Footer;