import React from "react";
import HelloPage from "./Quiz/HelloPage/HelloPage.tsx";
import Allergy from "./Quiz/Allergy/Allergy.tsx";
import Concerns from "./Quiz/Concerns/Concerns.tsx";
import Goals from "./Quiz/Goals/Goals.tsx";
import Age from "./Quiz/Age/Age.tsx"
import HairType from "./Quiz/HairType/HairType.tsx";
import Results from "./Quiz/Results/Results.tsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Quiz() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Hellopage" index element={<HelloPage />} />
          <Route path="/Allergy" index element={<Allergy />} />
          <Route path="/Concerns" index element={<Concerns />} />
          <Route path="/Goals" index element={<Goals />} />
          <Route path="/Age" index element={<Age />} />
          <Route path="/HairType" index element={<HairType />} />
          <Route path="/Results" index element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
