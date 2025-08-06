import { Navigate } from "react-router";
import { useSelector } from "react-redux";
export default function ProductRoutes({ children }) {
  const { user } = useSelector((state) => state.Auth);
  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
}
