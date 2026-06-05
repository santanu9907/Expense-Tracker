import { NavLink } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoAdd } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <div className=" w-64 h-screen bg-purple-50 p-4 flex flex-col gap-8 ">
        <div className="flex mt-2 gap-4 items-center">
          <div className="bg-purple-800 p-2 rounded-xl inline-flex">
            <GiWallet className="text-2xl text-white" />
          </div>
          <h2 className="text-lg font-medium flex flex-col leading-tight">
            <span>Expense</span>
            <span className="text-purple-800">Tracker</span>
          </h2>
        </div>
        <div>
          <ul className=" flex flex-col gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                    isActive ? "bg-purple-300" : "hover:bg-purple-100"
                  }`
                }
              >
                <GoHome className="text-2xl" />
                <p className="text-md font-normal text-gray-700">Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                    isActive ? "bg-purple-300" : "hover:bg-purple-100"
                  }`
                }
              >
                <TfiMenuAlt className="text-2xl" />
                <p className="text-md font-normal text-gray-700">
                  Transactions
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-transaction"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                    isActive ? "bg-purple-300" : "hover:bg-purple-100"
                  }`
                }
              >
                <IoAdd className="text-2xl" />
                <p className="text-md font-normal text-gray-700">
                  Add Transaction
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                    isActive ? "bg-purple-300" : "hover:bg-purple-100"
                  }`
                }
              >
                <FiPieChart className="text-2xl" />
                <p className="text-md font-normal text-gray-700">Analytics</p>
              </NavLink>
            </li>
            <li className="flex items-center gap-3 border-none p-3  rounded-md cursor-pointer">
              <IoSettingsOutline className="text-2xl" />
              <p className="text-md font-normal text-gray-700">Settings</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
