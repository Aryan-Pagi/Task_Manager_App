import { createContext, useState, useEffect } from "react";
import Toast from 'react-hot-toast';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevtasks) => [...prevtasks, task]);
    Toast.success("Task added successfully!");
  };

  const deleteTask = (id) => {
    setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id));
    Toast.success("Task deleted successfully!");
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevtasks) =>
      prevtasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    Toast.success("Task updated successfully!");
    setEditTask(null);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTaskCompletion,
        searchTerm,
        setSearchTerm,
        filter,
        setFilter,
        editTask,
        setEditTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
