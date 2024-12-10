import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithModules() {
  const [module, setModule] = useState({
    id: "CS101",
    name: "Introduction to Computer Science",
    description: "An overview of computer science fundamentals",
    course: "Computer Science",
  });

  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  const updateModuleName = () => {
    fetch(`${MODULE_API_URL}/name/${module.name}`)
      .then((response) => response.json())
      .then((updatedModule) => setModule(updatedModule));
  };

  const updateModuleDescription = () => {
    fetch(`${MODULE_API_URL}/description/${module.description}`)
      .then((response) => response.json())
      .then((updatedModule) => setModule(updatedModule));
  };

  return (
    <div id="wd-working-with-module">
      <h3>Working With Module</h3>

      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
        target="_blank"
        rel="noreferrer"
      >
        Get Module
      </a>
      <hr />

      <h4>Retrieving Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-secondary"
        href={`${MODULE_API_URL}/name`}
        target="_blank"
        rel="noreferrer"
      >
        Get Module Name
      </a>
      <hr />

      <h4>Updating Module Name</h4>
      <input
        type="text"
        className="form-control"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <button className="btn btn-success mt-2" onClick={updateModuleName}>
        Update Module Name
      </button>
      <hr />

      <h4>Updating Module Description</h4>
      <input
        type="text"
        className="form-control"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <button className="btn btn-warning mt-2" onClick={updateModuleDescription}>
        Update Module Description
      </button>
    </div>
  );
}