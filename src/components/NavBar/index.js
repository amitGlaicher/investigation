import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import style from "./style.module.css";
// import apiCalls from '../../Helpers/apiCalls.js';
// import Answers from '../Answers';
import { ansContext } from "../../App";
import { userContext } from "../LayOut";

function NavBar({ setToken }) {
  const answersContext = useContext(ansContext);
  const { user, setUser } = useContext(userContext);
  const insights = async () => {
    console.log(user);
    navigate("./insights");
  };
  const navigate = useNavigate();
  return (
    <div className={style.navbar_container}>
      <Button
        text={"תחקור חדש"}
        onClick={() => {
          localStorage.setItem("chapters", "");
          answersContext.forEach((arr) => {
            arr[1]([]);
          });
          navigate("./");
        }}
      />
      <Button
        text={"ההתקדמות שלי"}
        onClick={() => {
          navigate("./Myadvance");
        }}
      />
      <Button text={"רשימת לקחים"} onClick={insights} />
      <Button
        text={"אוצר מילים"}
        onClick={() => {
          navigate("./vocabulary");
        }}
      />
      <Button
        text={"היסטוריה"}
        onClick={() => {
          navigate("./history");
        }}
      />
      <Button
        text={"התנתק"}
        onClick={() => {
          localStorage.removeItem("token");
          setUser(false);
        }}
      />
    </div>
  );
}

export default NavBar;
