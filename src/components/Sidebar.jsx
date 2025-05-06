"use client";

import { BarChart2, FileText, Grid, LogOut, Users, X, Lock } from "lucide-react";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 shadow-lg
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-16 flex items-center justify-between px-6">
          <h1 className="text-xl font-bold text-blue-700">INSMART</h1>
          <button
            className="md:hidden p-1 rounded-md hover:bg-gray-100"
            onClick={closeSidebar}
          >
            <X size={20} />
          </button>
        </div>

        <div className="py-4">
          <div className="mb-4">
            <div className="sidebar-heading">TRACK</div>
            <nav className="mt-1">
              <a href="/" className="sidebar-item active">
                <FileText size={18} />
                <span>Davamiyyət</span>
              </a>
            </nav>
          </div>

          <div className="mb-4">
            <div className="sidebar-heading">ANALIZ</div>
            <nav className="mt-1 space-y-1 px-2">
              <a
                href="/dashboard"
                className="sidebar-item bg-gray-100 rounded-md flex items-center gap-2 px-3 py-2"
              >
                <Grid size={18} />
                <span>İdarə paneli</span>
                <Lock size={16} className="ml-auto text-gray-500" />
              </a>
              <a href="/reports" className="sidebar-item flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
                <BarChart2 size={18} />
                <span>Hesabat</span>
              </a>
            </nav>
          </div>

          <div className="mb-4">
            <div className="sidebar-heading">İDARƏ</div>
            <nav className="mt-1 space-y-1 px-2">
              <a
                href="/students"
                className="sidebar-item bg-gray-100 rounded-md flex items-center gap-2 px-3 py-2"
              >
                <Users size={18} />
                <span>Tələbələr</span>
                <Lock size={16} className="ml-auto text-gray-500" />
              </a>
            </nav>
          </div>

          <div className="mb-4">
            <div className="sidebar-heading">HESABDAN ÇIXIŞ</div>
            <nav className="mt-1">
              <a href="/logout" className="sidebar-item flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
                <LogOut size={18} />
                <span>Çıxış</span>
              </a>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
