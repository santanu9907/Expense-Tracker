const TransactionsItem = ({ title, category, amount, type, date, icon }) => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] items-center py-2 border-b">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>

        <div className="flex flex-col">
          <span className="text-base font-medium">{title}</span>

          <span className="text-gray-600 text-sm">{category}</span>
        </div>
      </div>

      {/* Middle */}
      <div
        className={`font-medium text-center ${
          type === "income"
            ? "text-green-600 bg-green-200 rounded-full"
            : "text-red-600 bg-red-200 rounded-full"
        }`}
      >
        {type}
      </div>

      {/* Right */}
      <div className="flex flex-col items-end">
        <span
          className={`font-medium text-center ${
            type === "income" ? "text-green-600 " : "text-red-600 "
          }`}
        >
          {type === "income" ? "+" : "-"}₹{amount.toLocaleString("en-IN")}
        </span>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
    </div>
  );
};

export default TransactionsItem;
