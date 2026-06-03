import React, { useState } from 'react'
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskFilter = () => {
    const {filter,setFilter}=useContext(TaskContext);

  return (
    <div className='flex gap-2 justify-center'>
      <button 
        className={`p-1 rounded px-2 ${filter === "All" ? "bg-amber-200" : "bg-gray-200"}`}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button 
        className={`p-1 rounded ${filter === "Completed" ? "bg-green-200" : "bg-gray-200"}`}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
      <button 
        className={`p-1 rounded ${filter === "Pending" ? "bg-red-200" : "bg-gray-200"}`}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>
    </div>
  )
}

export default TaskFilter
