import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

const ExportPage = () => {
  const [products, setProducts] = useState([]);
  const [exports, setExports] = useState([]);
  const [form, setForm] = useState({ productId: "", qty: "", customer: "" });

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
    setExports(JSON.parse(localStorage.getItem("exports")) || []);
  }, []);

  const saveExport = () => {
    const p = products.find((p) => p.id === form.productId);
    if (!p) return alert("Không tìm thấy sản phẩm");

    if (form.qty > p.qty) return alert("Không đủ tồn kho!");

    const newExport = {
      ...form,
      qty: Number(form.qty),
      time: new Date().toLocaleString(),
    };

    const newList = [...exports, newExport];
    localStorage.setItem("exports", JSON.stringify(newList));
    setExports(newList);

    const pList = [...products];
    const idx = pList.findIndex((x) => x.id === form.productId);
    pList[idx].qty -= Number(form.qty);

    localStorage.setItem("products", JSON.stringify(pList));
    setProducts(pList);

    setForm({ productId: "", qty: "", customer: "" });
  };

  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <TopBar />
        <h2>Bán hàng</h2>

        <div className="form-box">
          <select
            value={form.productId}
            onChange={(e) => setForm({ ...form, productId: e.target.value })}
          >
            <option value="">-- Chọn sản phẩm --</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Số lượng bán"
            value={form.qty}
            onChange={(e) => setForm({ ...form, qty: e.target.value })}
          />

          <input
            placeholder="Khách hàng"
            value={form.customer}
            onChange={(e) => setForm({ ...form, customer: e.target.value })}
          />

          <button onClick={saveExport}>Xác nhận bán</button>
        </div>

        <h3>Lịch sử bán hàng</h3>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Khách hàng</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {exports.map((e, index) => (
              <tr key={index}>
                <td>{e.productId}</td>
                <td>{e.qty}</td>
                <td>{e.customer}</td>
                <td>{e.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ExportPage;
