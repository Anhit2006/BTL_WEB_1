import { Routes, Route } from "react-router-dom";

// Auth
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

// Main Pages
import Dashboard from "./pages/Dashboard";
import CustomerPage from "./pages/CustomerPage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import SuppliersPage from "./pages/SuppliersPage";
import ImportPage from "./pages/ImportPage";
import ExportPage from "./pages/ExportPage";

// Stats
import StatsItemPage from "./pages/StatsItemPage";
import StatsAgencyPage from "./pages/StatsAgencyPage";

// Newly Added Missing Pages
import ImportListPage from "./pages/ImportListPage";
import ExportListPage from "./pages/ExportListPage";
import InventoryPage from "./pages/InventoryPage";
import AccountsPage from "./pages/AccountsPage";
import StatsPage from "./pages/StatsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* System Pages */}
      <Route path="/customers" element={<CustomerPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/suppliers" element={<SuppliersPage />} />
      <Route path="/import" element={<ImportPage />} />
      <Route path="/export" element={<ExportPage />} />

      {/* Newly added pages */}
      <Route path="/import-list" element={<ImportListPage />} />
      <Route path="/export-list" element={<ExportListPage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/accounts" element={<AccountsPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      {/* Stats */}
      <Route path="/stats-item" element={<StatsItemPage />} />
      <Route path="/stats-agency" element={<StatsAgencyPage />} />
    </Routes>
  );
}

export default App;
