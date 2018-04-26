import React, { Component } from "react";
// import { Table } from "antd";

import WarningTable from "./WarningTable";
import InfoTable from "./InfoTable";
import ErrTable from "./ErrTable";
import UnmatchTable from "./UnmatchTable";

export default class DiffList extends Component {
  render() {
    const {
      created,
      infoMessages,
      warningMessages,
      errorMessages,
      unmatchPaths,
      dataIndex
    } = this.props;

    return (
      <div>
        <h1>{created[dataIndex]}--API变更</h1>
        <WarningTable
          warningMessages={warningMessages[dataIndex]}
          created={created[dataIndex]}
          dIndex={dataIndex[dataIndex]}
        />
        <InfoTable
          infoMessages={infoMessages[dataIndex]}
          created={created[dataIndex]}
          dIndex={dataIndex[dataIndex]}
        />
        <UnmatchTable
          unmatchPaths={unmatchPaths[dataIndex]}
          created={created[dataIndex]}
          dIndex={dataIndex[dataIndex]}
        />
        <ErrTable
          errorMessages={errorMessages[dataIndex]}
          created={created[dataIndex]}
          dIndex={dataIndex[dataIndex]}
        />
      </div>
    );
  }
}
