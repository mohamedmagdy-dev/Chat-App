import "./style/App.css";
import { Routes, Route } from "react-router";
// Import Pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import { AuthProvider } from "./context/AuthProvider";
// Import Components
import DarkModToggle from "./components/ui/DarkModToggle";
// Import Context
export default function App() {
  return (
    <>
      {/* DarkModToggle */}
      <DarkModToggle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </>
  );
}
