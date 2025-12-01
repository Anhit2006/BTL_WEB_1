import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header ">
        <div className="avatar"></div>
        <h3>HI !</h3>
        <p>Admin</p>
      </div>

      <ul className="menu">
        <li><Link to="/dashboard">🖥️ SẢN PHẨM</Link></li>
        <li><Link to="/suppliers">🏢 NHÀ CUNG CẤP</Link></li>
        <li><Link to="/import">📥 NHẬP HÀNG</Link></li>
        <li><Link to="/import-list">🧾 PHIẾU NHẬP</Link></li>
        <li><Link to="/export">📤 XUẤT HÀNG</Link></li>
        <li><Link to="/export-list">📑 PHIẾU XUẤT</Link></li>
        <li><Link to="/inventory">📦 TỒN KHO</Link></li>
        <li><Link to="/accounts">👤 TÀI KHOẢN</Link></li>
        <li><Link to="/stats">📊 THỐNG KÊ</Link></li>
      </ul>

      <div className="bottom-actions">
        <Link to="/profile" className="action">⚙️ ĐỔI THÔNG TIN</Link>
        <button onClick={handleLogout} className="logout">🚪 ĐĂNG XUẤT</button>
      </div>
    </div>
  );
};

export default SideBar;
