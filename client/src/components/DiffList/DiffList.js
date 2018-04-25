import React, { Component } from "react";
import { Table } from "antd";
import axios from "axios";

export default class DiffList extends Component {
  state = {
    infoMessages: [],
    warningMessages: [],
    errorMessages: [],
    unmatchPaths: []
  };

  componentWillMount() {
    this.onAxiosList();
  }

  onAxiosList = () => {
    axios
      .get("api/diffs/")
      .then(res => {
        // * msg还是数组
        let infoMsg = res.data.map(datalist =>
          datalist.infos.map(item => item.message)
        );
        let warningMsg = res.data.map(datalist =>
          datalist.warnings.map(item => item.message)
        );
        let errorMsg = res.data.map(datalist =>
          datalist.errors.map(item => item.message)
        );
        let unmatchPathMsg = res.data.map(datalist =>
          datalist.unmatchDiffs.map(item => item.path)
        );
        console.log(infoMsg);
        console.log(warningMsg);
        console.log(errorMsg);
        console.log(unmatchPathMsg);

        this.setState({
          infoMessages: infoMsg,
          warningMessages: warningMsg,
          errorMessages: errorMsg,
          unmatchPaths: unmatchPathMsg
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      diffData,
      infoMessages,
      warningMessages,
      errorMessages,
      unmatchPaths
    } = this.state;
    console.log(infoMessages);
    // console.log(typeof diffData);
    // if (diffData !== []) console.log(diffData[0].infos.message);
    const columns = [
      {
        title: "Number",
        dataIndex: "number"
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
        dataIndex: "errors"
      },
      {
        title: "unmatchDiffs",
        dataIndex: "unmatchDiffs"
      }
    ];
    // let newList = [];
    // diffData.map(item => {
    //   let newItem = {
    //     key: "test",
    //     number: "API有改动",
    //     infos: ,
    //     warnings: ,
    //     errors: ,
    //     unmatchDiffs:
    //   };
    //   newList.unshift(newItem);
    // });
    // console.log(newList);

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
