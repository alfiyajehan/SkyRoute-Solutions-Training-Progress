// TaskItem.jsx
import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing && editedName.trim()) {
      editTask({ ...task, name: editedName });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200">
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      ) : (
        <span className="text-gray-800 text-lg">{task.name}</span>
      )}
      <div className="flex space-x-2">
        <button
          onClick={handleEdit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg transition-all"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
