import React, { useEffect, useState } from "react";

export default function CustomerForm({ onAdd, onUpdate, editing }) {
  const [id, setId] = useState("");
  const [ten, setTen] = useState("");
  const [namsinh, setNamsinh] = useState("");
  const [diachi, setDiachi] = useState("");

  useEffect(()=>{
    if(editing) {
      setId(editing.id); setTen(editing.ten); setNamsinh(editing.namsinh); setDiachi(editing.diachi);
    } else {
      setId(""); setTen(""); setNamsinh(""); setDiachi("");
    }
  },[editing]);

  function submit(e){
    e.preventDefault();
    const c = { id: id.trim(), ten: ten.trim(), namsinh: namsinh, diachi: diachi };
    if(!c.id || !c.ten) return alert("Mã và tên bắt buộc");
    if(editing) onUpdate(c); else onAdd(c);
  }

  return (
    <form onSubmit={submit} className="customer-form">
      <h3>{editing ? "Sửa KH" : "Thêm KH"}</h3>
      <div><input placeholder="Mã" value={id} onChange={e=>setId(e.target.value)} disabled={!!editing} /></div>
      <div><input placeholder="Họ tên" value={ten} onChange={e=>setTen(e.target.value)} /></div>
      <div><input placeholder="Năm sinh" value={namsinh} onChange={e=>setNamsinh(e.target.value)} /></div>
      <div><input placeholder="Địa chỉ" value={diachi} onChange={e=>setDiachi(e.target.value)} /></div>
      <div><button type="submit">{editing ? "Lưu" : "Thêm"}</button></div>
    </form>
  );
}
