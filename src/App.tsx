import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import LoginPage from "./pages/auth/login.page";
import ProfilePage from "./pages/profile.page";
import Dashboard from "./pages/dashboard.page";
import RegisterPage from "./pages/auth/register.page";
import PrivateRoute from "./components/PrivateRoute";
import AllowPage from "./pages/auth/allow";
import VerifyPassword from "./pages/auth/verifyPassword";
import ChangePassword from "./pages/auth/changePassword";
import SubscriptionPage from "./pages/subscription.page";
import AllsubscriptionPages from "./pages/subscription.all.page";
import HistoryPage from "./pages/history.page";
import BudgetPage from "./pages/budget.page";
import BalancesPage from "./pages/balances.page";
import ExpensePage from "./pages/expensedetails.page";
import New from "./pages/new";

function App() {
  return (
    <Routes>
      <Route path="/" element={<New />} />
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<VerifyPassword />} />
      <Route path="/reset-password" element={<ChangePassword />} />
      <Route path="/allow" element={<AllowPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/subscription" element={<SubscriptionPage />} />
      <Route path="/subscription-all" element={<AllsubscriptionPages />} />
      <Route path="/history-expensive" element={<HistoryPage />} />
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/balances" element={<BalancesPage />} />
      <Route path="/budget" element={<BudgetPage />} /> */}
      
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;