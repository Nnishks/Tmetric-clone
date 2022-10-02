import { Route, Routes } from "react-router-dom";
import SideBar from "../Pages/Sidebar";
import Price from "./Pricing";
import Login from "./Login";
import SignUp from "./SignUp";
import Task from "./TaskPage/Task";
import Time from "./TimePage/Time";
import Mywork from "./Work";
import HomePage from "./HomePage";
import RequiredAuth from "../HOC/RequiredAuth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Mywork />} />
      <Route path="/side" element={<SideBar />} />
      <Route path="/price" element={<Price />} />
      <Route path="/task" element={<Task />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/Time"
        element={
          <RequiredAuth>
            <Time />
          </RequiredAuth>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
