import React, { useContext, useEffect } from "react";

import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

import AuthContext from "../Context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  });

  return (
    <>
      <Header />
      <section></section>
    </>
  );
};

export default Home;
