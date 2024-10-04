import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineCloudUpload } from "react-icons/ai";  // Upload button icon
import { BsPeopleFill } from "react-icons/bs";  // People icon
import { IoMdArchive } from "react-icons/io";  // Archive icon

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      
      {/* Publish / Unpublish Section */}
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish 
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish 
          </button>
        </div>
      </div>
      <br />

      {/* Import Section */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content 
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons 
      </button>

      {/* Upload to Canvas Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineCloudUpload className="me-2 fs-5" /> Upload to Canvas 
      </button>

      {/* Manage People Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsPeopleFill className="me-2 fs-5" /> Manage People 
      </button>

      {/* View Course Archive Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoMdArchive className="me-2 fs-5" /> View Course Archive 
      </button>
    </div>
  );
}