import { Moon, Plus, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import Task from "../components/Task";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  // add dark theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // page reload dileo jeno theme mone thake
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleTask = async () => {
    if (!task) {
      toast.error("Please add some task!");
    } else {
      try {
        await axios.post("http://localhost:4000/api/todo/v1/task", {
          task,
        });

        toast.success("Task create successfull!");
        setTask("");
        // setTaskArray([...taskArray, data.task]);

        const { data } = await axios.get(
          "http://localhost:4000/api/todo/v1/task",
        );
        setTaskArray(data.tasks);
      } catch (error) {
        toast.error(error.response?.data?.message || "Something want wrong");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/todo/v1/task",
        );
        setTaskArray(data.tasks);
      } catch (error) {
        toast.error("Failed to load tasks");
      }
    };
    fetchData();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/todo/v1/task/${id}`);

      const { data } = await axios.get(
        "http://localhost:4000/api/todo/v1/task",
      );
      setTaskArray(data.tasks);

      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const updateTask = async (id, newTask) => {
    try {
      await axios.put(`http://localhost:4000/api/todo/v1/task/${id}`, {
        task: newTask,
      });

      const { data } = await axios.get(
        "http://localhost:4000/api/todo/v1/task",
      );

      setTaskArray(data.tasks);

      toast.success("Task update successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const toggleComplete = async (id) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:4000/api/todo/v1/task/${id}/toggle`,
      );

      // local state আপডেট — সেই task-টার completed বদলে দিলাম
      setTaskArray(
        taskArray.map((item) =>
          item._id === id ? { ...item, completed: data.task.completed } : item,
        ),
      );

      toast.success("Task completed!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen bg-bglight dark:bg-dark">
      <div className="w-full h-[10%] flex items-center justify-end">
        {theme === "light" ? (
          <Moon
            onClick={toggleTheme}
            className="w-12 pr-6 cursor-pointer active:scale-95 transition-all duration-200"
          />
        ) : (
          <Sun
            onClick={toggleTheme}
            className="w-12 pr-6 cursor-pointer active:scale-95 transition-all duration-200 text-gray-100"
          />
        )}
      </div>
      <div className="w-full h-[80%] flex flex-col">
        <h2 className="text-5xl text-gray-800 dark:text-gray-100 font-bold text-center">
          My Tasks
        </h2>
        <div className="flex gap-4 justify-center mt-8">
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="w-130 py-2 px-4 bg-white dark:bg-gray-700/50 shadow-2xl rounded-md outline-0 text-base text-gray-900 dark:text-gray-100"
            type="text"
            placeholder="Type your task here..."
          />
          <button
            onClick={handleTask}
            className="flex gap-2 py-2 px-4 bg-black text-white rounded-md cursor-pointer active:scale-95 transition-all duration-300"
          >
            <Plus />
            Add
          </button>
        </div>

        {taskArray.length > 0 ? (
          // Adding task
          <div className="flex-1 overflow-y-auto mt-4">
            <div className="w-200 mx-auto flex justify-between py-4 px-4 border-b border-gray-300 dark:border-gray-700">
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">All</h2>
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">
                {taskArray.length} {taskArray.length === 1 ? "task" : "tasks"}
              </h2>
            </div>
            <div>
              {taskArray.map((item) => (
                <div key={item._id}>
                  <Task
                    task={item.task}
                    completed={item.completed}
                    onDelete={() => deleteTask(item._id)}
                    onUpdate={(newTask) => updateTask(item._id, newTask)}
                    onToggleComplete={() => toggleComplete(item._id)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Not adding task message
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
            <img className="w-150" src={assets.errorImage} alt="" />
            <p className="italic text-lg md:text-2xl text-center mr-8">
              Empty as my motivation on Monday 😅. <br /> Let’s start adding
              stuff!
            </p>
          </div>
        )}
      </div>
      <div className="w-full h-[10%] flex items-center justify-center dark:text-gray-100">
        &copy; <span className="italic">2026 || PIYALST</span>
      </div>
    </div>
  );
};

export default Home;
