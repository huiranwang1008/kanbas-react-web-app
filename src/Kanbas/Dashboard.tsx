import { Link } from "react-router-dom";
import { MdEditNote } from "react-icons/md";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      {/* Dashboard Title */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Published Courses Subtitle */}
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      {/* Courses Grid */}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course 1 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt="React JS"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <MdEditNote className="text-primary" style={{ fontSize: '1.5rem' }} />
                </div>
              </Link>
            </div>
          </div>

          {/* Course 2 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5678/Home"
              >
                <img
                  src="/images/nodejs.jpg"
                  width="100%"
                  height={160}
                  alt="Node JS"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5678 Node JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Backend with Node.js
                  </p>
                  <MdEditNote className="text-primary" style={{ fontSize: '1.5rem' }} />
                </div>
              </Link>
            </div>
          </div>

          {/* Course 3 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/9101/Home"
              >
                <img
                  src="/images/database.jpg"
                  width="100%"
                  height={160}
                  alt="Databases"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS9101 Databases
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Database Management Systems
                  </p>
                  <MdEditNote className="text-primary" style={{ fontSize: '1.5rem' }} />
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1122/Home"
              >
                <img
                  src="/images/python.jpg"
                  width="100%"
                  height={160}
                  alt="Python Programming"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1122 Python Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to Python
                  </p>
                  <MdEditNote className="text-primary" style={{ fontSize: '1.5rem' }} />
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3344/Home"
              >
                <img
                  src="/images/machinelearning.jpg"
                  width="100%"
                  height={160}
                  alt="Machine Learning"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3344 Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to Machine Learning
                  </p>
                  <MdEditNote className="text-primary" style={{ fontSize: '1.5rem' }} />
                </div>
              </Link>
            </div>
          </div>

          {/* Course 6 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5566/Home"
              >
                <img
                  src="/images/webdevelopment.jpg"
                  width="100%"
                  height={160}
                  alt="Web Development"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5566 Web Development
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Modern Web Development
                  </p>
                  <MdEditNote className="text-primary" style={{ fontSize: '1.5rem' }} />
                </div>
              </Link>
            </div>
          </div>

          {/* Course 7 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/7788/Home"
              >
                <img
                  src="/images/ai.jpg"
                  width="100%"
                  height={160}
                  alt="Artificial Intelligence"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7788 Artificial Intelligence
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to AI
                  </p>
                  <MdEditNote className="text-primary" style={{ fontSize: '1.5rem' }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}