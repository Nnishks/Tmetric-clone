import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

// routes will be handled from here - Govind
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AllRoutes;
