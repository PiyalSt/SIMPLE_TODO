import { Check, PencilLine, Trash } from "lucide-react";
import React, { useState } from "react";

const Task = ({ task, onDelete, onUpdate, completed, onToggleComplete }) => {
  const [edit, setEdit] = useState(false);
  const [updateTask, setUpdateTask] = useState("");

  const toggleEdit = () => {
    setUpdateTask(task);
    setEdit(!edit);
  };

  return (
    <div className="w-200 my-2 mx-auto">
      <div className="w-full flex justify-between py-4 px-8 bg-white dark:bg-gray-800 rounded-md">
        <div className="flex items-center gap-2 cursor-pointer">
          <input
            className="w-4 h-4 dark:bg-gray-400"
            type="checkbox"
            checked={completed}
            onChange={onToggleComplete}
          />
          {edit ? (
            <input
              onChange={(e) => setUpdateTask(e.target.value)}
              className="w-150 py-1 px-4 border border-gray-300 outline-0 rounded-md dark:text-gray-100"
              type="text"
              value={updateTask}
            />
          ) : (
            <label className={`text-lg font-medium  ${completed ? "line-through text-gray-500" : "text-gray-800 dark:text-gray-100"}`}>{task}</label>
          )}
        </div>
        <div className="flex items-center gap-4">
          {edit ? (
            <Check
              onClick={() => {
                onUpdate(updateTask); // নতুন text parent-এ পাঠালাম
                setEdit(false); // update হওয়ার পর আবার label mode এ ফিরে যাও
              }}
              className="w-8 active:scale-95 cursor-pointer transition-all duration-300 dark:text-gray-100"
            />
          ) : (
            <PencilLine
              onClick={toggleEdit}
              className="w-5 active:scale-95 cursor-pointer transition-all duration-300 dark:text-green-400"
            />
          )}

          <Trash
            onClick={onDelete}
            className="w-5 active:scale-95 cursor-pointer transition-all duration-300 dark:text-red-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
