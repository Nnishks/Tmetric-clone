import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const token = useSelector((store) => store.auth.token.token);
  const navigate = useNavigate();

  if (token) {
    return children;
  }
  navigate("/login");
};

export default RequiredAuth;
