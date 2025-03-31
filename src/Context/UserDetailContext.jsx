import React, { createContext, useState, useEffect } from "react";
import BASE_URL from "../constants/API";

const UserDetailContext = createContext();

export const UserDetailProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("userAuthToken");
      try {
        const response = await fetch(`${BASE_URL}/users?id=${token}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUserDetails();
  }, [userDetails, setUserDetails]);

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContext;
