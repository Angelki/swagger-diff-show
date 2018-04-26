import React, { Component } from "react";
import { Table } from "antd";

export default class UnmatchTable extends Component {
  render() {
    const { unmatchPaths, dIndex } = this.props;
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
        dataSource={unmatchPaths[dIndex]}
        bordered
        title={() => <h2>UnmatchDiff</h2>}
      />
    );
  }
}
