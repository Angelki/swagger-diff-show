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
          warningMessages={warningMessages}
          created={created}
          dIndex={dataIndex}
        />
        <InfoTable
          infoMessages={infoMessages}
          created={created}
          dIndex={dataIndex}
        />
        <UnmatchTable
          unmatchPaths={unmatchPaths}
          created={created}
          dIndex={dataIndex}
        />
        <ErrTable
          errorMessages={errorMessages}
          created={created}
          dIndex={dataIndex}
        />
      </div>
    );
  }
}
