import React from "react";
import HelloPage from "./Quiz/HelloPage/HelloPage.tsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Quiz() {
  return (
    <div className="float-left">
      <BrowserRouter>
        <Routes>
          <Route path="/Hellopage" index element={<HelloPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
