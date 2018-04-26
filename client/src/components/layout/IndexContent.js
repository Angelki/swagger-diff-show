import React, { Component } from "react";
import { Layout } from "antd";
import IndexList from "../DiffList/IndexList";

const { Content } = Layout;
export default class IndexContent extends Component {
  render() {
    return (
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <IndexList />
          </Content>
        </Layout>
      </Content>
    );
  }
}
