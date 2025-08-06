import "./style/App.css";
import { Routes, Route } from "react-router";
// Import Pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import Friends from "./pages/Friends"
import Calls from "./pages/Calls"
import Profile from "./pages/Profile"

// Import Components
import DarkModToggle from "./components/ui/DarkModToggle";
import ProductRoutes from "./components/ProductRoutes";
export default function App() {
  return (
    <>
      {/* DarkModToggle */}
      <DarkModToggle />
      <Routes>
        <Route
          path="/"
          element={
            <ProductRoutes>
              <Home />
            </ProductRoutes>
          }
        />
        <Route
          path="/home"
          element={
            <ProductRoutes>
              <Home />
            </ProductRoutes>
          }
        />
        <Route
          path="/calls"
          element={
            <ProductRoutes>
              <Calls />
            </ProductRoutes>
          }
        />
        <Route
          path="/friends"
          element={
            <ProductRoutes>
              <Friends />
            </ProductRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProductRoutes>
              <Profile />
            </ProductRoutes>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
