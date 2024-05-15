
import React from "react";

const steps = [
  { step:1, heading: "Set disbursement Instructions", description: "Get your blood tests delivered at home collect a sample from the your blood tests." },
  { step:2, heading: "Assembly retrieves funds from your account", description: "Get your blood tests delivered at home collect a sample from the your blood tests." },
  { step:3, heading: "Assembly initiates disbursement", description: "Get your blood tests delivered at home collect a sample from the your blood tests." },
  { step:4, heading: "Customer receives funds payment", description: "Get your blood tests delivered at home collect a sample from the your blood tests." },
];

const HowItWork = () => {
  return (
    <div className='text-center px-20 container'>
      <div className='my-5'>
        <span className='text-orange text-12 font-[700]'>WHATS THE FUNCTION</span>
        <h1 className=" text-24 text-primary font-[700] ">Let see how its works</h1>
      </div>
      <div className="grid  grid-cols-12">
        {steps.map((item, index) => {
          return (
            <div key={index} className="col-span-3 px-2 py-2">
              <div className="">
                <div className="flex items-center px-2 gap-3">
                  <div className="flex justify-center rounded-full items-center shadow-lg  w-10 h-10">
                    <h1 className="text-16 font-bold">{item.step}</h1>
                  </div>
                  <div>
                    <img src="/images/curveline.png" />
                  </div>
                </div>
                <div>
                  <h1 className="text-16">{item.heading}</h1>
                  <span>{item.description}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWork;

    