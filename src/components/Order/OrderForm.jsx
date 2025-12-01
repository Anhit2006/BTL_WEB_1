import React, { useState } from "react";
import { addOrder } from "../../utils/orderService";
import { reduceProductQty } from "../../utils/productService";

export default function OrderForm({ customers, products, onCreated }) {
  const [khId, setKhId] = useState("");
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState("");

  function addToCart(pid, qty) {
    const prod = products.find(p => p.id === pid);
    if(!prod) return alert("Chọn sản phẩm");
    if(qty <= 0) return alert("Số lượng > 0");
    if(prod.qty < qty) return alert("Không đủ tồn kho");
    const item = { id: prod.id, ten: prod.ten, gia: prod.gia, qty };
    setCart([...cart, item]);
  }

  function createOrder() {
    if(!orderId) return alert("Nhập mã đơn");
    const kh = customers.find(c => c.id === khId);
    if(!kh) return alert("Chọn khách hàng");
    if(cart.length===0) return alert("Chưa có sản phẩm");
    const tong = cart.reduce((s,i)=>s + i.gia * i.qty, 0);
    const dh = { id: orderId, kh, ngay: (new Date()).toLocaleString(), items: cart, tong };
    addOrder(dh);
    // trừ tồn
    cart.forEach(it=> reduceProductQty(it.id, it.qty));
    setCart([]); setOrderId("");
    if(onCreated) onCreated();
    alert("Tạo đơn thành công");
  }

  return (
    <div className="order-form">
      <h3>Tạo đơn hàng</h3>
      <div>
        <input placeholder="Mã đơn" value={orderId} onChange={e=>setOrderId(e.target.value)} />
      </div>
      <div>
        <select value={khId} onChange={e=>setKhId(e.target.value)}>
          <option value="">--Chọn KH--</option>
          {customers.map(c=> <option key={c.id} value={c.id}>{c.ten}</option>)}
        </select>
      </div>

      <div className="order-add-item">
        <label>Thêm sản phẩm</label>
        <select id="selProd">
          <option value="">--Chọn--</option>
          {products.map(p=> <option key={p.id} value={p.id}>{p.ten} ({p.qty})</option>)}
        </select>
        <input id="qty" type="number" defaultValue={1} min={1} />
        <button onClick={()=>{
          const pid = document.getElementById("selProd").value;
          const qty = Number(document.getElementById("qty").value);
          addToCart(pid, qty);
        }}>Thêm</button>
      </div>

      <div>
        <h4>Giỏ hàng</h4>
        <ul>
          {cart.map((it, idx)=><li key={idx}>{it.ten} x {it.qty} = {it.gia*it.qty}</li>)}
          {cart.length===0 && <li>Chưa có sản phẩm</li>}
        </ul>
      </div>

      <div>
        <button onClick={createOrder}>Tạo đơn</button>
      </div>
    </div>
  );
}
