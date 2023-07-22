import React from "react";

export default function Goals() {
   const Goals = [
     {
       type: "Volume",
       value: null,
       detail: "Thin, fragile hair prone to breakage.",
     },
     {
       type: "Deep condition",
       value: null,
       detail: " Excess sebum production makes hair look greasy.",
     },
     {
       type: "Anti frizz",
       value: null,
       detail: "Scalp condition with white/yellowish flakes and itching.",
     },
     {
       type: "Oil control",
       value: null,
       detail: "Prone to irritation from hair products or weather conditions.",
     },
     {
       type: "Nourish",
       value: null,
       detail: " Weakened, frizzy hair due to heat, chemicals, or environment.",
     },
     {
       type: "Shine",
       value: null,
       detail: "Lacks moisture, appears dull and frizzy.",
     },
   ];
  return (
    <div>
      <span className="text-4xl"> Select your hair goals </span>
      <div className="mx-40 flex flex-wrap justify-center">
        {Goals.map(({ type, value, detail }) => (
          <button className="border border-gray-100 m-4 py-10 bg-gray-100 rounded-lg hover:bg-purple-200">
            <label className="mx-4" for={type}>
              {type}
            </label>
            <div className="hidden border border-gray-500 rounded bg-purple-500">
              {detail}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
