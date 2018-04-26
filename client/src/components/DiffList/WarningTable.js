import React, { Component } from "react";
import { Table } from "antd";

export default class WarningTable extends Component {
  render() {
    const { warningMessages, created } = this.props;
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
        dataSource={warningMessages[6]}
        bordered
        title={() => `${created[6]}--警告`}
      />
    );
  }
}
