import React from "react";
import { getProducts } from "../../utils/productService";
import { getOrders } from "../../utils/orderService";

export default function StatsOverview() {
  const products = getProducts();
  const orders = getOrders();
  const totalProducts = products.length;
  const lowStock = products.filter(p => p.qty <= 5).length;
  const revenue = orders.reduce((s,o)=> s + (o.tong || 0), 0);

  return (
    <div>
      <h2>Thống kê</h2>
      <div className="stats-cards">
        <div className="card">Sản phẩm: {totalProducts}</div>
        <div className="card">Hàng cận hết: {lowStock}</div>
        <div className="card">Doanh thu: {revenue}</div>
      </div>
    </div>
  );
}
