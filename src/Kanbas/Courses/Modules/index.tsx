import React, { useState } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import "../../styles.css";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    dispatch(addModule({ name: moduleName, course: cid }));
    setModuleName("");
  };

  return (
    <div id="wd-modules-container">
      <div id="wd-modules" className="list-group rounded-0">
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={handleAddModule}
        />
        <ul className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid)
            .map((module: any) => (
              <li
                className="wd-module module-list-group-item p-0 mb-5 fs-5 border-gray"
                key={module._id}
              >
                <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                     {!module.editing && module.name}
                    {module.editing && (
                      <input
                        className="form-control w-50 d-inline-block"
                        onChange={(e) =>
                          dispatch(updateModule({ ...module, name: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            dispatch(updateModule({ ...module, editing: false }));
                          }
                        }}
                        defaultValue={module.name}
                      />
                    )}
                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={() => dispatch(deleteModule(module._id))}
                      editModule={() => dispatch(editModule(module._id))}
                    />
                  </div>
                </div>

                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: any) => (
                      <li
                        className="wd-lesson module-list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                        key={lesson._id}
                      >
                        <div className="d-flex align-items-center">
                          <BsGripVertical className="me-2 fs-3" />
                          {lesson.name}
                        </div>
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>

      <div id="wd-course-status" className="course-status">
        <h4>Course Status</h4>
        <p>Some additional course-related information can go here.</p >
      </div>
    </div>
  );
}