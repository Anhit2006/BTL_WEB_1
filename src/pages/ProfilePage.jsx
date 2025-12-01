import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

export default function ProfilePage() {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-right">
        <TopBar />
        <div className="content-box">
          <h2>Thông tin cá nhân</h2>
        </div>
      </div>
    </div>
  );
}
