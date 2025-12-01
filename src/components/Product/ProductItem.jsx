import React from "react";

export default function ProductItem({ p, onEdit, onToggle }) {
  return (
    <tr style={{ opacity: p.hidden ? 0.5 : 1 }}>
      <td>{p.id}</td>
      <td>{p.ten}</td>
      <td>{p.gia}</td>
      <td>{p.qty}</td>
      <td>{p.hidden ? "Yes" : "No"}</td>
      <td>
        <button onClick={onEdit}>Sửa</button>
        <button onClick={onToggle}>{p.hidden ? "Hiện" : "Ẩn"}</button>
      </td>
    </tr>
  );
}
