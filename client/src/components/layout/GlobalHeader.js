import React, { Component } from "react";
import { Layout, Menu } from "antd";

import "./styles.css";

const { Header } = Layout;

export default class GlobalHeader extends Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["4"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="4">土建平台API变更</Menu.Item>
        </Menu>
      </Header>
    );
  }
}
