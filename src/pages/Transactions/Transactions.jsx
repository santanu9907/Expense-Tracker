import TransactionFilter from "../../components/Transactions/TransactionFilter";
import { FiPlus } from "react-icons/fi";
import TransactionTable from "../../components/Transactions/TransactionTable";

const Transactions = () => {
  return (
    <div className="w-full p-8 h-full">
      <div className="w-full  border border-gray-200 rounded-lg h-full  p-2">
        <div className="w-full flex items-center justify-between ">
          <span className="text-2xl font-medium pl-2">All Transactions</span>
          <button className="flex items-center gap-1 bg-purple-700 font-normal p-2 text-white rounded-lg">
            <FiPlus />
            Add Transaction
          </button>
        </div>
        <TransactionFilter />
        <TransactionTable />
      </div>
    </div>
  );
};

export default Transactions;
