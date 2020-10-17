import React from "react";
import { Button } from "antd";
import { Layout } from "antd";
import { Table, Space } from "antd";

import '../StylePages.css';

import HeaderComponent from "../components/HeaderComponent";
import SidebarComponent from "../components/SidebarComponent";
function Kategori() {
  const { Content } = Layout;
  const columns = [
    {
        title: "No",
        dataIndex: "no",
        key: "no",
      },
    {
      title: "Nama Kategori",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: text => (
        <Space size="middle">
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
      name: "Adat Jawa",
    },
    {
      key: "2",
      no: 2,
      name: "Adat Sunda",
    },
    {
      key: "3",
      no: 3,
      name: "Adat Batak",
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
              <Button type="primary">Tambah Kategori</Button>
              <Table className="TableCategory" columns={columns} dataSource={data} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default Kategori;
