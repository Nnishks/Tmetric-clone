import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Price from "./Pricing";
import Login from "./Login";
import SignUp from "./SignUp";
import Task from "./TaskPage/Task";
import Time from "./TimePage/Time";
import Mywork from "./Work";
import RequiredAuth from "../HOC/RequiredAuth";

// feedback: for all team members: - Can we divide the routing into child modules?
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Mywork />} />
      
      <Route path="/price" element={<Price />} />
      <Route path="/task" element={<Task />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/Time"
        element={<RequiredAuth><Time /></RequiredAuth>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
