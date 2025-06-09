import { useState } from 'react';
import { FaSave } from 'react-icons/fa';

export default function NewExpense() {
  const [form, setForm] = useState({
    description: '',
    category: '',
    amount: '',
    date: '',
    qtdeInstallment: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'qtdeInstallment' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Despesa salva:', form);
    // Enviar para API aqui
  };

  return (
    <div className="max-w-3xl mx-auto bg-white/90 rounded-lg shadow-xl backdrop-blur p-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Nova Despesa</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Descrição</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
            placeholder="Ex: Assinatura Netflix"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Categoria</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
            placeholder="Ex: Entretenimento"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Valor (R$)</label>
          <input
            type="text"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
            placeholder="Ex: 89,70"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Data</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Parcelas</label>
          <input
            type="number"
            name="qtdeInstallment"
            value={form.qtdeInstallment}
            onChange={handleChange}
            min={1}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition shadow"
          >
            <FaSave /> Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
