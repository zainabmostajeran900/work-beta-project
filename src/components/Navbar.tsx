import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md py-3 px-4 md:px-8 font-bold fixed z-50 top-0">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between py-2 md:py-0">
        <div className="md:block lg:hidden lg:p-0 pb-4">
          <div className="hidden md:flex md:w-full md:justify-center  bg-[#F8F8F8] gap-x-3 md:gap-x-6 py-2 px-6  shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg md:order-1 lg:order-none">
            <button className="hover:text-purple-100 text-[#111111]">صفحه اصلی</button>
            <span className="text-gray-400">|</span>
            <button className="hover:text-purple-100 text-[#111111]">اقامتگاه</button>
            <span className="text-gray-400">|</span>
            <button className="bg-purple-100 px-5 py-1.5 rounded-lg text-white hover:bg-gray-700 hover:text-white">
              مقالات
            </button>
            <span className="text-gray-400">|</span>
            <div className="flex items-center gap-x-2">
              <button className="hover:text-purple-100 text-[#111111]">راه‌های ارتباطی</button>
              <img className="w-[30px]" src="/Group 1895.png" alt="Contact" />
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="w-[140px] md:w-full md:text-center md:order-2 lg:order-none">
            <img
              src="/HAJIIJA.png"
              alt="Logo"
              className="max-w-full h-auto mx-auto"
            />
          </div>
        </div>
        <div className="md:hidden lg:block">
          <div className="w-[140px] md:w-full md:text-center md:order-2 lg:order-none">
            <img
              src="/HAJIIJA.png"
              alt="Logo"
              className="max-w-full h-auto mx-auto"
            />
          </div>
        </div>
        <div className="md:hidden lg:block">
          <div className="hidden md:flex md:w-full md:justify-center bg-[#f3f3f3] gap-x-3 md:gap-x-6 py-2 px-6 shadow-md rounded-lg md:order-1 lg:order-none">
            <div className="flex items-center justify-center gap-x-4">
              <button className="hover:text-purple-100 cursor-pointer text-[#111111]">
                صفحه اصلی
              </button>
              <span className="text-[#5E5E5E]">|</span>
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <button className="hover:text-purple-100 cursor-pointer text-[#111111]">
                اقامتگاه
              </button>
              <span className="text-[#5E5E5E]">|</span>
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <button className="bg-purple-100 cursor-pointer px-8 py-2 rounded-lg text-white hover:bg-gray-700 hover:text-white">
                مقالات
              </button>
              <span className="text-[#5E5E5E]">|</span>
            </div>
            <div className="flex items-center gap-x-2">
              <button className="hover:text-purple-100 cursor-pointer text-[#111111]">
                راه‌های ارتباطی
              </button>
              <img className="w-[30px]" src="/Group 1895.png" alt="Contact" />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
        <button className="relative px-6 py-3 font-semibold text-white bg-purple-100 cursor-pointer rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-blue-500/50 hover:shadow-lg hover:scale-105">
            ورود کاربر خریدار
          </button>
        </div>

        <div className="md:hidden pt-3">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#F8F8F8] shadow-md py-4 px-6 mt-2 rounded-lg w-full">
          <button className="py-2 text-[#111111] hover:text-purple-100">صفحه اصلی</button>
          <button className="py-2 text-[#111111] hover:text-purple-100">اقامتگاه</button>
          <button className="py-2 bg-purple-100 text-white rounded-lg hover:bg-gray-700 hover:text-white">
            مقالات
          </button>
          <button className="py-2 text-[#111111] hover:text-purple-100">راه‌های ارتباطی</button>
        </div>
      )}
    </nav>
  );
};
