import "./style/App.css";
import { Routes, Route } from "react-router";
// Import Pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";

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

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
