import { ListTodo, LogIn, Menu, ScrollText, Settings } from "lucide-react";
import React, { useState } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <>
      <div className="w-full md:w-25 h-screen bg-white flex justify-center">
        {openSidebar ? (
          <div>
            <div className="my-8 pb-4 border-b border-gray-200 py-2 px-2 rounded-md cursor-pointer active:scale-95">
              <Menu
                onClick={() => setOpenSidebar(!openSidebar)}
                className="w-12 cursor-pointer text-black duration-300 transition-all active:scale-95"
              />
            </div>
            <div className="space-y-4">
              <div className="hover:bg-bglight py-2 px-2 rounded-md cursor-pointer active:scale-95">
                <ScrollText
                  onClick={() => navigate("/")}
                  className="w-12 cursor-pointer text-black duration-300 transition-all"
                />
              </div>
              <div className="hover:bg-bglight py-2 px-2 rounded-md cursor-pointer active:scale-95">
                <Settings
                  onClick={() => navigate("/setting")}
                  className="w-12 cursor-pointer text-black duration-300 transition-all"
                />
              </div>
              <div className="hover:bg-bglight py-2 px-2 rounded-md cursor-pointer active:scale-95">
                <LogIn
                  onClick={() => navigate("/login")}
                  className="w-12 cursor-pointer text-black duration-300 transition-all"
                />
              </div>
            </div>
          </div>
        ) : (
          // {/* Open Side Menu */}
          <div className="w-80">
            <div className="mt-4">
              <Menu
                onClick={() => setOpenSidebar(!openSidebar)}
                className="w-12 cursor-pointer text-black duration-300 transition-all active:scale-95"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-b border-gray-300 py-8 mx-6">
              <div className="w-16 h-16 rounded-full bg-amber-200">
                <img
                  className="w-full h-full rounded-full object-cover shadow-xl"
                  src={assets.userImage}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h2 className="font-semibold text-gray-900">Jane Joe</h2>
                <p className="font-medium text-gray-600">janejoe@gmail.com</p>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <div className="hover:bg-bglight mx-8 py-3 rounded-md active:scale-95 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center gap-4">
                  <ListTodo />
                  <h4 className="font-semibold">My Tasks</h4>
                </div>
              </div>
              <div className="hover:bg-bglight mx-8 py-3 rounded-md active:scale-95 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center gap-4">
                  <Settings />
                  <h4 className="font-semibold">Setting</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
