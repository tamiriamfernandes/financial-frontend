import { useState } from "react";
import type { Expense } from "../../models/expense";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Expenses() {
  const navigate = useNavigate();
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
        <Button
          type="button"
          onClick={() => navigate('/expenses/new')}
          className="bg-gray-900 hover:bg-gray-800 text-white p-5 rounded-lg shadow font-medium"
        >
          + Nova despesa
        </Button>

      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900 text-white">
              <TableHead className="text-white">Descrição</TableHead>
              <TableHead className="text-white">Categoria</TableHead>
              <TableHead className="text-white">Valor</TableHead>
              <TableHead className="text-white">Data</TableHead>
              <TableHead className="text-white">Parcelas</TableHead>
              <TableHead className="text-white text-center pl-12">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>R$ {expense.amount}</TableCell>
                <TableCell>
                  {new Date(expense.date).toLocaleDateString("pt-BR")}
                </TableCell>
                <TableCell>
                  {/* Exemplo estático */}
                  2/{expense.qtdeInstallment}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="icon" variant="default" title="Pagar">
                      <FaCheck />
                    </Button>
                    <Button size="icon" variant="outline" title="Editar">
                      <FaEdit />
                    </Button>
                    <Button size="icon" variant="destructive" title="Excluír">
                      <FaTrash />
                    </Button>
                  </div>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}