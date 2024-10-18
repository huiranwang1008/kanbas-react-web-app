import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaSearch } from "react-icons/fa";
import { MdEditNote } from "react-icons/md"; 
import GreenCheckmark from "./GreenCheckmark";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database"; 

export default function Assignments() {
  const { cid } = useParams(); 

  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  const getModulesText = (assignmentId: string) => {
    const relatedModules = db.modules.filter((module) =>
      module.course === cid && 
      module.lessons && 
      module.lessons.some((lesson) => lesson.module === assignmentId)
    );
    return relatedModules.map(module => module.name).join(", ");
  };

  return (
    <div id="wd-assignments" className="container">
      {/* Search and Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Search Bar */}
        <div className="input-group" style={{ maxWidth: '300px' }}> 
          <span className="input-group-text">
            <FaSearch className="text-secondary" />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        {/* Buttons */}
        <div className="d-flex">
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>
    
      {/* Assignments 40% of Total */}
      <div className="d-flex justify-content-between align-items-center p-3 bg-secondary">
        <div className="d-flex align-items-center">
          <PiDotsSixVerticalBold style={{ marginRight: '10px', fontSize: '1.5rem' }} />
          <span>ASSIGNMENTS</span>
        </div>
        <div className="d-flex align-items-center">
          <span style={{ marginRight: '16px' }}>40% of Total</span>
          <FaPlus style={{ marginRight: '16px' }} />
          <IoEllipsisVertical style={{ fontSize: '1.5rem' }} />
        </div>
      </div>

      {/* Assignment List */}
      <ul className="list-group rounded-0">
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item p-3 d-flex justify-content-between align-items-center"
                style={{ borderLeft: '5px solid green' }}>
              <div className="d-flex align-items-center">
                <PiDotsSixVerticalBold style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                <MdEditNote style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                <div>
                  <li className="wd-assignment-list-item">
                  <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                    {assignment.title}
                  </Link>
                  </li>
                  <div className="text-muted">
                    <span style={{ color: 'red' }}>{getModulesText(assignment._id) || "No Modules"}</span> 
                    | <b>Not available until</b> May 6 at 12:00am <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div style={{ marginRight: '16px' }}>
                  <GreenCheckmark />
                </div>
                <IoEllipsisVertical style={{ fontSize: '1.5rem' }} />
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item p-3 text-center">No assignments available for this course.</li>
        )}
      </ul>
    </div>
  );
}