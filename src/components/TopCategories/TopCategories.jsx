import { MdFastfood } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
const TopCategories = () => {
  const categories = [
    {
      name: "Food & Dining",
      amount: 5000,
      color: "#8B5CF6",
      icon: <MdFastfood />,
    },
    {
      name: "Transport",
      amount: 3000,
      color: "#22C55E",
      icon: <FaCar />,
    },
    {
      name: "Shopping",
      amount: 2500,
      color: "#F59E0B",
      icon: <FaShoppingBag />,
    },
    {
      name: "Bills",
      amount: 2000,
      color: "#EF4444",
      icon: <FaFileInvoiceDollar />,
    },
  ];
  const sortedCategories = [...categories].sort((a, b) => b.amount - a.amount);
  return (
    <div className="flex  border-2 p-4 mt-2 items-center justify-around border-gray-300 rounded-lg">
      {sortedCategories.map((item) => (
        <div className="flex flex-col items-center ">
          <div
            className="text-2xl p-2 rounded-full"
            style={{
              backgroundColor: `${item.color}40`,
              color: item.color,
            }}
          >
            {item.icon}
          </div>
          <span className="font-medium">{item.name}</span>
          <span className="font-medium">{item.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TopCategories;
