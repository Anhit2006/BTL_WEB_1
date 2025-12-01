import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

const StatsAgencyPage = () => {
  const [exports, setExports] = useState([]);

  useEffect(() => {
    setExports(JSON.parse(localStorage.getItem("exports")) || []);
  }, []);

  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <TopBar />
        <h2>Lịch sử mua hàng của khách</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Khách hàng</th>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Thời gian</th>
            </tr>
          </thead>

          <tbody>
            {exports.map((e, index) => (
              <tr key={index}>
                <td>{e.customer}</td>
                <td>{e.productId}</td>
                <td>{e.qty}</td>
                <td>{e.time}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default StatsAgencyPage;
