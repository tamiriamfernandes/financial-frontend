import { useState } from "react";
import type { Expense } from "../../models/expense";

export default function Expenses() {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      description: 'Assinatura Netflix',
      category: 'Entretenimento',
      amount: '89,70',
      date: '2025-05-25',
      qtdeInstallment: 3,
    },
    // Pode adicionar mais despesas aqui
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-900 text-2xl font-bold">Despesas</h1>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg shadow font-medium">
          + Nova despesa
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow text-sm">
          <thead>
            <tr className="bg-gray-900 text-left text-white">
              <th className="p-3">Descrição</th>
              <th className="p-3">Categoria</th>
              <th className="p-3">Valor</th>
              <th className="p-3">Data</th>
              <th className="p-3">Parcelas</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{expense.description}</td>
                <td className="p-3">{expense.category}</td>
                <td className="p-3">R$ {expense.amount}</td>
                <td className="p-3">
                  {new Date(expense.date).toLocaleDateString('pt-BR')}
                </td>
                <td className="p-3">2/3</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}