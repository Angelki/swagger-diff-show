import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default class GlobalFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        Decobim Copyright &copy; {new Date().getFullYear()} Created by&nbsp;
        <a href="http://www.decobim.com" target="_blank">
          zzz
        </a>
      </Footer>
    );
  }
}
