import Header from "../../components/Header/Header";

import SummaryCards from "../../components/SummaryCards/SummaryCards";
import { GiWallet } from "react-icons/gi";
import { MdTrendingUp } from "react-icons/md";
import { MdTrendingDown } from "react-icons/md";
import { PiPiggyBank } from "react-icons/pi";
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";
import ExpenseOverview from "../../components/ExpenseOverview/ExpenseOverview";
import TopCategories from "../../components/TopCategories/TopCategories";
import QuickAdd from "../../components/QuickSdd/QuickAdd";
import TransactionStore from "../../Store/TransactionStore";

const Dashboard = () => {
  const transactions = TransactionStore((state) => state.transactions);

  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  const totalInvestment = transactions
    .filter((item) => item.category === "Investment")
    .reduce((sum, item) => sum + item.amount, 0);

  const cards = [
    {
      title: "Total Balance",
      amount: totalBalance,
      percentage: "+12.5%",
      icon: <GiWallet />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      chartColor: "#8B5CF6",
    },
    {
      title: "Total Income",
      amount: totalIncome,
      percentage: "+8.2%",
      icon: <MdTrendingUp />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      chartColor: "#22C55E",
    },
    {
      title: "Total Expense",
      amount: totalExpense,
      percentage: "-3.1%",
      icon: <MdTrendingDown />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      chartColor: "#EF4444",
    },
    {
      title: "Total Savings",
      amount: totalInvestment,
      percentage: "+15.4%",
      icon: <PiPiggyBank />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      chartColor: "#F59E0B",
    },
  ];
  return (
    <div className="flex ">
      <main className="p-4 flex-1 border-2 rounded-xl border-gray-200">
        <Header />

        <div className="flex justify-around">
          {cards.map((card, index) => (
            <SummaryCards
              key={index}
              title={card.title}
              amount={card.amount}
              percentage={card.percentage}
              icon={card.icon}
              iconBg={card.iconBg}
              iconColor={card.iconColor}
              chartColor={card.chartColor}
            />
          ))}
        </div>
        <div className="flex">
          <RecentTransactions />
          <div className=" mt-3 ml-2 grid grid-cols-2 gap-2 items-stretch">
            <div>
              <ExpenseOverview />

              <TopCategories />
            </div>
            <QuickAdd />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
