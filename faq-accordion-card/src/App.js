import React, { useState } from "react";
import "./App.css";
import { faqs } from "./faqs";

// <div class="attribution">
//   Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
//   Coded by <a href="#">Your Name Here</a>.
// </div>

const App = () => {
  const [isOpen, setIsOpen] = useState(new Array(faqs.length).fill(false));

  const handleClick = (idx) => {
    const newState = new Array(faqs.length).fill(false);
    // const newState = isOpen.map((val) => {
    //   return val;
    // });
    newState[idx] = !isOpen[idx];
    setIsOpen(newState);
    console.log(isOpen);
  };

  return (
    <>
      <div className="app">
        <div className="app__img">
          <div className="app__img__woman"></div>
          <div className="app__img__pattern"></div>
        </div>
        <h1>FAQ</h1>
        <div className="app__faq__container">
          {faqs.map((faq) => {
            const { id, question, answer } = faq;

            return (
              <div className="app__faq" key={id}>
                <div
                  className="app__faq__question"
                  onClick={() => handleClick(id)}
                >
                  <h3 className={isOpen[id] ? `app__faq__question--bold` : ""}>
                    {question}
                  </h3>
                  <svg
                    width="10"
                    height="7"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: isOpen[id] ? "rotate(180deg)" : "" }}
                  >
                    <path
                      d="M1 .799l4 4 4-4"
                      stroke="#F47B56"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                {isOpen[id] && <h3 className="app__faq__answer">{answer}</h3>}
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
