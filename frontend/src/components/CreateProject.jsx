import React, { useState } from "react";
import axios from "axios";

function CreateProject() {
  const [projectName, setProjectName] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!projectName) {
      alert("Enter project name");
      return;
    }

    try {
      await axios.post("http://localhost:5000/projects", {
        name: projectName,
        createdBy: "admin"
      });

      alert("Project Created Successfully");
      setProjectName("");
    } catch (error) {
      console.log(error);
      alert("Error creating project");
    }
  };

  return (
    <div>
      <h3>Create Project</h3>

      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <br /><br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateProject;