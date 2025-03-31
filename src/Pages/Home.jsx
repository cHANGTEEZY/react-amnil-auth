import "../css/Home.css";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

import AuthContext from "../Context/AuthContext";
import UserDetailContext from "../Context/UserDetailContext";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { userDetails } = useContext(UserDetailContext);
  const navigate = useNavigate();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header />
      <main>
        <section className="user-details-cards">
          <div>
            {userDetails && userDetails.length > 0 ? (
              <>
                <button
                  type="button"
                  className={`user-detail-card ${
                    isButtonClicked ? "animate-button" : ""
                  }`}
                  onClick={() => setIsButtonClicked((prev) => !prev)}
                >
                  Get info
                  <ChevronRight className="" />
                </button>
                <p
                  className={`user-detail-card ${
                    isButtonClicked ? "animate-button" : ""
                  }`}
                >
                  {userDetails[0]?.firstName}
                </p>
                <p
                  className={`user-detail-card ${
                    isButtonClicked ? "animate-button" : ""
                  }`}
                >
                  {userDetails[0]?.lastName}
                </p>
                <p
                  className={`user-detail-card ${
                    isButtonClicked ? "animate-button" : ""
                  }`}
                >
                  {userDetails[0]?.email}
                </p>
              </>
            ) : (
              <p>Loading user details...</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
