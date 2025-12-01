import React, { useEffect, useState } from "react";
import { getOrders } from "../../utils/orderService";
import { getCustomers } from "../../utils/customerService";
import { getProducts } from "../../utils/productService";
import OrderForm from "./OrderForm";

export default function OrderList() {
  const [ds, setDs] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setDs(getOrders());
    setCustomers(getCustomers());
    setProducts(getProducts());
  }, []);

  return (
    <div>
      <h2>Đơn hàng</h2>
      <OrderForm onCreated={() => setDs(getOrders())} customers={customers} products={products} />
      <div className="order-table">
        <table>
          <thead><tr><th>Mã</th><th>Khách</th><th>Ngày</th><th>Tổng</th></tr></thead>
          <tbody>
            {ds.map(o => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.kh.ten}</td>
                <td>{o.ngay}</td>
                <td>{o.tong}</td>
              </tr>
            ))}
            {ds.length===0 && <tr><td colSpan="4">Không có đơn hàng</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
