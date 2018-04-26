import React, { Component } from "react";
import { Table } from "antd";

export default class ErrTable extends Component {
  render() {
    const { errorMessages, created } = this.props;
    // console.log(warningMessages[6]);
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
        dataSource={errorMessages[6]}
        bordered
        title={() => `${created[6]}--警告`}
      />
    );
  }
}
