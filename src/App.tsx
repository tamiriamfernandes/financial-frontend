import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen ml-64 p-6 w-full bg-gray-100">
        <Toaster />
        <Outlet />
      </div>
    </div>
  );
}

export default App
