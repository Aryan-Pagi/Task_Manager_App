import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask, editTask,updateTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
  });

  useEffect(()=>{
    if(editTask){
      setTask(editTask);
    }
  },[editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editTask){
      updateTask(task);
    }else{
      addTask({ ...task, id: Date.now(), completed: false });
    }
    setTask({
      title: "",
      description: "",
      priority: "",
      dueDate: "",
    });
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md p-6 grid gap-3"
      >
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          Add New Task
        </h3>

        <div className="flex flex-col">
          <label
            htmlFor="taskName"
            className="text-sm text-slate-600 dark:text-slate-300 mb-1"
          >
            Task Name
          </label>
          <input
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            type="text"
            id="taskName"
            placeholder="Enter task name"
            className="rounded-md border border-slate-200 dark:border-slate-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-sm text-slate-600 dark:text-slate-300 mb-1"
          >
            Description
          </label>
          <input
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            type="text"
            id="description"
            placeholder="Brief description..."
            className="rounded-md border border-slate-200 dark:border-slate-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label
              htmlFor="priority"
              className="text-sm text-slate-600 dark:text-slate-300 mb-1"
            >
              Priority
            </label>
            <select
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
              id="priority"
              className="rounded-md border border-slate-200 dark:border-slate-700 p-2 bg-white dark:bg-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <option value="" disabled>
                Select priority
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="dueDate"
              className="text-sm text-slate-600 dark:text-slate-300 mb-1"
            >
              Due Date
            </label>
            <input
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
              type="date"
              id="dueDate"
              className="rounded-md border border-slate-200 dark:border-slate-700 p-2 bg-white dark:bg-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
        </div>

        <div className="flex items-center justify-end mt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-4 py-2 rounded-md shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            {
              editTask ? "Update Task" :"Add Task"
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
