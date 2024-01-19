import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "rsuite";
import "../global";
import Header from "../Components/Header";
import ImageCell from "../Components/ImageCell";
import LinkCell from "../Components/LinkCell";
import useWindowSize from "../hooks/useWindowSize";
import useSortedData from "../hooks/useSortedData";
import processData from "../utils/processData";

const { Cell, Column, HeaderCell } = Table;

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState("oneDayVolume");
  const [sortType, setSortType] = useState("desc");
  const url = global.config.API_URL;
  const tableWidth = useWindowSize();
  const sortedData = useSortedData(data, sortColumn, sortType);

  // Fetch data from the API when component mounts
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const processedData = processData(res.data);
        setData(processedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, [url]);

  // Function to handle sorting when a column header is clicked
  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  // Render the table content
  const tableContent = (
    <div className="margin-auto p-3" style={{ width: tableWidth }}>
      <div className="title">Collection stats</div>
      <div className="subtitle">
        Top 100 ERC-721 Token Contracts by transfers for the last 24 hours
      </div>

      <Table
        width={tableWidth}
        autoHeight
        rowHeight={100}
        data={sortedData}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        id="table"
        rowKey="id"
        affixHeader={true}
        affixHorizontalScrollbar
      >
        <Column width={120} align="center" verticalAlign="middle">
          <HeaderCell className="title-table">Collection</HeaderCell>
          <ImageCell dataKey="imageUrl" />
        </Column>

        <Column verticalAlign="middle" width={300}>
          <HeaderCell className="title-table"></HeaderCell>
          <LinkCell dataKey="name" />
        </Column>

        <Column width={150} verticalAlign="middle" sortable align="right">
          <HeaderCell className="title-table">Volume (1d)</HeaderCell>
          <Cell dataKey="oneDayVolume">
            {(rowData) =>
              `${rowData.oneDayVolume ? rowData.oneDayVolume : ""} ${
                rowData.oneDayVolume ? "ETH" : ""
              }`
            }
          </Cell>
        </Column>

        <Column width={150} verticalAlign="middle" sortable align="right">
          <HeaderCell className="title-table">Volume (7d)</HeaderCell>
          <Cell dataKey="sevenDayVolume">
            {(rowData) =>
              `${rowData.sevenDayVolume ? rowData.sevenDayVolume : ""} ${
                rowData.sevenDayVolume ? "ETH" : ""
              }`
            }
          </Cell>
        </Column>

        <Column width={150} verticalAlign="middle" sortable align="right">
          <HeaderCell className="title-table">Volume (30d)</HeaderCell>
          <Cell dataKey="thirtyDayVolume">
            {(rowData) =>
              `${rowData.thirtyDayVolume ? rowData.thirtyDayVolume : ""} ${
                rowData.thirtyDayVolume ? "ETH" : ""
              }`
            }
          </Cell>
        </Column>

        <Column width={150} verticalAlign="middle" sortable align="right">
          <HeaderCell className="title-table">Transfers (1d)</HeaderCell>
          <Cell dataKey="transfers24h" />
        </Column>
      </Table>
    </div>
  );

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 content">{tableContent}</div>
    </div>
  );
}

export default Home;
