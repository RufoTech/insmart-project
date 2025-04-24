"use client"
import { BarChart2, FileText, Grid, LogOut, Users, X } from "lucide-react"

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 md:hidden" onClick={closeSidebar}></div>}

      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-700">INSMART</h1>
          <button className="md:hidden p-1 rounded-md hover:bg-gray-100" onClick={closeSidebar}>
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
            <nav className="mt-1">
              <a href="/dashboard" className="sidebar-item">
                <Grid size={18} />
                <span>İdarə paneli</span>
              </a>
              <a href="/reports" className="sidebar-item">
                <BarChart2 size={18} />
                <span>Hesabat</span>
              </a>
            </nav>
          </div>

          <div className="mb-4">
            <div className="sidebar-heading">İDARƏ</div>
            <nav className="mt-1">
              <a href="/students" className="sidebar-item">
                <Users size={18} />
                <span>Tələbələr</span>
              </a>
            </nav>
          </div>

          <div className="mb-4">
            <div className="sidebar-heading">HESABDAN ÇIXIŞ</div>
            <nav className="mt-1">
              <a href="/logout" className="sidebar-item">
                <LogOut size={18} />
                <span>Çıxış</span>
              </a>
            </nav>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
