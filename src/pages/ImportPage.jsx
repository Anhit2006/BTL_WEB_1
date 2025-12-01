import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";

const ImportPage = () => {
  const [products, setProducts] = useState([]);
  const [imports, setImports] = useState([]);
  const [form, setForm] = useState({ productId: "", qty: "", supplier: "" });

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
    setImports(JSON.parse(localStorage.getItem("imports")) || []);
  }, []);

  const saveImport = () => {
    if (!form.productId || !form.qty) return alert("Thiếu thông tin");

    const newImport = {
      ...form,
      qty: Number(form.qty),
      time: new Date().toLocaleString(),
    };

    const newList = [...imports, newImport];
    localStorage.setItem("imports", JSON.stringify(newList));
    setImports(newList);

    const pList = [...products];
    const idx = pList.findIndex((p) => p.id === form.productId);
    if (idx >= 0) pList[idx].qty = Number(pList[idx].qty) + Number(form.qty);

    localStorage.setItem("products", JSON.stringify(pList));
    setProducts(pList);

    setForm({ productId: "", qty: "", supplier: "" });
  };

  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <TopBar />
        <h2>Nhập kho</h2>

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
            placeholder="Số lượng nhập"
            value={form.qty}
            onChange={(e) => setForm({ ...form, qty: e.target.value })}
          />

          <input
            placeholder="Nhà cung cấp"
            value={form.supplier}
            onChange={(e) => setForm({ ...form, supplier: e.target.value })}
          />

          <button onClick={saveImport}>Nhập kho</button>
        </div>

        <h3>Lịch sử nhập kho</h3>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Nhà cung cấp</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {imports.map((i, index) => (
              <tr key={index}>
                <td>{i.productId}</td>
                <td>{i.qty}</td>
                <td>{i.supplier}</td>
                <td>{i.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ImportPage;
