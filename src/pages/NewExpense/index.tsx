import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function NewExpense() {
  const [form, setForm] = useState({
    description: "",
    category: "",
    amount: "",
    date: "",
    qtdeInstallment: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "qtdeInstallment" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Despesa salva:", form);
    // Enviar para API aqui
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Nova Despesa
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <Label htmlFor="description" className="text-gray-700 mb-2">
              Descrição
            </Label>
            <Input
              type="text"
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Ex: Assinatura Netflix"
              required
            />
          </div>

          <div>
            <Label htmlFor="category" className="text-gray-700 mb-2">
              Categoria
            </Label>
            <Input
              type="text"
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Ex: Entretenimento"
              required
            />
          </div>

          <div>
            <Label htmlFor="amount" className="text-gray-700 mb-2">
              Valor (R$)
            </Label>
            <Input
              type="text"
              id="amount"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Ex: 89,70"
              required
            />
          </div>

          <div>
            <Label htmlFor="date" className="text-gray-700 mb-2">
              Data
            </Label>
            <Input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="qtdeInstallment" className="text-gray-700 mb-2">
              Parcelas
            </Label>
            <Input
              type="number"
              id="qtdeInstallment"
              name="qtdeInstallment"
              value={form.qtdeInstallment}
              onChange={handleChange}
              min={1}
            />
          </div>

          <div className="flex items-end">
            <Button type="submit" className="flex items-center gap-2 ">
              <FaSave /> Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
