import React from "react";
import "./App.css";
import { faqs } from "./faqs";

// <div class="attribution">
//   Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
//   Coded by <a href="#">Your Name Here</a>.
// </div>

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__img">
          <div className="app__img__woman"></div>
          <div className="app__img__pattern"></div>
        </div>
        <h1>FAQ</h1>
        <div className="app__faq__container">
          {faqs.map((faq, idx) => {
            const { id, question, answer } = faq;

            return (
              <div className="app__faq" key={idx}>
                <div className="app__faq__question">
                  <h3>{question}</h3>
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 .799l4 4 4-4"
                      stroke="#F47B56"
                      stroke-width="2"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="app__faq__answer">{answer}</h3>
                <div className="app__faq__border"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
