import React from "react";
import { Table } from "rsuite";
const { Cell } = Table;

const LinkCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 2 }}>
    <a href={rowData.openSeaUrl} target="_blank" rel="noopener noreferrer">
      {rowData.name}
    </a>
  </Cell>
);

export default LinkCell;
