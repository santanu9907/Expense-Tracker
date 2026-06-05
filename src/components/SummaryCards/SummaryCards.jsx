const SummaryCards = ({
  title,
  amount,
  percentage,
  icon,
  iconBg,
  iconColor,
  chartColor,
}) => {
  return (
    <div className="w-[24%] p-2 border-2 rounded-lg bg-gray-100 border-gray-200 flex flex-col gap-3">
      <div className=" flex items-center justify-between">
        <div>
          <p>{title}</p>
          <h2 className="flex items-center text-2xl font-medium ">
            ₹{amount.toLocaleString("en-IN")}
          </h2>
          <p> {percentage} from last month</p>
        </div>
        <div className={`${iconBg} p-2 rounded-xl inline-flex`}>
          <div className={`text-2xl ${iconColor}`}>{icon}</div>
        </div>
      </div>
      <div>
        <svg className="w-full" viewBox="0 0 400 60" preserveAspectRatio="none">
          <path
            d="
      M0 40
      Q50 15 100 30
      T200 20
      T300 35
      T400 15
    "
            stroke={`${chartColor}`}
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default SummaryCards;
