import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.jsx";
import Spinner from "./components/spinner/spinner.component.jsx";
import Gestures from "./pages/gestures/gestures";
import SignLanguage from "./pages/sign-language/sign-language";

import "./App.scss";

const App = () => (
  <div className="App">
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/gestures" element={<Gestures />} />
        <Route path="/signlanguage" element={<SignLanguage />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
