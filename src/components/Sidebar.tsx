import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChartPie, FaMoneyBill, FaPlus, FaChevronDown } from 'react-icons/fa';

export default function Sidebar() {
  const location = useLocation();
  const isExpensesActive = location.pathname.startsWith('/expenses');
  const [showSubmenu, setShowSubmenu] = useState(isExpensesActive);

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        FinanceApp
      </div>

      <nav className="flex flex-col p-4 space-y-2">
        {/* Dashboard */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-2 rounded hover:bg-gray-700 ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          <FaChartPie className="mr-3" /> Dashboard
        </NavLink>

        {/* Despesas com submenu e seta */}
        <button
          onClick={() => setShowSubmenu(!showSubmenu)}
          className={`flex items-center justify-between p-2 rounded hover:bg-gray-700 w-full ${
            isExpensesActive ? 'bg-gray-700' : ''
          }`}
        >
          <span className="flex items-center">
            <FaMoneyBill className="mr-3" /> Despesas
          </span>
          <FaChevronDown
            className={`transform transition-transform duration-200 ${
              showSubmenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>

        {/* Submenu */}
        {showSubmenu && (
          <div className="ml-8 flex flex-col space-y-1 text-sm text-gray-300">
            <NavLink
              to="/expenses"
              className={({ isActive }) =>
                `hover:text-white ${isActive ? 'text-white font-semibold' : ''}`
              }
            >
              📄 Lista de despesas
            </NavLink>
            <NavLink
              to="/expenses/new"
              className={({ isActive }) =>
                `hover:text-white flex items-center gap-2 ${
                  isActive ? 'text-white font-semibold' : ''
                }`
              }
            >
              <FaPlus className="text-xs" />
              Nova despesa
            </NavLink>
          </div>
        )}
      </nav>
    </aside>
  );
}
