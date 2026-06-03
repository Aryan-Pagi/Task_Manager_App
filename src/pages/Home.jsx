import React from "react";
import SearchBar from "../components/SearchBar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/taskFilter";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Task Manager
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Organize your day — add, search, and manage tasks.
          </p>
        </header>

        <SearchBar />
        <TaskFilter/>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <TaskForm />
          </div>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Home;
