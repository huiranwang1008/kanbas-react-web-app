import { Link, useLocation } from "react-router-dom"; // Added `useLocation` to handle active link
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KanbasNavigation() {
  const location = useLocation(); // Use `useLocation` to determine the active link
  const navigate = useNavigate();

  // Redirect to Dashboard by default when accessing /Kanbas
  useEffect(() => {
    if (location.pathname === "/Kanbas") {
      navigate("/Kanbas/Dashboard");
    }
  }, [location, navigate]);

  return (
    
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }} // Sidebar width: 110 pixels
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* NEU Link */}
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>

      {/* Account Link */}
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </Link>

      {/* Dashboard Link */}
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Dashboard"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>

      {/* Courses Link */}
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Courses"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>

      {/* Additional Links: Calendar */}
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Calendar"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>

      {/* Additional Links: Inbox */}
      <Link
        to="/Kanbas/Settings"
        id="wd-settings-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Settings"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>

      {/* Lab Link */}
      <Link
        to="/Kanbas/Labs"
        id="wd-lab-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Labs"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}