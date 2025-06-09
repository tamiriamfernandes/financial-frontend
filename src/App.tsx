import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App
