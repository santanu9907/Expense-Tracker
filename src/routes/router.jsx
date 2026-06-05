import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Transactions from "../pages/Transactions/Transactions";
import AddTransaction from "../pages/AddTransaction/AddTransaction";
import Analytic from "../pages/Analytic/Analytic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/add-transaction",
        element: <AddTransaction />,
      },
      {
        path: "/analytics",
        element: <Analytic />,
      },
    ],
  },
]);

export default router;
