import TransactionsItem from "./TransactionsItem";
import TransactionStore from "../../Store/TransactionStore";
import { categoryConfig } from "../../constants/categoryconfig";
import { BsThreeDots } from "react-icons/bs";
const RecentTransactions = () => {
  const transactions = TransactionStore((state) => state.transactions);
  return (
    <div className="w-[35%] border-2 border-gray-300 rounded-lg p-4  mt-3 flex flex-col gap-2">
      <div className="flex items-center justify-between border-b pb-4 border-gray-300">
        <span className="text-lg font-medium">Recent Transactions</span>
        <span className="font-medium text-purple-800">View More</span>
      </div>
      {transactions.slice(0, 5).map((item) => {
        const category = categoryConfig[item.category] || {
          icon: BsThreeDots,
          color: "#6B7280",
        };

        return (
          <TransactionsItem
            key={item.id}
            title={item.title}
            category={item.category}
            amount={item.amount}
            type={item.type}
            date={item.date}
            icon={category.icon}
            color={category.color}
          />
        );
      })}
    </div>
  );
};

export default RecentTransactions;
