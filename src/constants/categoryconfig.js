import {
  FaUtensils,
  FaShoppingBag,
  FaCar,
  FaFilm,
  FaHeartbeat,
  FaBook,
  FaPlane,
  FaHome,
  FaFileInvoiceDollar,
} from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";

export const categoryConfig = {
  "Food & Dining": {
    icon: FaUtensils,
    color: "#8B5CF6",
  },

  Transport: {
    icon: FaCar,
    color: "#22C55E",
  },

  Shopping: {
    icon: FaShoppingBag,
    color: "#F59E0B",
  },

  "Bills & Utilities": {
    icon: FaFileInvoiceDollar,
    color: "#EF4444",
  },

  Entertainment: {
    icon: FaFilm,
    color: "#3B82F6",
  },

  Healthcare: {
    icon: FaHeartbeat,
    color: "#EC4899",
  },

  Education: {
    icon: FaBook,
    color: "#14B8A6",
  },

  Travel: {
    icon: FaPlane,
    color: "#F97316",
  },

  Rent: {
    icon: FaHome,
    color: "#6366F1",
  },

  Others: {
    icon: BsThreeDots,
    color: "#6B7280",
  },
};
