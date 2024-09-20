import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/nodejs.jpg" width={200} alt="Node JS" />
            <div>
              <h5>CS5678 Node JS</h5>
              <p className="wd-dashboard-course-title">Backend with Node.js</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9101/Home">
            <img src="/images/database.jpg" width={200} alt="Databases" />
            <div>
              <h5>CS9101 Databases</h5>
              <p className="wd-dashboard-course-title">Database Management Systems</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1122/Home">
            <img src="/images/python.jpg" width={200} alt="Python Programming" />
            <div>
              <h5>CS1122 Python Programming</h5>
              <p className="wd-dashboard-course-title">Introduction to Python</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3344/Home">
            <img src="/images/machinelearning.jpg" width={200} alt="Machine Learning" />
            <div>
              <h5>CS3344 Machine Learning</h5>
              <p className="wd-dashboard-course-title">Introduction to Machine Learning</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5566/Home">
            <img src="/images/webdevelopment.jpg" width={200} alt="Web Development" />
            <div>
              <h5>CS5566 Web Development</h5>
              <p className="wd-dashboard-course-title">Modern Web Development</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7788/Home">
            <img src="/images/ai.jpg" width={200} alt="Artificial Intelligence" />
            <div>
              <h5>CS7788 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">Introduction to AI</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
}