import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer"; // 确保路径正确
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 检查是否为新建作业
  const isNewAssignment = !aid;

  // 如果是编辑模式，则尝试从 Redux store 中获取作业
  const existingAssignment = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find((assignment: any) => assignment._id === aid)
  );

  // 初始化 assignment 状态
  const [assignment, setAssignment] = useState(
    existingAssignment || {
      title: "New Assignment",
      description: "",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      course: cid,
    }
  );

  // 如果为编辑模式并且有现有作业，则设置 assignment 数据
  useEffect(() => {
    if (existingAssignment && !isNewAssignment) {
      setAssignment(existingAssignment);
    }
  }, [existingAssignment, isNewAssignment]);

  // 保存作业
  const handleSave = () => {
  if (isNewAssignment) {
    console.log("Dispatching addAssignment");
    dispatch(addAssignment({ ...assignment, _id: new Date().getTime().toString() }));
  } else {
    dispatch(updateAssignment(assignment));
  }
  navigate(`/Kanbas/Courses/${cid}/Assignments`);
};

  // 取消并返回到 Assignments 页面
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container my-4">
      <h2 className="mb-4">{isNewAssignment ? "New Assignment" : "Edit Assignment"}</h2>

      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className="form-control"
        />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <div className="border p-3">
          <textarea
            id="wd-description"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            className="form-control"
          />
        </div>
      </div>

      {/* Points */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: +e.target.value })}
            className="form-control"
          />
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
        <div className="col-md-3 text-end">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-9">
          <div className="border p-3">
            <select id="wd-submission-type" className="form-select">
              <option value="online">Online</option>
              <option value="paper">On Paper</option>
            </select>

            <label className="form-label mt-3">Online Entry Options</label>
            <div className="form-check">
              <input type="checkbox" id="wd-text-entry" className="form-check-input" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-website-url" className="form-check-input" />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label className="form-label">Assign</label>
        </div>
        <div className="col-md-9">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
              <select id="wd-assign-to" className="form-select">
                <option value="everyone">Everyone</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <input
                type="datetime-local"
                id="wd-due-date"
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  value={assignment.availableFrom}
                  onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  value={assignment.availableUntil}
                  onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end">
        <button onClick={handleCancel} className="btn btn-secondary me-2">Cancel</button>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}