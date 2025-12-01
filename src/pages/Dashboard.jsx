import React from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBar />

      <div className="dashboard-right">
        <TopBar />

        <div className="content-box">
          <h2>Danh sách sản phẩm</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Hình ảnh</th>
                <th>Tên hàng</th>
                <th>ĐVT</th>
                <th>Số lượng</th>
                <th>Giá nhập</th>
                <th>Giá bán</th>
                <th>Ghi chú</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td><img src="https://via.placeholder.com/40" alt="img" /></td>
                <td>Trà xanh</td>
                <td>Hộp</td>
                <td>150</td>
                <td>25.000</td>
                <td>30.000</td>
                <td>OK</td>
                <td><button className="edit-btn">✏️</button></td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
