import React, { Component } from "react";
import { Table } from "antd";

export default class WarningTable extends Component {
  render() {
    const { warningMessages, created } = this.props;
    console.log(warningMessages[6]);
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

    const data = [
      {
        key: 1,
        created: "xii",
        ruleId: "tese",
        message: "message",
        path: "lujing",
        property: "name"
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
