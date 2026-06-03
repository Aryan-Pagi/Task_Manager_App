import React from "react";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 w-[90%] max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-red-500 text-3xl">⚠️</div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Delete Task
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              This action cannot be undone.
            </p>
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Are you sure you want to delete this task?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
