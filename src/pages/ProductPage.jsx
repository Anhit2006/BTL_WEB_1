import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import Modal from "../components/Modal/Modal";
import "../App.css";

const PAGE_SIZE = 5;

const ProductPage = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    qty: ""
  });

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  const openAdd = () => {
    setForm({ id: "", name: "", price: "", qty: "" });
    setModalOpen(true);
  };

  const save = () => {
    if (!form.id || !form.name) return alert("Thiếu thông tin");

    const newList = [...list];
    const idx = newList.findIndex((p) => p.id === form.id);

    if (idx >= 0) newList[idx] = form;
    else newList.push(form);

    localStorage.setItem("products", JSON.stringify(newList));
    setList(newList);
    setModalOpen(false);
  };

  const edit = (p) => {
    setForm(p);
    setModalOpen(true);
  };

  const remove = (id) => {
    if (!window.confirm("Xóa sản phẩm này?")) return;

    const newList = list.filter((p) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(newList));
    setList(newList);
  };

  const filtered = list.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPage = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const showList = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <TopBar />

        <div className="box">
          <h2>Quản lý sản phẩm</h2>

          <div className="search-box">
            <input
              placeholder="Tìm kiếm sản phẩm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="btn btn-add" onClick={openAdd}>
            + Thêm sản phẩm
          </button>

          <table className="table">
            <thead>
              <tr>
                <th>Mã</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Tồn kho</th>
                <th>Hành động</th>
              </tr>
            </thead>

            <tbody>
              {showList.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.qty}</td>
                  <td>
                    <button className="btn btn-edit" onClick={() => edit(p)}>
                      Sửa
                    </button>
                    <button className="btn btn-del" onClick={() => remove(p.id)}>
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            {Array.from({ length: totalPage }, (_, i) => (
              <div
                key={i}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {modalOpen && (
          <Modal title="Thêm / Sửa sản phẩm" onClose={() => setModalOpen(false)}>
            <input
              className="ipt"
              placeholder="Mã sản phẩm"
              value={form.id}
              onChange={(e) => setForm({ ...form, id: e.target.value })}
            />

            <input
              className="ipt"
              placeholder="Tên sản phẩm"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="ipt"
              placeholder="Giá"
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <input
              className="ipt"
              placeholder="Tồn kho"
              type="number"
              value={form.qty}
              onChange={(e) => setForm({ ...form, qty: e.target.value })}
            />

            <button
              className="btn btn-add"
              style={{ marginTop: "10px" }}
              onClick={save}
            >
              Lưu
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
