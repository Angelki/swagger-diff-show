import React, { Component } from "react";
import { Table } from "antd";

export default class ErrTable extends Component {
  render() {
    const { errorMessages, created, dIndex } = this.props;
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
        dataSource={errorMessages[dIndex]}
        bordered
        title={() => <h2>Errors</h2>}
      />
    );
  }
}
