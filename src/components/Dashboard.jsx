"use client"

import React, { useState } from "react"
import {
  Users,
  Activity,
  QrCode,
  FileBarChart,
  Settings,
  Pencil,
  X as XIcon,
  ChevronDown,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts"
import Sidebar from "./Dashboard-Sidebar"
import StatCard from "./Stat-card"

const lineChartData = [
  { name: "01 Aug", value: 60 },
  { name: "02 Aug", value: 70 },
  { name: "03 Aug", value: 58 },
  { name: "04 Aug", value: 91 },
  { name: "07 Aug", value: 52 },
  { name: "08 Aug", value: 68 },
  { name: "09 Aug", value: 38 },
  { name: "10 Aug", value: 60 },
  { name: "11 Aug", value: 68 },
  { name: "14 Aug", value: 40 },
  { name: "15 Aug", value: 70 },
  { name: "16 Aug", value: 50 },
]

const barChartData = [
  { name: "18/08", value: 58 },
  { name: "19/08", value: 45 },
  { name: "19/1", value: 86 },
  { name: "19/2", value: 58 },
  { name: "19/3", value: 35 },
]

function StudentForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(true)
  const [students, setStudents] = useState([
    { name: "", id: "" },
    { name: "", id: "" },
  ])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Open Student Form
      </button>
    )
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Tələbə</h2>
            <div className="flex items-center gap-2">
              <button className="text-blue-500">
                <Pencil className="h-5 w-5" />
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm mb-1">Qrup nömrəsi</label>
              <div className="relative">
                <select
                  defaultValue="159a2"
                  className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md appearance-none"
                >
                  <option value="159a2">159a2</option>
                  <option value="160b1">160b1</option>
                  <option value="161c3">161c3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {students.map((student, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Adı soyadı</label>
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => {
                      const newStudents = [...students]
                      newStudents[index].name = e.target.value
                      setStudents(newStudents)
                    }}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">ID</label>
                  <input
                    type="text"
                    value={student.id}
                    onChange={(e) => {
                      const newStudents = [...students]
                      newStudents[index].id = e.target.value
                      setStudents(newStudents)
                    }}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function GroupForm({ onClose }) {
  const [students, setStudents] = useState([
    { name: "", id: "" },
    { name: "", id: "" },
  ])
  const [groupNumber, setGroupNumber] = useState("")

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Qrup</h2>
            <div className="flex items-center gap-2">
              <button className="text-blue-500">
                <Pencil className="h-5 w-5" />
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Qrup nömrəsi</label>
                <input
                  type="text"
                  value={groupNumber}
                  onChange={(e) => setGroupNumber(e.target.value)}
                  placeholder="Qrup nömrəsini daxil edin"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Tələbə sayı</label>
                <input
                  type="text"
                  value={students.length}
                  readOnly
                  className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md"
                />
              </div>
            </div>

            {students.map((student, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Adı soyadı</label>
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => {
                      const newStudents = [...students]
                      newStudents[index].name = e.target.value
                      setStudents(newStudents)
                    }}
                    placeholder="Tələbənin adı soyadı"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">ID</label>
                  <input
                    type="text"
                    value={student.id}
                    onChange={(e) => {
                      const newStudents = [...students]
                      newStudents[index].id = e.target.value
                      setStudents(newStudents)
                    }}
                    placeholder="Tələbə ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(null)
  const [activeTab, setActiveTab] = useState("day")
  const [showGroupForm, setShowGroupForm] = useState(false)
  const [showStudentForm, setShowStudentForm] = useState(false)

  const handleOpen = (type) => () => {
    setOpenModal(type)
  }
  const handleClose = () => setOpenModal(null)

  const modalConfig = {
    grup: {
      title: "Yeni Qrup Əlavə et",
      body: <GroupForm onClose={handleClose} />,
    },
    telebe: {
      title: "Yeni Tələbə Əlavə et",
      body: <StudentForm onClose={handleClose} />,
    },
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold">INSMART</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-lg"
                  title="Admin"
                >
                  A
                </div>
                <div className="text-sm">
                  <p className="font-medium">Admin</p>
                  <p className="text-gray-500 text-xs">admin@domain.ae</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <span className="font-medium">Dashboard</span>
            <span className="text-gray-400">›</span>
            <span className="text-blue-600 font-medium">
              Attendance Insights
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatCard
              title="Grup sayı"
              value="10"
              subtitle="2 yeni qrup üzv olundu"
              icon={<Users className="text-blue-600" />}
              actionLabel="Əlavə et"
              onAction={handleOpen("grup")}
            />
            <StatCard
              title="Tələbə sayı"
              value="50"
              subtitle="10 yeni tələbə üzv oldu"
              icon={<Users className="text-blue-600" />}
              actionLabel="Əlavə et"
              onAction={handleOpen("telebe")}
            />
            <StatCard
              title="Müəllim sayı"
              value="10"
              subtitle="10 yeni müəllim üzv oldu"
              icon={<Users className="text-blue-600" />}
              actionLabel={
                <span className="flex items-center gap-1">
                 
                  Əlavə et
                </span>
              }
              onAction={handleOpen("muellim")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatCard
              title="Dərs sayı"
              value="20"
              icon={<Activity className="text-blue-600" />}
              iconOnly={true}
            />
            <StatCard
              title="İstifadə olunan QR sayı"
              value="6"
              icon={<QrCode className="text-blue-600" />}
              iconOnly={true}
            />
            <StatCard
              title="Fənn sayı"
              value="11"
              icon={<FileBarChart className="text-blue-600" />}
              iconOnly={true}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2 overflow-x-auto">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-800">
                  Davamiyyət Müqayisə Diaqramı
                </h2>
                <div className="flex items-center gap-4">
                  {[
                    { key: "day", label: "Gün" },
                    { key: "week", label: "Həftə" },
                    { key: "month", label: "Ay" },
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      className={`flex items-center gap-2 text-sm ${
                        activeTab === key ? "text-blue-600" : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab(key)}
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${
                          activeTab === key ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      />
                      {label}
                    </button>
                  ))}
                  <button className="text-gray-500">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f0f0f0"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#888" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#888" }}
                      domain={[0, 100]}
                      ticks={[0, 20, 40, 60, 80, 100]}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip
                      formatter={(v) => [`${v}%`, "Attendance"]}
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "4px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2, fill: "white" }}
                      activeDot={{ r: 6, strokeWidth: 0, fill: "#2563eb" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-800">
                  Həftəlik davamiyyət
                </h2>
                <button className="text-gray-500">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f0f0f0"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#888" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#888" }}
                      domain={[0, 100]}
                      ticks={[0, 20, 40, 60, 80, 100]}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip
                      formatter={(v) => [`${v}%`, "Attendance"]}
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "4px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {barChartData.map((entry, idx) => (
                        <Cell
                          key={`cell-${idx}`}
                          fill={idx === 2 ? "#2563eb" : "#e5e7eb"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Grup/Telebe üçün ümumi Modal */}
      {openModal && openModal !== "muellim" && (
        <Backdrop onClose={handleClose}>
          <div
            className="bg-white p-6 rounded-lg shadow-lg min-w-[320px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <XIcon className="w-4 h-4" />
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {modalConfig[openModal].title}
            </h2>
            {modalConfig[openModal].body}
          </div>
        </Backdrop>
      )}

      {/* Müəllim üçün xüsusi modal */}
      {openModal === "muellim" && (
        <Backdrop onClose={handleClose}>
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <XIcon className="w-5 h-5" />
            </button>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-medium">Müəllim profili</h2>
                <Pencil className="h-5 w-5 text-blue-500" />
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm mb-1">Ad və soyad</label>
                  <input
                    type="text"
                    defaultValue=""
                    placeholder="Ad və soyad daxil edin"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Rolu</label>
                  <input
                    type="text"
                    defaultValue=""
                    placeholder="Rolu daxil edin"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Fənn</label>
                    <input
                      type="text"
                      defaultValue=""
                      placeholder="Fənn daxil edin"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Qrup</label>
                    <div className="relative">
                      <select
                        defaultValue=""
                        className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none"
                      >
                        <option value="">Qrup seçin</option>
                        <option value="159a2">159a2</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Backdrop>
      )}

      {/* Qrup formu modalı */}
      {showGroupForm && (
        <GroupForm onClose={() => setShowGroupForm(false)} />
      )}

      {/* Tələbə formu modalı */}
      {showStudentForm && (
        <StudentForm onClose={() => setShowStudentForm(false)} />
      )}
    </div>
  )
}

// Backdrop komponenti: kliklənən yerdə close
function Backdrop({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {children}
    </div>
  )
}