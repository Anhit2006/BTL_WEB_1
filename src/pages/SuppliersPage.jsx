import React from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

const SuppliersPage = () => (
  <div className="dashboard-container">
    <SideBar />
    <div className="dashboard-right">
      <TopBar />
      <div className="content-box">
        <h2>Nhà cung cấp</h2>
        <p>Quản lý danh sách nhà cung cấp.</p>
      </div>
    </div>
  </div>
);

export default SuppliersPage;
