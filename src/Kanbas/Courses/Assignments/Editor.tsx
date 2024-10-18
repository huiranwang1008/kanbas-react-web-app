import React from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; 

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 

  const assignment = db.assignments.find((assignment) => assignment._id === aid);

  if (!assignment) {
    return <p>Assignment not found</p>; 
  }

  return (
    <div id="wd-assignments-editor" className="container my-4">
      <h2 className="mb-4">Edit Assignment</h2>

      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          value={assignment.title} 
          className="form-control"
          readOnly
        />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <div className="border p-3">
          <p>
            The assignment is <a href="#" className="text-danger">available online</a>
          </p>
          <p>
            Submit a link to the landing page of your Web application running on Netlify.
          </p>
          <p>
            The landing page should include the following:
          </p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the <a href="#" className="text-danger">Kanbas application</a></li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p>
            The Kanbas application should include a link to navigate back to the landing page.
          </p>
        </div>
      </div>

      {/* Points */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <select id="wd-group" className="form-select">
            <option value="assignments">Assignments</option>
            <option value="quizzes">Quizzes</option>
          </select>
        </div>
      </div>

      {/* Display Grade As */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
        </div>
        <div className="col-md-9">
          <select id="wd-display-grade-as" className="form-select">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        {/* Left column for the Submission Type title */}
        <div className="col-md-3 text-end">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>

        {/* Right column for the Submission Type and Online Entry Options in a box */}
        <div className="col-md-9">
          <div className="border p-3">
            {/* Submission Type */}
            <div className="mb-3">
              <select id="wd-submission-type" className="form-select">
                <option value="online">Online</option>
                <option value="paper">On Paper</option>
              </select>
            </div>

            {/* Online Entry Options */}
            <label className="form-label">Online Entry Options</label>
            <div className="form-check">
              <input type="checkbox" id="wd-text-entry" className="form-check-input" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-website-url" className="form-check-input" />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-file-upload" className="form-check-input" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        {/* Left column for the Assign title */}
        <div className="col-md-3 text-end">
          <label className="form-label">Assign</label>
        </div>

        {/* Right column for the Assign To, Due, and Available From/Until in a box */}
        <div className="col-md-9">
          <div className="border p-3">
            {/* Assign To */}
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
              <select id="wd-assign-to" className="form-select">
                <option value="everyone">Everyone</option>
                <option value="group1">Group 1</option>
              </select>
            </div>

            {/* Due */}
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <input type="datetime-local" id="wd-due-date" className="form-control" value="2024-05-13T23:59" />
            </div>

            {/* Available From and Until */}
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                <input type="datetime-local" id="wd-available-from" className="form-control" value="2024-05-06T12:00" />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input type="datetime-local" id="wd-available-until" className="form-control" value="2024-05-20T12:00" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}