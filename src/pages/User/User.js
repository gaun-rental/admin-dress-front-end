import React from "react";
import { Layout } from "antd";
import { Table, Space } from "antd";


import HeaderComponent from "../../components/HeaderComponent";
import SidebarComponent from "../../components/SidebarComponent";
function Produk() {
  const { Content } = Layout;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    //  eslint-disable-next-line
      render: text => <a>{text}</a>,
    },

    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
            {/*  eslint-disable-next-line */}
          <a>Detail </a>
          {/*  eslint-disable-next-line */}
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
        key: '1',
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        address: 'Sidney No. 1 Lake Park',
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
              <Table
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
