import React, { Component } from "react";
import { Table } from "antd";

export default class UnmatchTable extends Component {
  render() {
    const { unmatchPaths, created } = this.props;
    // console.log(warningMessages[6]);
    const columns = [
      {
        title: "kind",
        dataIndex: "kind"
      },
      {
        title: "path",
        dataIndex: "path"
      },
      {
        title: "lhs",
        dataIndex: "lhs"
      },
      {
        title: "rhs",
        dataIndex: "rhs"
      }
    ];
    return (
      <Table
        columns={columns}
        rowKey={record => record.kind}
        dataSource={unmatchPaths[6]}
        bordered
        title={() => `${created[6]}--不匹配的Diff`}
      />
    );
  }
}
