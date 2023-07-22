import React from "react";

export default function Concerns() {
  const concernsType = [
    {
      type: "Fine weak hair",
      value: null,
      detail: "Thin, fragile hair prone to breakage.",
    },
    {
      type: "Oily / Greasy Hair",
      value: null,
      detail: " Excess sebum production makes hair look greasy.",
    },
    {
      type: "Dandruff",
      value: null,
      detail: "Scalp condition with white/yellowish flakes and itching.",
    },
    {
      type: "Sensitive scalp",
      value: null,
      detail: "Prone to irritation from hair products or weather conditions.",
    },
    {
      type: "Damaged hair",
      value: null,
      detail: " Weakened, frizzy hair due to heat, chemicals, or environment.",
    },
    {
      type: "Dry",
      value: null,
      detail: "Lacks moisture, appears dull and frizzy.",
    },
  ];

  return (
    <div>
      <span className="text-4xl"> Select your hair concerns </span>
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
