import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database"; 
export default function Modules() {
const { cid } = useParams();

const modules = db.modules;

  const courseModules = modules.filter((module: any) => module.course === cid);

  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      
      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.length > 0 ? (
          courseModules.map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
                <span> <BsGripVertical className="me-2 fs-3" /> {module.name} </span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '8px' }}>
                    <GreenCheckmark />
                  </div>
                  <div style={{ marginRight: '8px' }}>
                    <FaPlus />
                  </div>
                  <IoEllipsisVertical style={{ fontSize: '1.5rem' }} />
                </div>
              </div>

              {module.lessons && module.lessons.length > 0 ? (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1" key={lesson._id}>
                      <span> <BsGripVertical className="me-2 fs-3" /> {lesson.name} </span>
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No lessons available for this module.</p>
              )}
            </li>
          ))
        ) : (
          <li className="wd-module list-group-item p-3 text-center">No modules available for this course.</li>
        )}
      </ul>
    </div>
  );
}