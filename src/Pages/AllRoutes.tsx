import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";
import Task from "./TaskPage/Task";
import Time from "./TimePage/Time";
import Mywork from "./Work";

// routes will be handled from here - Govind
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Mywork />} />
      <Route path="/task" element={<Task />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Time" element={<Time/>}/>
    </Routes>
  );
};

export default AllRoutes;
