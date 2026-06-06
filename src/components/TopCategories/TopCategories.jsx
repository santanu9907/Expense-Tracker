import TransactionStore from "../../Store/TransactionStore";
import { categoryConfig } from "../../constants/categoryconfig";
import { BsThreeDots } from "react-icons/bs";

const TopCategories = () => {
  const categoryTotals = {};
  const transactions = TransactionStore((state) => state.transactions);

  const expenses = transactions.filter((item) => item.type === "Expense");

  expenses.forEach((item) => {
    categoryTotals[item.category] =
      (categoryTotals[item.category] || 0) + item.amount;
  });

  const categoryArray = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      name: category,
      amount,
      color: categoryConfig[category]?.color || "#6B7280",
      icon: categoryConfig[category]?.icon || BsThreeDots,
    }),
  );

  const sortedCategories = categoryArray
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 4);
  return (
    <div className="flex  border-2 p-4 mt-2 items-center justify-around border-gray-300 rounded-lg">
      {sortedCategories.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.name} className="flex flex-col items-center">
            <div
              className="text-2xl p-2 rounded-full"
              style={{
                backgroundColor: `${item.color}40`,
                color: item.color,
              }}
            >
              <Icon />
            </div>

            <span className="font-medium">{item.name}</span>
            <span className="font-medium">₹{item.amount.toLocaleString()}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TopCategories;
