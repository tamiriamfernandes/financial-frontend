// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import Expenses from '../pages/Expenses';
import NewExpense from '../pages/NewExpense';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'expenses', element: <Expenses /> },
      { path: 'expenses/new', element: <NewExpense /> },
    ],
  },
]);
