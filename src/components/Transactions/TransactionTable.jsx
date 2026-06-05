import TransactionRow from "./TransactionRow";
import TransactionStore from "../../Store/TransactionStore";
import { useState } from "react";
const TransactionTable = () => {
  const transactions = TransactionStore((state) => state.transactions);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 7;

  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const maxVisiblePages = 5;

  const startPage =
    Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;

  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  return (
    <div className="mt-2 border border-gray-300 rounded-lg overflow-hidden">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_80px] bg-gray-50 px-6 py-4 border-b border-gray-300">
        <span>Transaction</span>
        <span>Category</span>
        <span>Type</span>
        <span>Amount</span>
        <span>Date</span>
        <span>Actions</span>
      </div>

      {transactions.slice(startIndex, endIndex).map((item) => (
        <TransactionRow
          key={item.id}
          id={item.id}
          title={item.title}
          category={item.category}
          amount={item.amount}
          date={item.date}
          type={item.type}
          icon={item.icon}
        />
      ))}
      <div className="flex justify-center gap-2 py-4">
        {startPage > 1 && (
          <button
            onClick={() => setCurrentPage(startPage - 1)}
            className="px-3 py-2 border rounded"
          >
            Prev
          </button>
        )}

        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded border ${
              currentPage === page ? "bg-purple-600 text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <button
            onClick={() => setCurrentPage(endPage + 1)}
            className="px-3 py-2 border rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionTable;
