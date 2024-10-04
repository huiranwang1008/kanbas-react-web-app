import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation(); 

  return (
    <div id="wd-account-navigation" className="list-group">
      {/* Signin Link */}
      <Link
        to="/Kanbas/Account/Signin"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Account/Signin"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        Signin
      </Link>

      {/* Signup Link */}
      <Link
        to="/Kanbas/Account/Signup"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Account/Signup"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        Signup
      </Link>

      {/* Profile Link */}
      <Link
        to="/Kanbas/Account/Profile"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Account/Profile"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}