import React, { Component } from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";
import CivilList from "../DiffList/CivilList";
import DecoList from "../DiffList/DecoList";

const { Content } = Layout;
export default class IndexContent extends Component {
  render() {
    return (
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Route exact path="/" component={CivilList} />
            <Route exact path="/deco" component={DecoList} />
          </Content>
        </Layout>
      </Content>
    );
  }
}
