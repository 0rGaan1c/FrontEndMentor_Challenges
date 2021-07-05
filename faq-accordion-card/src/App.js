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
          <div className="app_img_pattern"></div>
        </div>
        <h1>FAQ</h1>
        {faqs.map((faq, idx) => {
          const { id, question, answer } = faq;

          return (
            <div className="app__faq" key={idx}>
              <h3> {question}</h3>
              <h3>{answer}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
