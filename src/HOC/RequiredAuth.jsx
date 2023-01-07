import React from "react";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const token = useSelector((store) => store.auth.token);
  const navigate = useNavigate();
 
  if (!token) {
    navigate("/login");
  }
 
  return children;
};

export default RequiredAuth;
