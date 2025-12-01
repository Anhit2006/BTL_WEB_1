import React, { useEffect, useState } from "react";

export default function ProductForm({ onAdd, onUpdate, editing }) {
  const [id, setId] = useState("");
  const [ten, setTen] = useState("");
  const [gia, setGia] = useState("");
  const [qty, setQty] = useState("");

  useEffect(() => {
    if (editing) {
      setId(editing.id);
      setTen(editing.ten);
      setGia(String(editing.gia));
      setQty(String(editing.qty));
    } else {
      setId(""); setTen(""); setGia(""); setQty("");
    }
  }, [editing]);

  function submit(e) {
    e.preventDefault();
    const p = { id: id.trim(), ten: ten.trim(), gia: Number(gia), qty: Number(qty), hidden:false };
    if (!p.id || !p.ten) return alert("Mã và tên bắt buộc");
    if (editing) {
      onUpdate(p);
    } else {
      onAdd(p);
    }
  }

  return (
    <form onSubmit={submit} className="product-form-box">
      <h3>{editing ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h3>
      <div><input placeholder="Mã" value={id} onChange={e=>setId(e.target.value)} disabled={!!editing} /></div>
      <div><input placeholder="Tên" value={ten} onChange={e=>setTen(e.target.value)} /></div>
      <div><input placeholder="Giá" value={gia} onChange={e=>setGia(e.target.value)} type="number" /></div>
      <div><input placeholder="Số lượng" value={qty} onChange={e=>setQty(e.target.value)} type="number" /></div>
      <div>
        <button type="submit">{editing ? "Lưu" : "Thêm"}</button>
      </div>
    </form>
  );
}
