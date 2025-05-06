import { Bell, LayoutDashboard, BarChart2, Users, Calendar, Settings, FileText } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-[70px] bg-white border-r border-gray-100 flex flex-col items-center py-6">
      <div className="flex flex-col items-center gap-6">
        <button className="w-10 h-10 flex items-center justify-center text-blue-600 rounded-lg hover:bg-blue-50">
          <Bell className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-blue-600 rounded-lg hover:bg-blue-50">
          <FileText className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center gap-4 mt-10">
        <button className="w-10 h-10 flex items-center justify-center text-blue-600 bg-blue-50 rounded-lg">
          <LayoutDashboard className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg">
          <BarChart2 className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg">
          <Users className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg">
          <Calendar className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
