
import { useState } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import AttendanceTable from "./Table"

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#155dfc]">Davamiyyət</h1>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span>Təack</span>
                <span className="mx-2">/</span>
                <span>davamiyyət</span>
                <span className="mx-2">/</span>
                <span className="font-medium">Davamiyyət cədvəli</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="w-full md:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dərs</label>
                <div className="relative">
                  <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                    <option>Mülki müdafiə</option>
                    <option>Riyaziyyat</option>
                    <option>Fizika</option>
                  </select>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-1">Qrup</label>
                <div className="relative">
                  <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                    <option>159a2</option>
                    <option>160b1</option>
                    <option>161c3</option>
                  </select>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-1">Tarix</label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue="2025-03-15"
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex items-end">
                <button className="btn-primary">QR kod yarat</button>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Davamiyyət cədvəli</h2>
              <AttendanceTable />
            </div>

            <div className="flex justify-start">
              <button className="btn-primary">Təsdiqlə</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminPanel
