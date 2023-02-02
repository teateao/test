import React from "react";
import { BaseLayout } from "./Layout/BaseLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Mypage } from "./pages/Mypage";
import { Poke } from "./pages/Poke";
import { Signup } from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticationProvider, useAuth } from "./components/Authentication2";
import { Msgpage } from "./pages/Msg";
import { Logout } from "./pages/Logout";
// import { MsgProvider } from "./components/Navigate";
function App() {
  // const { state } = useAuth();
  return (
    <AuthenticationProvider>
      {/* <MsgProvider> */}
        <Router>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="" element={<Home />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="msg" element={<Msgpage />} />
              <Route path="mypage" element={<Mypage />} />
              <Route path="poke" element={<Poke />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
        </Router>
      {/* </MsgProvider> */}
    </AuthenticationProvider>
  );
}

export default App;
