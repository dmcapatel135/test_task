
import React from "react";

const videoList = [{heading:'Professional graphic design tutorial full course with exercise file', count:'', rating:'', description:'Get your tutorials delivered at let home collect sample from the victory of the managments.'},{heading:'Become ultimate photoshop expert within 30 days', count:'', rating:'', description:"Get your tutorials delivered at let home collect sample from the victory of the managments."},
{heading:'After effects animation tutorial with photoshop documents', count:'', rating:'', description:'Get your tutorials delivered at let home collect sample from the victory of the managments.', list:[{name:''}, {name:''},]},
{heading:'Adobe illustrator vector art design mockup', count:'', rating:'', description:'Get your tutorials delivered at let home collect sample from the victory of the managments.'},
]

const Course = () => {
  return (
    <div className="container px-20">
      <div className="text-center">
        <span className="text-12 font-[700] text-orange">QUALITY FEATURES</span>
        <h1 className="text-20 font-bold text-primary">Popular Designing Course</h1>
      </div>
      {videoList.map((item, index) => {
        return(
      <div key={index} className="shadow-md px-2 py-2 rounded-md mt-5">
        <div className="flex">
          <div className="flex-shrink p-2">
            <div className="rounded-full flex items-center justify-center bg-white shadow-md  w-14 h-14">
              <img src="/images/play-button.png" alt='img' />
            </div>
          </div>
          <div className="flex-1">
            <div>
              <div className="gap-2 flex items-center ">
                <img src="/images/yellow-star.png" alt="img" />
                <span className="text-12">5.0 (392 reviews)</span>
                <img src='/images/eye.png' alt='icon' />
                <span className="text-12">2,538 students watched</span>
              </div>
              <h1 className="text-16 text-black font-[600]">{item.heading}</h1>
              <p className="text-14 font-[500]">{item.description}</p>
            </div>
          </div>
          <div className="flex-shrink">
            <div className="flex items-center gap-2">
              <button className="bg-[#3FDBB1] py-1 px-3 text-white rounded-[4px] text-14 font-[600]">7 video classes | 4 hrs</button>
              <span>{}</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div></div>
        </div>
      </div>
        )
      })
      }
    </div>
  );
};

export default Course;