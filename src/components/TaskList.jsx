import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import DeleteModal from "./DeleteModal";

const priorityColor = (p) => {
  if (!p) return "bg-slate-200 text-slate-800";
  if (p.toLowerCase() === "high") return "bg-rose-200 text-rose-800";
  if (p.toLowerCase() === "medium") return "bg-amber-200 text-amber-800";
  return "bg-emerald-200 text-emerald-800";
};

const TaskList = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const {
    tasks,
    deleteTask,
    toggleTaskCompletion,
    searchTerm,
    filter,
    updateTask,
    setEditTask,
  } = useContext(TaskContext);
  const searchTaskList = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filterTaskList = searchTaskList.filter((task) => {
    if (filter === "Completed") {
      return task.completed;
    }
    if (filter === "Pending") {
      return !task.completed;
    }
    return true;
  });

  const sortedTaskList = [...filterTaskList].sort((a, b) => {
    if (sortBy === "newest") {
      return b.id - a.id;
    }
    if (sortBy === "oldest") {
      return a.id - b.id;
    }
    const priorityValue = (p) => {
      if (!p) return 0;
      if (p.toLowerCase() === "high") return 3;
      if (p.toLowerCase() === "medium") return 2;
      return 1;
    };
    if (sortBy === "priorityHigh") {
      return priorityValue(b.priority) - priorityValue(a.priority);
    }
    if (sortBy === "priorityLow") {
      return priorityValue(a.priority) - priorityValue(b.priority);
    }
  });

  const totalTasks = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="w-full md:w-2/3 p-4">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-md p-4 h-full overflow-x-hidden">
      {}
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
            Tasks
          </h3>
          <div>
            <label
              htmlFor="sort"
              className="text-sm text-slate-600 dark:text-slate-300 mr-2"
            >
              Sort by:
            </label>
            <select
              name="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white h-7 dark:bg-slate-700 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="priorityHigh">Priority High-Low</option>
              <option value="priorityLow">Priority Low-High</option>
            </select>
          </div>
          <div className="text-white flex gap-3">
            <span>Total: {totalTasks}</span>
            <span>Completed: {tasksCompleted}</span>
            <span>Pending: {pendingTasks}</span>
          </div>
        </div>
        {
           showDeleteModal &&( <DeleteModal 
            isOpen={showDeleteModal}
            onClose={()=>{
                setShowDeleteModal(false);
                setTaskToDelete(null);
            }}
            onConfirm={()=>{
                deleteTask(taskToDelete);
                setShowDeleteModal(false);
                setTaskToDelete(null);
            }}
            />)
        }
        {sortedTaskList.length > 0 ? (
          <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
            {sortedTaskList.map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900"
              >
                <div
                  className={`shrink-0 w-3 h-12 rounded-full ${priorityColor(task.priority)}`}
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h4
                      className={`text-md font-medium ${task.completed ? "line-through text-slate-400" : "text-slate-900 dark:text-slate-100"}`}
                    >
                      {task.title}
                    </h4>

                    <div className="text-sm text-slate-500 dark:text-slate-400 flex gap-2">
                      <div>
                        <p
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            task.completed
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          Status: {task.completed ? "Completed" : "Pending"}
                        </p>
                      </div>
                      <div>Due: {task.dueDate || "—"}</div>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    {task.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {task.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => setEditTask(task)}
                      className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setShowDeleteModal(true);
                        setTaskToDelete(task.id);
                      }}
                      className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 ml-4 mr-4"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => toggleTaskCompletion(task.id)}
                      className={`text-sm px-2 py-1 rounded  hover:opacity-90 mt-1 ${task.completed ? "text-red-400" : "text-green-500"}`}
                    >
                      {task.completed ? "↻ Mark Pending" : "✅Mark complete"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500 py-8">
            No matching tasks found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
