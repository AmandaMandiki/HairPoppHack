import React from "react";

export default function Concerns() {
  const concernsType = [
    {
      type: "Type 1 - Straight Hair",
      value: null,
      detail: "Hair with little or no noticeable wave or curl.",
    },
    {
      type: "Type 2 - Wavy Hair",
      value: null,
      detail: "Hair with 'S'-shaped waves.",
    },
    {
      type: "Type 3 - Curly Hair",
      value: null,
      detail: "Hair that have a well-defined 'S' shape.",
    },
    {
      type: "Type 4 - Coily Hair",
      value: null,
      detail: "Hair with 'Z'-shaped coils that has less or no defined curl pattern.",
    },
  ];

  return (
    <div>
      <span className="text-4xl"> Select your hair type </span>
      <div className="mx-40 flex flex-wrap justify-center">
        {concernsType.map(({ type, value, detail }) => (
          <div className="m-4 py-10 bg-gray-100">
            <input type="checkbox" id={type} name={type} value={value} />
            <label className="ml-4" for={type}>
              {type}
            </label>
            <div className="border border-gray-500 rounded bg-purple-500">
              {detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
