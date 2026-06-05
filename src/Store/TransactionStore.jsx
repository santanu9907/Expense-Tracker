import { create } from "zustand";
import { persist } from "zustand/middleware";

const TransactionStore = create(
  persist(
    (set) => ({
      transactions: [],

      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [transaction, ...state.transactions],
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "expense-tracker",
    },
  ),
);

export default TransactionStore;
