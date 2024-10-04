import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function Modules() {
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      
      <ul id="wd-modules" className="list-group rounded-0">
        {/* Week 1 Module */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
          <span> Week 1 </span>
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

          <ul className="wd-lessons list-group rounded-0">
            {/* Lesson 1 */}
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <span>LEARNING OBJECTIVES</span>
              <LessonControlButtons />
            </li>

            {/* Lesson 2 */}
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <span>Introduction to the course</span>
              <LessonControlButtons />
            </li>

            {/* Lesson 3 */}
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <span>Learn what is Web Development</span>
              <LessonControlButtons />
            </li>

            {/* Lesson 4 */}
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <span>LESSON 1</span>
              <LessonControlButtons />
            </li>

            {/* Lesson 5 */}
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <span>LESSON 2</span>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* Week 2 Module */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
          <span> Week 2 </span>
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

          <ul className="wd-lessons list-group rounded-0">
            {/* Lesson 1 */}
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <span>LEARNING OBJECTIVES</span>
              <LessonControlButtons />
            </li>

            {/* Lesson 2 */}
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <span>LESSON 1</span>
              <LessonControlButtons />
            </li>

            {/* Lesson 3 */}
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <span>LESSON 2</span>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
  