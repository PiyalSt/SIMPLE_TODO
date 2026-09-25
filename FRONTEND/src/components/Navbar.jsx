import { Menu, ScrollText, Settings } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="min-w-25 h-screen bg-white flex justify-center">
        <div>
          <div className="my-8 pb-4 border-b border-gray-200 py-2 px-2 rounded-md cursor-pointer active:scale-95">
            <Menu className="w-12 cursor-pointer text-black duration-300 transition-all active:scale-95" />
          </div>
          <div className="space-y-4">
            <div className="hover:bg-bglight py-2 px-2 rounded-md cursor-pointer active:scale-95">
              <ScrollText className="w-12 cursor-pointer text-black duration-300 transition-all" />
            </div>
            <div className="hover:bg-bglight py-2 px-2 rounded-md cursor-pointer active:scale-95">
              <Settings className="w-12 cursor-pointer text-black duration-300 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
