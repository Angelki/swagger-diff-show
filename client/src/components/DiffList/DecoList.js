import React, { Component } from "react";
import { Table, Badge, Menu, Dropdown, Icon } from "antd";
import axios from "axios";
import DiffList from "./DiffList";
import "./styles.css";

export default class DecoList extends Component {
  state = {
    infoMessages: [],
    warningMessages: [],
    errorMessages: [],
    unmatchPaths: [],
    created: [],
    dataIndex: 0
  };

  componentWillMount() {
    this.onAxiosList();
  }

  onAxiosList = () => {
    axios
      .get("api/diffs/deco")
      .then(res => {
        let infoMsg = res.data.allDiffs.map(datalist => datalist.infos);
        let warningMsg = res.data.allDiffs.map(datalist => datalist.warnings);
        let errorMsg = res.data.allDiffs.map(datalist => datalist.errors);
        let unmatchPathMsg = res.data.allDiffs.map(
          datalist => datalist.unmatchDiffs
        );
        let time = res.data.created;

        this.setState({
          infoMessages: infoMsg,
          warningMessages: warningMsg,
          errorMessages: errorMsg,
          unmatchPaths: unmatchPathMsg,
          created: time,
          dataIndex: time.length
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    const {
      created,
      infoMessages,
      warningMessages,
      errorMessages,
      unmatchPaths
    } = this.state;
    let { dataIndex } = this.state;

    const expandedRowRender = record => {
      return (
        <DiffList
          dataIndex={record.key}
          created={created}
          infoMessages={infoMessages}
          warningMessages={warningMessages}
          errorMessages={errorMessages}
          unmatchPaths={unmatchPaths}
        />
      );
    };

    const columns = [{ title: "API变更记录", dataIndex: "name", key: "name" }];

    var list = [];
    for (let i = 0; i < dataIndex; i++) {
      list.push({
        key: i,
        name: created[i]
      });
    }

    return (
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandedRowRender={expandedRowRender}
        dataSource={list}
      />
    );
  }
}
