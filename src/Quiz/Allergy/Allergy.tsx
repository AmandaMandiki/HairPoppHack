import React, { useState } from "react";

export default function Allergy() {
  const [Allergy, setAllergy] = useState("No"); 

  function onChangeValue(event) {
    setAllergy(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="flex flex-col w-full">
    <div className="justify-center m-">
      <h1>Do you have an Allergy?</h1>
      <div onChange={onChangeValue}>
        <input className="m-10" type="radio" value="Allergy_Yes" name="Allergy_Yes" checked={Allergy === "Allergy_Yes"} /> Yes I have an allergy
        <input className="m-10" type="radio" value="Allergy_No" name="Allergy_No" checked={Allergy === "Allergy_No"} /> No I don't have an allery
      </div>
      <Button className='rounded-none'>Next</Button>
    </div>
  </div>
  );
}

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};