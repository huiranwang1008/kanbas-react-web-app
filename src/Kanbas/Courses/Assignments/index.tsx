import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { MdEditNote } from "react-icons/md"; 
import GreenCheckmark from "./GreenCheckmark";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { addAssignment, deleteAssignment } from "./reducer"; // 确保路径正确

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 使用 useSelector 从 Redux Store 获取当前课程的 assignments
  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments.filter(
      (assignment: any) => assignment.course === cid
    )
  );

  // 使用 useSelector 获取 modules 数据
  const relatedModules = useSelector((state: any) =>
    state.modulesReducer.modules.filter((module: any) => module.course === cid)
  );

  const getModulesText = (assignmentId: string) => {
    const modules = relatedModules.filter((module: any) =>
      module.lessons && module.lessons.some((lesson: any) => lesson.module === assignmentId)
    );
    return modules.length > 0 ? modules.map((module: any) => module.name).join(", ") : "No Modules";
  };

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="container">
      {/* Search and Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ maxWidth: "300px" }}> 
          <span className="input-group-text">
            <FaSearch className="text-secondary" />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div className="d-flex">
          <button
            id="wd-add-assignment-group"
            className="btn btn-outline-secondary me-2"
          >
            <FaPlus className="me-1" /> Group
          </button>
          <button
            id="wd-add-assignment"
            className="btn btn-danger"
            onClick={handleAddAssignment}
          >
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Assignments Header */}
      <div className="d-flex justify-content-between align-items-center p-3 bg-secondary">
        <div className="d-flex align-items-center">
          <PiDotsSixVerticalBold style={{ marginRight: "10px", fontSize: "1.5rem" }} />
          <span>ASSIGNMENTS</span>
        </div>
        <div className="d-flex align-items-center">
          <span style={{ marginRight: "16px" }}>40% of Total</span>
          <FaPlus style={{ marginRight: "16px" }} />
          <IoEllipsisVertical style={{ fontSize: "1.5rem" }} />
        </div>
      </div>

      {/* Assignment List */}
      <ul className="list-group rounded-0">
        {assignments.length > 0 ? (
          assignments.map((assignment: any) => (
            <li
              key={assignment._id}
              className="list-group-item p-3 d-flex justify-content-between align-items-center"
              style={{ borderLeft: "5px solid green" }}
            >
              <div className="d-flex align-items-center">
                <PiDotsSixVerticalBold style={{ marginRight: "10px", fontSize: "1.5rem" }} />
                <MdEditNote style={{ marginRight: "10px", fontSize: "1.5rem" }} />
                <div>
                  <div className="wd-assignment-list-item">
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link"
                    >
                      {assignment.title}
                    </Link>
                  </div>
                  <div className="text-muted">
                    <span style={{ color: "red" }}>
                      {getModulesText(assignment._id)}
                    </span>{" "}
                    | <b>Not available until</b> May 6 at 12:00am <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div style={{ marginRight: "16px" }}>
                  <GreenCheckmark />
                </div>
                <FaTrash
                  className="text-danger"
                  onClick={() => handleDeleteAssignment(assignment._id)}
                  style={{ cursor: "pointer" }}
                />
                <IoEllipsisVertical style={{ fontSize: "1.5rem" }} />
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item p-3 text-center">
            No assignments available for this course.
          </li>
        )}
      </ul>
    </div>
  );
}