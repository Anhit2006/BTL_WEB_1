import React, { useState } from "react";
import { addImport } from "../../utils/importService";
import { increaseProductQty, getProducts } from "../../utils/productService";

export default function ImportForm() {
  const [donVi, setDonVi] = useState("");
  const [items, setItems] = useState([]);
  const [prodId, setProdId] = useState("");
  const [qty, setQty] = useState(1);

  const products = getProducts();

  function addItem() {
    if(!prodId) return alert("Chọn sản phẩm");
    if(qty <= 0) return alert("Số lượng > 0");
    const prod = products.find(p => p.id === prodId);
    setItems([...items, { id: prodId, ten: prod.ten, qty }]);
  }

  function confirmImport() {
    if(items.length===0) return alert("Chưa có sản phẩm");
    const record = { id: "IMP-" + Date.now(), ngay: (new Date()).toLocaleString(), donvi: donVi, items };
    addImport(record);
    items.forEach(it => increaseProductQty(it.id, it.qty));
    setItems([]); setDonVi("");
    alert("Nhập kho thành công");
  }

  return (
    <div>
      <h2>Nhập kho</h2>
      <div>
        <input placeholder="Đơn vị nhập" value={donVi} onChange={e=>setDonVi(e.target.value)} />
      </div>
      <div>
        <select value={prodId} onChange={e=>setProdId(e.target.value)}>
          <option value="">--Chọn sản phẩm--</option>
          {products.map(p=> <option key={p.id} value={p.id}>{p.ten} ({p.qty})</option>)}
        </select>
        <input type="number" value={qty} onChange={e=>setQty(Number(e.target.value))} min={1} />
        <button onClick={addItem}>Thêm vào phiếu</button>
      </div>

      <div>
        <h4>Danh sách nhập</h4>
        <ul>{items.map((it, idx)=><li key={idx}>{it.ten} x {it.qty}</li>)}</ul>
      </div>

      <div>
        <button onClick={confirmImport}>Xác nhận nhập kho</button>
      </div>
    </div>
  );
}
