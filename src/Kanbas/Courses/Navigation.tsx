import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation(); 

  return (
    <div id="wd-courses-navigation" className="list-group wd fs-5 rounded-0">
      <Link to="Home"
        className={`list-group-item border-0 ${location.pathname.includes('Home') ? 'active' : ''}`}>
        Home
      </Link><br />
      <Link to="Modules"
        className={`list-group-item text-danger border-0 ${location.pathname.includes('Modules') ? 'active' : ''}`}>
        Modules
      </Link><br />
      <Link to="Piazza"
        className={`list-group-item text-danger border-0 ${location.pathname.includes('Piazza') ? 'active' : ''}`}>
        Piazza
      </Link><br />
      <Link to="Zoom"
        className={`list-group-item text-danger border-0 ${location.pathname.includes('Zoom') ? 'active' : ''}`}>
        Zoom
      </Link><br />
      <Link to="Assignments"
        className={`list-group-item text-danger border-0 ${location.pathname.includes('Assignments') ? 'active' : ''}`}>
        Assignments
      </Link><br />
      <Link to="Quizzes"
        className={`list-group-item text-danger border-0 ${location.pathname.includes('Quizzes') ? 'active' : ''}`}>
        Quizzes
      </Link><br />
      <Link to="People"
        className={`list-group-item text-danger border-0 ${location.pathname.includes('People') ? 'active' : ''}`}>
        People
      </Link><br />
    </div>
  );
}