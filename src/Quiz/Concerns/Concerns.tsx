import React from "react";

export default function Concerns() {
  const concernsType = [
    { type: "Fine weak hair", value: null, detail: ''},
    { type: "Oily / Greasy Hair", value: null },
    { type: "Dandruff", value: null },
    { type: "Sensitive scalp", value: null },
    { type: "Damaged hair", value: null },
    { type: "Dry", value: null },
  ];

  return (
    <div>
      Concerns
      {concernsType.map(({ type, value }) => (
        <div>
          <input type="checkbox" id={type} name={type} value={value} />
          <label for={type}>{type}</label>
        </div>
      ))}
    </div>
  );
}
