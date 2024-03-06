import React, { useState } from "react";

export const BmiCalculator = () => {
   const [height, setHeight] = useState();
   const [weight, setWeight] = useState();
   const [bmi, setBmi] = useState(null);
   const [status, setStatus] = useState("");
   const [errMg, setErrMsg] = useState("");

   const resultBmi = () => {
      const numHeight = /^\d+$/.test(height);
      const numWeight = /^\d+$/.test(weight);

      if (numHeight && numWeight) {
         const intHeight = height / 100;
         const bmiValue = weight / (intHeight * intHeight);
         setBmi(bmiValue.toFixed(2));
         if (bmiValue < 18.5) {
            setStatus("UnderWieght");
         } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setStatus("Normal Weight");
         } else if (bmiValue >= 25 && bmiValue < 29.9) {
            setStatus("OverWeight");
         }
      } else {
         setBmi(null);
         setStatus("");
         setErrMsg("please Enter the input fields");
      }
   };

   const reload = () => {
      window.location.reload();
   };

   return (
      <div className="bmi-container">
         <div className="img-box"></div>
         <div className="input-data">
            <h3>BMI Calculator</h3>
            {errMg && <p className="error">{errMg}</p>}
            <div className="input-field">
               <label>Height(cm):</label>
               <input
                  type="text"
                  id="height"
                  value={height}
                  onChange={(e) => {
                     setHeight(e.target.value);
                  }}
               />
            </div>
            <div className="input-field">
               <label>weight(kg):</label>
               <input
                  type="text"
                  id="height"
                  value={weight}
                  onChange={(e) => {
                     setWeight(e.target.value);
                  }}
               />
            </div>
            <div className="submit-buttons">
               <button className="submit" onClick={resultBmi}>
                  Submit
               </button>
               <button className="reload" onClick={reload}>
                  Reload
               </button>
            </div>
            {bmi !== null && (
               <div className="result">
                  <p>Your BMI is: {bmi}</p>
                  <p>status:{status}</p>
               </div>
            )}
         </div>
      </div>
   );
};
