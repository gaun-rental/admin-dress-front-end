import React from "react";
import { Button } from "antd";
import { Layout } from "antd";
import { Table, Space } from "antd";

// import "./styles/Style.css";

import HeaderComponent from "../../components/HeaderComponent";
import SidebarComponent from "../../components/SidebarComponent";
function Produk() {
  const { Content } = Layout;
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Nama Produk",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Kategori ",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Harga",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (text) => (
        <Space size="middle">
          {/* eslint-disable-next-line */}
          <a>Detail</a>
          {/* eslint-disable-next-line */}
          <a>Edit</a>
          {/* eslint-disable-next-line */}
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      no: 1,
      name: "Morning Dress",
      category: "Adat Jawa",
      price: "Rp 2.000.000",
    },
    {
      key: "2",
      no: 2,
      name: "Night Dress",
      category: "Adat Sunda",
      price: "Rp 1.000.000",
    },
    {
      key: "3",
      no: 3,
      name: "Morning Dress",
      category: "Adat Batak",
      price: "Rp 1.000.000",
    },
  ];
  return (
    <>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SidebarComponent />
          <Layout style={{ padding: "10px  24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Button type="primary">Tambah Produk</Button>
              <Table
                className="TableProduct"
                columns={columns}
                dataSource={data}
              />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default Produk;
