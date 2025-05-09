// AddTask.jsx
import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3 mb-6">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-all">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
