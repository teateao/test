import React from "react";
import { BaseLayout } from "./Layout/BaseLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Mypage } from "./pages/mypage";
import { Poke } from "./pages/poke";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="poke" element={<Poke />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
