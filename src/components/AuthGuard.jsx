// src/components/AuthGuard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../store/slices/authSlice";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

/**
 * AuthGuard component - Protects routes that require authentication
 * Wraps components that need authentication
 */
const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isChecking, setIsChecking] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkAuth = async () => {
      // No token = not authenticated
      if (!token) {
        console.log("🔒 AuthGuard: No token found, redirecting to login");
        toast.error("Please login to access this page");
        navigate("/login", { replace: true });
        return;
      }

      // Have token but no user data in Redux = fetch profile
      if (!user) {
        console.log(
          "👤 AuthGuard: Token exists but no user data, fetching profile...",
        );
        try {
          const result = await dispatch(getProfile());
          if (result.type === "auth/getProfile/fulfilled") {
            console.log(
              "✅ AuthGuard: Profile fetched successfully",
              result.payload.data,
            );
            setIsChecking(false);
          } else {
            console.error(
              "❌ AuthGuard: Failed to fetch profile",
              result.payload,
            );
            toast.error("Session expired. Please login again.");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login", { replace: true });
          }
        } catch (error) {
          console.error("❌ AuthGuard: Error fetching profile", error);
          toast.error("Authentication failed. Please login again.");
          navigate("/login", { replace: true });
        }
      } else {
        console.log("✅ AuthGuard: User already authenticated", user);
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [token, user, dispatch, navigate]);

  // Show loading while checking authentication
  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-3" />
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render children
  if (!token || !isAuthenticated || !user) {
    return null;
  }

  return children;
};

export default AuthGuard;
