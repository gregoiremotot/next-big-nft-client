import { useMemo } from 'react';

// Custom hook to sort data based on specified column and sort type
const useSortedData = (data, sortColumn, sortType) => {
  return useMemo(() => {
    // Skip sorting if no sortColumn, sortType, or data
    if (!sortColumn || !sortType || !data.length) return data;

    // Create a sorted copy of the data
    return [...data].sort((a, b) => {
      let x = a[sortColumn];
      let y = b[sortColumn];

      // Compare by char code for strings
      if (typeof x === 'string') x = x.charCodeAt();
      if (typeof y === 'string') y = y.charCodeAt();

      // Ascending or descending sort
      return sortType === 'asc' ? x - y : y - x;
    });
  }, [data, sortColumn, sortType]);
};

export default useSortedData;
