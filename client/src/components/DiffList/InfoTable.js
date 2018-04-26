import React, { Component } from "react";
import { Table } from "antd";

export default class InfoTable extends Component {
  render() {
    const { infoMessages, dIndex } = this.props;
    const columns = [
      {
        title: "ruleId",
        dataIndex: "ruleId"
      },
      {
        title: "message",
        dataIndex: "message"
      },
      {
        title: "path",
        dataIndex: "path"
      }
    ];
    return (
      <Table
        columns={columns}
        rowKey={record => record.ruleId}
        dataSource={infoMessages[dIndex]}
        bordered
        title={() => <h2>Info</h2>}
      />
    );
  }
}
