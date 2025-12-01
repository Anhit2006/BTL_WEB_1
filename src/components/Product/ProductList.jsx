import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";
import { getProducts, addProduct, updateProduct, toggleHideProduct } from "../../utils/productService";
import "./Product.css";

export default function ProductList() {
  const [ds, setDs] = useState([]);
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setDs(getProducts());
  }, []);

  function refresh() {
    setDs(getProducts());
  }

  function onAdd(p) {
    addProduct(p);
    refresh();
  }

  function onUpdate(p) {
    updateProduct(p);
    setEditing(null);
    refresh();
  }

  function onToggleHide(id) {
    toggleHideProduct(id);
    refresh();
  }

  const filtered = ds.filter(x =>
    x.ten.toLowerCase().includes(q.toLowerCase()) ||
    x.id.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="product-page">
      <div className="product-header">
        <h2>Quản lý sản phẩm</h2>
        <div>
          <input placeholder="Tìm theo tên hoặc mã..." value={q} onChange={e => setQ(e.target.value)} />
        </div>
      </div>

      <div className="product-main">
        <div className="product-form">
          <ProductForm onAdd={onAdd} onUpdate={onUpdate} editing={editing} />
        </div>

        <div className="product-table">
          <table>
            <thead>
              <tr>
                <th>Mã</th><th>Tên</th><th>Giá</th><th>Tồn</th><th>Ẩn</th><th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <ProductItem
                  key={p.id}
                  p={p}
                  onEdit={() => setEditing(p)}
                  onToggle={() => onToggleHide(p.id)}
                />
              ))}
              {filtered.length===0 && <tr><td colSpan="6">Không có sản phẩm</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
