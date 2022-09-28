import { Box } from "@chakra-ui/react";
import "./App.css";
import MobileMenu from "./Components/Navbar/MobileMenu";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
