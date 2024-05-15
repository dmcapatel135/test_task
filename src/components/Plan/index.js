import React, { useState } from "react";

const planList = [
  { icon: "", plan: "" },
  { icon: "", plan: "" },
  { icon: "", plan: "" },
  { icon: "", plan: "" },
  { icon: "", plan: "" },
  { icon: "", plan: "" },
];

const Plan = () => {
  const [plan, setPlan] = useState(true);
  return (
    <div className="container px-20">
      <div className="text-center">
        <div className="flex">
          <div>
            <div className="flex">
              <button
                onClick={() => {
                  setPlan(true);
                }}
                className={`${plan ? "bg-gray" : "bg-white"}`}
              >
                Normal Bet
              </button>
              <button
                onClick={() => {
                  setPlan(true);
                }}
                className={`${plan ? "bg-gray" : "bg-white"}`}
              >
                Normal Bet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="shadow-sm rounded-md">
            <h1 className="text-24">Free Plans</h1>
            <span className="text-16">For small teams or office</span>
            <div>
              {planList.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <img src={item.icon} alt="icon" />
                    <p>{item.plan}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="shadow-md px-5 py-3 border-2 border-green rounded-md">
            <div className="bg-orange rounded-md w-48 px-3 py-1">
              <p className="font-[600]">Recomended</p>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-24"></h1>
                <span>For startup enterprise</span>
              </div>
              <div>
                <span></span>
                <h1 className="text-24">399.0</h1>
              </div>
            </div>
            <div>
              {planList.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <img src={item.icon} alt="icon" />
                    <p>{item.plan}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center my-3">
              <button className="text-orange font-[700] text-14 px-3 py-2 rounded-md">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
