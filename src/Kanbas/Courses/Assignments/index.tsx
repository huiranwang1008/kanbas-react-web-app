import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaSearch } from "react-icons/fa";
import { MdEditNote } from "react-icons/md"; 
import GreenCheckmark from "./GreenCheckmark";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Assignments() {
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
        {/* Assignment 1 */}
        <li className="list-group-item p-3 d-flex justify-content-between align-items-center"
            style={{ borderLeft: '5px solid green' }}>
          <div className="d-flex align-items-center">
            <PiDotsSixVerticalBold style={{ marginRight: '10px', fontSize: '1.5rem' }} />
            <MdEditNote style={{ marginRight: '10px', fontSize: '1.5rem' }} />
            <div>
            <li className="wd-assignment-list-item">
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/Assignments/Editor">
                A1
              </a>
            </li>
              <div className="text-muted">
                <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am <br />
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

        {/* Assignment 2 */}
        <li className="list-group-item p-3 d-flex justify-content-between align-items-center"
            style={{ borderLeft: '5px solid green' }}>
          <div className="d-flex align-items-center">
            <PiDotsSixVerticalBold style={{ marginRight: '10px', fontSize: '1.5rem' }} />
            <MdEditNote style={{ marginRight: '10px', fontSize: '1.5rem' }} />
            <div>
            <li className="wd-assignment-list-item">
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/Assignments/Editor">
                A2
              </a>
            </li>
              <div className="text-muted">
                <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am <br />
                <b>Due</b> May 20 at 11:59pm | 100 pts
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

        {/* Assignment 3 */}
        <li className="list-group-item p-3 d-flex justify-content-between align-items-center"
            style={{ borderLeft: '5px solid green' }}>
          <div className="d-flex align-items-center">
            <PiDotsSixVerticalBold style={{ marginRight: '10px', fontSize: '1.5rem' }} />
            <MdEditNote style={{ marginRight: '10px', fontSize: '1.5rem' }} />
            <div>
            <li className="wd-assignment-list-item">
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/Assignments/Editor">
                A2
              </a>
            </li>
              <div className="text-muted">
                <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am <br />
                <b>Due</b> May 27 at 11:59pm | 100 pts
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
      </ul>
    </div>
  );
}