import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

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
          defaultSelectedKeys={["civil"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="civil">
            <Link to="/">土建</Link>
          </Menu.Item>
          <Menu.Item key="deco">
            <Link to="/deco">装饰</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
