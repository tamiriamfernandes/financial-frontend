import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold">Conteúdo da página</h1>
        {/* Aqui entra o seu conteúdo ou <Outlet /> se usar rotas */}
      </div>
    </div>
  );
}

export default App
