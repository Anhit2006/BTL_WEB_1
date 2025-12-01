import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

const StatsItemPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <TopBar />
        <h2>Thống kê tồn kho</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên</th>
              <th>Tồn kho</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.qty}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default StatsItemPage;
