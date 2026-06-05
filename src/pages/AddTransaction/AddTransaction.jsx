import { useState } from "react";
import TransactionStore from "../../Store/TransactionStore";

const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("Salary");
  const addTransaction = TransactionStore((state) => state.addTransaction);
  const handleSubmit = () => {
    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      type,
      date: new Date().toLocaleDateString(),
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setType("income");
    setCategory("Salary");
  };
  return (
    <div className="p-2">
      <div className="border-2 border-gray-300 rounded-xl p-5">
        <h2 className="text-lg font-medium mb-4">Add Transaction</h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Title</label>

          <input
            type="text"
            placeholder="Enter Title"
            className="w-full border rounded-lg p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Amount</label>

          <input
            type="number"
            placeholder="Enter amount"
            className="w-full border rounded-lg p-3"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          {/* Type */}
          <div className="mb-4 flex-1">
            <label className="block mb-2 font-medium">Type</label>

            <select
              className="w-full border rounded-lg p-3"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>
          {/* Category */}
          <div className="mb-4 flex-1">
            <label className="block mb-2 font-medium">Category</label>

            <select
              className="w-full border rounded-lg p-3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Salary</option>
              <option>Freelance</option>
              <option>Investment</option>
              <option>Bonus</option>

              <option>Food & Dining</option>
              <option>Transport</option>
              <option>Shopping</option>
              <option>Bills & Utilities</option>
              <option>Entertainment</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Rent</option>
              <option>Travel</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded-lg"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;
