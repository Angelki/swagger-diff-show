import React, { Component } from "react";
import { Layout } from "antd";
import GlobalHeader from "./GlobalHeader";
import IndexContent from "./IndexContent";
import GlobalFooter from "./GlobalFooter";

export default class BasicLayout extends Component {
  render() {
    return (
      <div>
        <Layout>
          <GlobalHeader />
          <IndexContent />
          <GlobalFooter />
        </Layout>
      </div>
    );
  }
}
