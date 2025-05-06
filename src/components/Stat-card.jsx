import { Plus } from "lucide-react"

export default function StatCard({ title, value, subtitle, icon, actionLabel = "Əlavə et", iconOnly = false }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-600 font-medium text-sm mb-1">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
          {subtitle && (
            <div className="flex items-center gap-1 mt-2">
              <span className="text-green-500 text-xs">+</span>
              <span className="text-gray-500 text-xs">{subtitle}</span>
            </div>
          )}
        </div>
        <div className={`${iconOnly ? "p-3 bg-gray-50 rounded-full" : ""}`}>{icon}</div>
      </div>

      {!iconOnly && actionLabel && (
        <button className="mt-4 bg-blue-600 text-white text-xs py-1 px-3 rounded flex items-center gap-1">
          <Plus className="w-3 h-3" />
          {actionLabel}
        </button>
      )}
    </div>
  )
}
