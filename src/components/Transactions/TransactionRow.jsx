import { MdDelete } from "react-icons/md";
import TransactionStore from "../../Store/TransactionStore";

const TransactionRow = ({ title, id, category, amount, date, type, icon }) => {
  const deleteTransaction = TransactionStore(
    (state) => state.deleteTransaction,
  );
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_80px] px-6 py-4 border-b items-center">
      <div className="flex items-center gap-3">
        <div className="text-xl">{icon}</div>
        <span className="font-medium">{title}</span>
      </div>

      <span>{category}</span>
      <span
        className={`font-medium text-center ${
          type === "income"
            ? "text-green-600 bg-green-200 w-fit px-2 rounded-full"
            : "text-red-600 bg-red-200 w-fit px-2 rounded-full"
        }`}
      >
        {type}
      </span>
      <span
        className={`font-medium text-center ${
          type === "income" ? "text-green-600   " : "text-red-600   "
        }`}
      >
        ₹{amount.toLocaleString("en-IN")}
      </span>
      <span>{date}</span>

      <div className="flex justify-center">
        <MdDelete
          onClick={() => deleteTransaction(id)}
          className="text-xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TransactionRow;
