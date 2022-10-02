import { Route, Routes } from "react-router-dom";
import SideBar from "../Pages/Sidebar";
import HomePage from "./HomePage";
// <<<<<<< HEAD
import Price from "./Pricing";
// =======
import Login from "./Login";
import SignUp from "./SignUp";
import Task from "./TaskPage/Task";
import Time from "./TimePage/Time";
// >>>>>>> fff0467cbf3d62061774c709bcb4dbdfbdae80c2
import Mywork from "./Work";

// routes will be handled from here - Govind
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Mywork />} />
{/* <<<<<<< HEAD */}
      
      <Route path="/price" element={<Price />} />
{/* ======= */}
      <Route path="/task" element={<Task />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/time" element={<Time/>}/>
{/* >>>>>>> fff0467cbf3d62061774c709bcb4dbdfbdae80c2 */}
    </Routes>
  );
};

export default AllRoutes;
