// EditTask.jsx
import React, { useState } from 'react';

const EditTask = ({ task, onUpdate }) => {
  const [updatedTask, setUpdatedTask] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...task, title: updatedTask });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <input
        type="text"
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Edit task"
        required
      />
      <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-all">
        Update Task
      </button>
    </form>
  );
};

export default EditTask;
