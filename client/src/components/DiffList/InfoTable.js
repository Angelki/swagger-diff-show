import React, { Component } from "react";
import { Table } from "antd";

export default class InfoTable extends Component {
  render() {
    const { infoMessages, created } = this.props;
    console.log(infoMessages[6]);
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
        dataSource={infoMessages[6]}
        bordered
        title={() => `${created[6]}--信息`}
      />
    );
  }
}