import { LuSearch } from "react-icons/lu";
const TransactionFilter = () => {
  return (
    <div className="p-4 flex items-center gap-3">
      <div className="flex items-center border border-gray-300 rounded-lg p-2 w-[30%] gap-1">
        <input
          type="text"
          placeholder="Search Transactions..."
          className="outline-none w-full"
        />
        <LuSearch className="text-2xl text-gray-400" />
      </div>

      <div>
        <select className="w-full border border-gray-300 rounded-lg p-2 outline-none cursor-pointer text-gray-400">
          <option>Type</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      <div>
        <select className="w-full border border-gray-300 rounded-lg p-2 outline-none cursor-pointer text-gray-400">
          <option>Category</option>
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
  );
};

export default TransactionFilter;
