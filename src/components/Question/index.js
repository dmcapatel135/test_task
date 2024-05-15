import React from "react";

const questionList = [
  { question: "", description: "" },
  { question: "", description: "" },
  { question: "", description: "" },
  { question: "", description: "" },
];

const Question = () => {
  return (
    <div>
      <div>
        <span className="text-12 font-[700] text-orange">
          FREQUENT QUESTION
        </span>
        <h1 className="text-24">Do you have any questions</h1>
      </div>
      {questionList.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex items-center gap-4">
              <img src="" alt="" />
              <h1>{item.question}</h1>
              <span>{item.description}</span>
            </div>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default Question;