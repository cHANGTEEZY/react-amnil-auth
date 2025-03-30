import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import { AuthenticateProvider } from "./Context/AuthContext";
import Error from "./Pages/Error";
import { UserDetailProvider } from "./Context/UserDetailContext";

const App = () => {
  return (
    <UserDetailProvider>
      <AuthenticateProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AuthenticateProvider>
    </UserDetailProvider>
  );
};

export default App;
