import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

export default function AccountsPage() {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-right">
        <TopBar />
        <div className="content-box">
          <h2>Quản lý tài khoản</h2>
        </div>
      </div>
    </div>
  );
}
