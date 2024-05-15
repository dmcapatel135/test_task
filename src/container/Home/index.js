import React from "react";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { cardInfoList } from "./constant";
import Course from "../../components/Course";
import HowItWork from "../../components/HowItWork";
import Plan from "../../components/Plan";
import { GoSearch } from "react-icons/go";


const menuList = [
    {name:'Home', icon:false},
    {name:'Adversite', icon:false},
    {name:'Supports', icon:false},
    {name:'Contact', icon:false},
]

const Home  = () => {
    return(
        <>
        <div className="bg-gradient-color-1">
        <div className="text-black container mx-5">
            <div className="flex justify-between py-3">
                <div className="flex gap-3 items-center">
                    <img src="/images/logo.png" />
                    <h1 className="text-14 font-[700] text-primary">Landguru</h1>
                </div>
                <div className="flex gap-4">
                    {menuList.map((item, index) => {
                         return(
                            <div key={index} className="flex text-primary">
                                <p className="text-14 font-[600]">{item.name}</p>
                                {item.icon &&   
                                <img src="/images/downrrow.png" />
                                }
                            </div>
                         )
                    })
                    }
                </div>
                <div>
                    <button className="rounded-md py-1 px-3 text-12 text-orange">Try Free</button>
                </div>
            </div>
        </div>
        <div className="container h-[600px] mt-10">
            <div className="grid grid-cols-12 px-20">
                <div className="col-span-6  px-5">
                    <div className="text-center">
                         <div className="flex items-center gap-2">
                            <img src="/images/blue-star.png" />
                            <span className="text-primary text-12 font-[400]">Trusted by over 4,332 students</span>
                         </div>
                         <h1 className="text-[48px] font-bold text-primary">Learn Design with Nia Matos</h1>
                    </div>
                    <div className="my-5">
                        <p className="leading-8 text-16 font-[600] text-primary">Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                    </div>
                    <div>
                    <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Course"
              className="placeholder:text-18  placeholder:text-slate-300 pt-1 h-[50px] w-full px-10  border text-14  rounded-[4px] outline-none"
            />
            <span className="text-white ay-center left-2 text-16 lg:text-[20px] 2xl:text-[26px]">
              {/* {reactIcons.search} */}
            </span>
    </div>
                    </div>
                    <div>
                        <div className="flex items-center my-5 gap-2">
                            <h1 className="text-12 font-[600]">Sponsored by :</h1>
                            <div className="flex items-center gap-4">
                            <img src="/images/paypal.png" />
                            <img src="/images/google.png" />
                            <img src="/images/dropbox.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                <div className="flex justify-end relative">
                    <img src="/images/pattern.png" className="w-60" />
                    <img src="/images/hero.png" className="w-96 absolute top-5 right-10" />
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className='container my-5'>
            <div className="text-center">
                <span className="text-12">QUALITY FEATURES</span>
                <h1 className="font-bold text-20">Tutorials that people love most</h1>
            </div>
            <div className="grid grid-cols-12 gap-3" >
                {cardInfoList.map((item, index) => {
                    return(
                <div key={index} className="col-span-4">
                    <Card  item={item}/>
                </div>
                    )
                })
                }
                </div>
        </div>
        <div className="container px-20">
        <div className="grid grid-cols-12">
            <div className="col-span-6">
                <div className="flex px-24">
                    <div className="flex-1 mt-10">
                    <div className="shadow-md flex justify-center px-5 items-center w-36 h-48">
                        <div className="text-center">
                         <h1 className="text-orange text-20 font-[700]">80 K+</h1>
                         <span>we have more than students</span>
                        </div>
                    </div>
                    <div className="shadow-md flex justify-center items-center w-36 h-48">
                        <div className="text-center">
                         <h1 className="text-[#FA578E] text-20 font-[700]">90+</h1>
                         <span>Daily upload blog post maintain</span>
                        </div>
                    </div>
                    </div>
                    <div className="flex-1">
                    <div className="shadow-md flex items-center w-36 h-48">
                        <div className="text-center">
                         <h1 className="text-[#FF753A] text-20 font-[700]">150+</h1>
                         <span>Free online tutorials video available</span>
                        </div>
                    </div>
                    <div className="shadow-md flex items-center w-36 h-48">
                        <div>
                         <h1 className="text-[#E682FF] text-20 font-[700]" >& 3M</h1>
                         <span>Jobs posted everydays with qualification</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-span-6">
                <div className="flex items-center h-96 ">
                <div className="pr-10">
                 <span className="text-12 font-[600]">CORE FEATURES</span>
                 <h1 className="text-[28px] font-[700] leading-10">Smart Jackpots</h1>
                 <h1 className="text-[28px] font-[700] leading-10">that you may love</h1>
                 <h1 className="text-[28px] font-[700] leading-8">this anytime & anywhere</h1>
                 <p className="my-3 text-14 font-[600]">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                 <span className="text-12 ">Explore details</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div>
            <Course />
        </div>
        <div>
            <HowItWork />
        </div>  
        {/* <div>
            <Plan />
        </div> */}
        <div className="text-center">  
        <Footer />
        </div>
        </>
    )
}

export default Home;