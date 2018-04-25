import React, { Component } from "react";
import { Layout, Table } from "antd";
import DiffList from "../DiffList/DiffList";

const { Content } = Layout;
export default class IndexContent extends Component {
  render() {
    return (
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <DiffList />
          </Content>
        </Layout>
      </Content>
    );
  }
}