import React, { useState } from "react";
import adult_icon from './adult-icon.png';
import child_icon from './child-icon.jpeg'; 

export default function Age() {
  const [age, setAge] = useState("Adult"); 

  function onChangeValue(event) {
    setAge(event.target.value);
    console.log(event.target.value);
  }

  return (
  <div className="flex flex-col w-full">
    <div className="justify-center m-">
      <h1>What's your Age?</h1>
      <div className="flex flex-row justify-items-center items-center content-center">
        <img class="object-contain h-48 w-96" src={adult_icon} alt="Adult Icon" />
        <img class="object-contain h-48 w-96" src={child_icon} alt="Child Icon" />
      </div>
      <div onChange={onChangeValue}>
        <input className="m-10" type="radio" value="Adult" name="age" checked={age === "Adult"} /> Adult
        <input className="m-10" type="radio" value="Child" name="age" checked={age === "Child"}/> Child
      </div>
      <Button className='rounded-none'>Next</Button>
    </div>
  </div>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
