import { Route, Routes } from "react-router-dom";
import SideBar from "../Pages/Sidebar";
import HomePage from "./HomePage";
import Price from "./Pricing";
import Mywork from "./Work";

// routes will be handled from here - Govind
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Mywork />} />
      <Route path="/side" element={<SideBar />} />
      <Route path="/price" element={<Price />} />
    </Routes>
  );
};

export default AllRoutes;
