// src/components/Sidebar.tsx
import { FaChartPie, FaMoneyBill, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        FinanceApp
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-2 rounded hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          <FaChartPie className="mr-3" /> Dashboard
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            `flex items-center p-2 rounded hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          <FaMoneyBill className="mr-3" /> Despesas
        </NavLink>
      </nav>
    </aside>
  );
}
