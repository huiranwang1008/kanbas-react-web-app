import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container my-5">
      <h1>Signup</h1>
      {/* Username Field */}
      <input
        id="wd-signup-username"
        placeholder="username"
        className="form-control mb-2"
      /><br />
      {/* Password Field */}
      <input
        id="wd-signup-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      /><br />
      {/* Signup Button */}
      <Link
        id="wd-signup-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100"
      >
        Signup
      </Link>
      <br />
      {/* Link to Signin */}
      <Link id="wd-signin-link" to="/Kanbas/Account/Signin" className="d-block mt-2">
        Signin
      </Link>
    </div>
  );
}