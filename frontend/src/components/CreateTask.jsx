import React, { useState } from "react";

function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleCreateTask = (e) => {
    e.preventDefault();

    if (!taskName || !assignedTo) {
      alert("Please fill all fields");
      return;
    }

    alert(`Task Created: ${taskName} → Assigned to ${assignedTo}`);

    // clear inputs
    setTaskName("");
    setAssignedTo("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Create Task</h3>

      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Enter Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Assign To (User Name)"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />
        <br /><br />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;