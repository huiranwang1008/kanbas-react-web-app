import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();

  // Array of links
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group wd fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link} 
          to={link}
          className={`list-group-item text-danger border-0 ${location.pathname.includes(link) ? 'active' : ''}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}