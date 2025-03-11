import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the hook to get auth status

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
