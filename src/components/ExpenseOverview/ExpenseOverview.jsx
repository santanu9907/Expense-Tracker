import { PieChart, Pie, Cell } from "recharts";
import TransactionStore from "../../Store/TransactionStore";

const ExpenseOverview = () => {
  const transactions = TransactionStore((state) => state.transactions);

  const expenses = transactions.filter((item) => item.type === "Expense");

  const categoryTotals = {};

  expenses.forEach((item) => {
    if (categoryTotals[item.category]) {
      categoryTotals[item.category] += item.amount;
    } else {
      categoryTotals[item.category] = item.amount;
    }
  });

  const categoryColors = {
    "Food & Dining": "#8B5CF6",
    Transport: "#22C55E",
    Shopping: "#F59E0B",
    "Bills & Utilities": "#EF4444",
    Entertainment: "#3B82F6",
    Healthcare: "#EC4899",
    Education: "#14B8A6",
    Travel: "#F97316",
    Rent: "#6366F1",
    Other: "#6B7280",
  };

  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

  const pieData = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value,
    color: categoryColors[name] || "#6B7280",
  }));

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4">
      <h2 className="text-lg font-medium mb-4">Expense Overview</h2>

      <div className="flex items-center justify-between ">
        {/* Chart */}
        <PieChart width={250} height={250}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            stroke="none"
            isAnimationActive={false}
          >
            {pieData.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>

          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
          >
            ₹{totalExpense}
          </text>

          <text x="50%" y="55%" textAnchor="middle" fontSize="12">
            Total Expense
          </text>
        </PieChart>

        {/* Legend */}
        <div className="flex flex-col gap-4">
          {pieData.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <div>
                <p className="font-medium">{item.name}</p>

                <p className="text-sm text-gray-500">₹{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseOverview;
