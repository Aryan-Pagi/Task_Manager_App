import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const SearchBar = () => {
  const {searchTerm,setSearchTerm,filterTaskList}=useContext(TaskContext);

  return (
    <div className="w-full max-w-3xl mx-auto mb-4 px-4">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-2 flex items-center gap-2 shadow-sm">
       
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent text-sm outline-none px-3 py-2 text-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;
