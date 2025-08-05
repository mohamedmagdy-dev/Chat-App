import "./style/App.css";
import { Routes, Route } from "react-router";
// Import Pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

// Import Components
import DarkModToggle from "./components/ui/DarkModToggle";
export default function App() {
  return (
    <>
      {/* DarkModToggle */}
      <DarkModToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
