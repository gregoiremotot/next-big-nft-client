import styles from "./ImageCell.module.css";
import React from "react";
import { Table } from "rsuite";
const { Cell } = Table;

const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} className={styles.cellPadding}>
    <div className={styles.imageContainer}>
      <a href={rowData.openSeaUrl} target="_blank" rel="noopener noreferrer">
        <img src={rowData.imageUrl} alt="" width="72" height="72" />
      </a>
    </div>
  </Cell>
);

export default ImageCell;
