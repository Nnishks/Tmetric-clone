import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Task from "./TaskPage/Task";
import Mywork from "./Work";

// routes will be handled from here - Govind
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Mywork />} />
      <Route path="/task" element={<Task/>} />
    </Routes>
  );
};

export default AllRoutes;
