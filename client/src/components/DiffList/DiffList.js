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
        title: "最近五次",
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
      // {
      //   title: "Errors",
      //   dataIndex: "errors"
      // },
      {
        title: "unmatchDiffs",
        dataIndex: "unmatchDiffs"
      }
    ];

    const data = [
      {
        key: "1",
        number: "最近",
        infos: infoMessages[0],
        warnings: warningMessages[0],
        errors: errorMessages[0],
        unmatchDiffs: unmatchPaths[0]
      },
      {
        key: "2",
        number: "2",
        infos: infoMessages[1],
        warnings: warningMessages[1],
        errors: errorMessages[1],
        unmatchDiffs: unmatchPaths[1]
      },
      {
        key: "3",
        number: "3",
        infos: infoMessages[2],
        warnings: warningMessages[2],
        errors: errorMessages[2],
        unmatchDiffs: unmatchPaths[2]
      },
      {
        key: "4",
        number: "4",
        infos: infoMessages[3],
        warnings: warningMessages[3],
        errors: errorMessages[3],
        unmatchDiffs: unmatchPaths[3]
      },
      {
        key: "5",
        number: "5",
        infos: infoMessages[4],
        warnings: warningMessages[4],
        errors: errorMessages[4],
        unmatchDiffs: unmatchPaths[4]
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
