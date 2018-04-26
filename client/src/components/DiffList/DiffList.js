import React, { Component } from "react";
// import { Table } from "antd";
import axios from "axios";
import WarningTable from "./WarningTable";
import InfoTable from "./InfoTable";

export default class DiffList extends Component {
  state = {
    infoMessages: [],
    warningMessages: [],
    errorMessages: [],
    unmatchPaths: [],
    created: []
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
          created: time
        });
      })
      .catch(err => console.log(err));
  };

  // created={created}
  // infoMessages={infoMessages}
  // warningMessages={warningMessages}
  // errorMessages={errorMessages}
  // unmatchPaths={unmatchPaths}
  render() {
    const {
      created,
      infoMessages,
      warningMessages,
      errorMessages,
      unmatchPaths
    } = this.state;
    return (
      <div>
        <WarningTable warningMessages={warningMessages} created={created} />
        <InfoTable infoMessages={infoMessages} created={created} />
      </div>
    );
  }
}
