import React, { Component } from "react";
import { Table } from "antd";
export default class DiffList extends Component {
  render() {
    const columns = [
      {
        title: "Number",
        dataIndex: "number",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "Infos",
        dataIndex: "infos"
      },
      {
        title: "Warnings",
        className: "warnings",
        dataIndex: "warnings"
      },
      {
        title: "Errors",
        dataIndex: "errors",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "unmatchDiffs",
        dataIndex: "unmatchDiffs",
        render: text => <a href="javascript:;">{text}</a>
      }
    ];

    const data = [
      {
        key: "1",
        number: "API有改动",
        infos: "￥300,000.00",
        warnings: "New York No. 1 Lake Park",
        errors: "New York No. 1 Lake Park",
        unmatchDiffs: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        number: "API有改动",
        infos: "￥300,000.00",
        warnings: "New York No. 1 Lake Park",
        errors: "New York No. 1 Lake Park",
        unmatchDiffs: "New York No. 1 Lake Park"
      },
      {
        key: "3",
        number: "API有改动",
        infos: "￥300,000.00",
        warnings: "New York No. 1 Lake Park",
        errors: "New York No. 1 Lake Park",
        unmatchDiffs: "New York No. 1 Lake Park"
      }
    ];

    return (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "Header"}
        footer={() => "Footer"}
      />
    );
  }
}
