import { FaPlus ,FaBan} from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {/* Module Button */}
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      {/* Dropdown for Publish/Unpublish */}
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          {/* Publish all modules and items */}
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>

          {/* Publish modules only */}
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>

          {/* Unpublish all modules and items */}
          <li>
            <button id="wd-unpublish-all-modules-and-items" className="dropdown-item">
              <FaBan className="text-danger me-2" />
              Unpublish all modules and items
            </button>
          </li>

          {/* Unpublish modules only */}
          <li>
            <button id="wd-unpublish-modules-only" className="dropdown-item">
              <FaBan className="text-danger me-2" />
              Unpublish modules only
            </button>
          </li>
        </ul>
      </div>

      {/* View Progress Button */}
      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
        View Progress
      </button>

      {/* Collapse All Button */}
      <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-1 float-end">
        Collapse All
      </button>
    </div>
  );
}