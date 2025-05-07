"use client"

import { useState } from "react"
import { Users, Settings, Activity, FileBarChart, QrCode } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { BarChart, Bar, Cell } from "recharts"
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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("day")

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
        {/* Manual avatar: “A” hərfi */}
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
            <span className="text-blue-600 font-medium">Attendance Insights</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatCard
              title="Grup sayı"
              value="10"
              subtitle="2 yeni qrup üzv olundu"
              icon={<Users className="text-blue-600" />}
              actionLabel="Əlavə et"
            />
            <StatCard
              title="Tələbə sayı"
              value="50"
              subtitle="10 yeni tələbə üzv oldu"
              icon={<Users className="text-blue-600" />}
              actionLabel="Əlavə et"
            />
            <StatCard
              title="Müəllim sayı"
              value="10"
              subtitle="10 yeni tələbə üzv oldu"
              icon={<Users className="text-blue-600" />}
              actionLabel="Əlavə et"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatCard title="Dərs sayı" value="20" icon={<Activity className="text-blue-600" />} iconOnly={true} />
            <StatCard
              title="İstifadə olunan QR sayı"
              value="6"
              icon={<QrCode className="text-blue-600" />}
              iconOnly={true}
            />
            <StatCard title="Fənn sayı" value="11" icon={<FileBarChart className="text-blue-600" />} iconOnly={true} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Birinci chart */}
  <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2 overflow-x-auto">
    <div className="flex flex-wrap items-center justify-between mb-6">
      <h2 className="font-semibold text-gray-800">Davamiyyət Müqayisə Diaqramı</h2>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Gün / Həftə / Ay düymələri */}
          {[
            { key: "day", label: "Gün" },
            { key: "week", label: "Həftə" },
            { key: "month", label: "Ay" }
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
        </div>
        <button className="text-gray-500">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
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
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Attendance"]}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
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

  {/* İkinci chart */}
  <div className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto">
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-semibold text-gray-800">Həftəlik davamiyyət</h2>
      <button className="text-gray-500">
        <Settings className="w-5 h-5" />
      </button>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
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
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Attendance"]}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {barChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 2 ? "#2563eb" : "#e5e7eb"}
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
    </div>
  )
}
