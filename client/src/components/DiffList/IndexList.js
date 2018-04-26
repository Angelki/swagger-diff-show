import React, { Component } from "react";
import { Table, Badge, Menu, Dropdown, Icon } from "antd";
import axios from "axios";
import DiffList from "./DiffList";
import "./styles.css";

export default class IndexList extends Component {
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
      .get("api/diffs/")
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

    const menu = (
      <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
      </Menu>
    );

    const expandedRowRender = () => {
      var list = [];
      for (let i = 0; i < dataIndex; i++) {
        list.push(
          <DiffList
            dataIndex={i}
            created={created}
            infoMessages={infoMessages}
            warningMessages={warningMessages}
            errorMessages={errorMessages}
            unmatchPaths={unmatchPaths}
          />
        );
      }
      return list;
      // const columns = [
      //   { title: "Date", dataIndex: "date", key: "date" },
      //   { title: "Name", dataIndex: "name", key: "name" },
      //   {
      //     title: "Status",
      //     key: "state",
      //     render: () => (
      //       <span>
      //         <Badge status="success" />Finished
      //       </span>
      //     )
      //   },
      //   { title: "Upgrade Status", dataIndex: "upgradeNum", key: "upgradeNum" },
      //   {
      //     title: "Action",
      //     dataIndex: "operation",
      //     key: "operation",
      //     render: () => (
      //       <span className="table-operation">
      //         <a href="javascript:;">Pause</a>
      //         <a href="javascript:;">Stop</a>
      //         <Dropdown overlay={menu}>
      //           <a href="javascript:;">
      //             More <Icon type="down" />
      //           </a>
      //         </Dropdown>
      //       </span>
      //     )
      //   }
      // ];

      // const data = [];
      // for (let i = 0; i < 3; ++i) {
      //   data.push({
      //     key: i,
      //     date: "2014-12-24 23:12:00",
      //     name: "This is production name",
      //     upgradeNum: "Upgraded: 56"
      //   });
      // }
      // return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns = [{ title: "API变更记录", dataIndex: "name", key: "name" }];

    // const data = [];
    // for (let i = 0; i < 3; ++i) {
    //   data.push({
    //     key: i,
    //     name: "Screem",
    //     platform: "iOS",
    //     version: "10.3.4.5654",
    //     upgradeNum: 500,
    //     creator: "Jack",
    //     createdAt: "2014-12-24 23:12:00"
    //   });
    // }

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
