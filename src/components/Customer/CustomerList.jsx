import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import { getCustomers, addCustomer, updateCustomer } from "../../utils/customerService";

export default function CustomerList() {
  const [ds, setDs] = useState([]);
  const [editing, setEditing] = useState(null);
  const [q, setQ] = useState("");

  useEffect(()=> setDs(getCustomers()), []);

  function refresh(){ setDs(getCustomers()); }
  function onAdd(c){ addCustomer(c); refresh(); }
  function onUpdate(c){ updateCustomer(c); setEditing(null); refresh(); }

  const filtered = ds.filter(x => x.ten.toLowerCase().includes(q.toLowerCase()) || x.id.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="customer-page">
      <h2>Khách hàng</h2>
      <div className="customer-top">
        <input placeholder="Tìm khách hàng..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>

      <div className="customer-main">
        <div>
          <CustomerForm onAdd={onAdd} onUpdate={onUpdate} editing={editing} />
        </div>
        <div>
          <table>
            <thead><tr><th>Mã</th><th>Họ tên</th><th>Năm sinh</th><th>Địa chỉ</th><th>Hành động</th></tr></thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.ten}</td>
                  <td>{c.namsinh}</td>
                  <td>{c.diachi}</td>
                  <td><button onClick={()=>setEditing(c)}>Sửa</button></td>
                </tr>
              ))}
              {filtered.length===0 && <tr><td colSpan="5">Không có khách hàng</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
