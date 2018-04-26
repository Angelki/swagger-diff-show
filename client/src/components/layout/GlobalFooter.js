import React, { Component } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Footer } = Layout;

export default class GlobalFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        Decobim Copyright &copy; {new Date().getFullYear()} Created by&nbsp;
        <Link to="http://www.decobim.com" target="_blank">
          zzz
        </Link>
      </Footer>
    );
  }
}
