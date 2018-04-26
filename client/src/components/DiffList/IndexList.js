import React, { Component } from "react";
import axios from "axios";
import DiffList from "./DiffList";

export default class IndexList extends Component {
  state = {
    infoMessages: [],
    warningMessages: [],
    errorMessages: [],
    unmatchPaths: [],
    created: [],
    dataIndex: "0"
  };

  componentWillMount() {
    this.onAxiosList();
  }

  onAxiosList = () => {
    axios
      .get("api/diffs/")
      .then(res => {
        // * msg还是数组
        // console.log(res.data.allDiffs);
        let infoMsg = res.data.allDiffs.map(datalist => datalist.infos);
        let warningMsg = res.data.allDiffs.map(datalist => datalist.warnings);
        let errorMsg = res.data.allDiffs.map(datalist => datalist.errors);
        let unmatchPathMsg = res.data.allDiffs.map(
          datalist => datalist.unmatchDiffs
        );
        let time = res.data.created;
        // console.log(time);
        // console.log(infoMsg);
        // console.log(warningMsg);
        // console.log(errorMsg);
        // console.log(unmatchPathMsg);

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
      unmatchPaths,
      dataIndex
    } = this.state;

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
  }
}
