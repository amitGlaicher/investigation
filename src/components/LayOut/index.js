import React, { createContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import InvestigationPage from "../../pages/InvestigationPage";
import LoginPage from "../../pages/LoginPage";
import apiCalls from "../../Helpers/apiCalls";

export const userContext = createContext();
export const testDataContext = createContext();
function LayOut() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const getUser = async () => {
    const res = await apiCalls("get", "user");
    console.log(res);
    setUser(res.data);
    navigate("./");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    } else setUser(false);
  }, []);
  return (
    <userContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route
          path="/*"
          element={
            user ? <InvestigationPage setUser={setUser} /> : <LoginPage />
          }
        />
      </Routes>
    </userContext.Provider>
  );
}

export default LayOut;
