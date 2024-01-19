/**
 * Processes an array of data objects by applying formatting to specific fields.
 * @param {Object[]} data - The array of data objects to process.
 * @returns {Object[]} The processed array of data objects.
 */
const processData = (data) => {
  return data.map((e) => {
    e.oneDayVolume = formatVolume(e.oneDayVolume);
    e.sevenDayVolume = formatVolume(e.sevenDayVolume);
    e.thirtyDayVolume = formatVolume(e.thirtyDayVolume);
    e.name = truncateName(e.name);

    return e;
  });
};

/**
 * Formats a volume value, rounding it based on its size.
 * @param {number} volume - The volume value to format.
 * @returns {number} The formatted volume value.
 */
const formatVolume = (volume) => {
  if (!volume) return 0.0;
  // Round to 0 decimal places if volume is 10 or higher; otherwise, round to 2 decimal places
  return volume >= 10
    ? parseFloat(volume.toFixed(0))
    : parseFloat(volume.toFixed(2));
};

/**
 * Truncates a string if it exceeds a certain length.
 * @param {string} name - The string to truncate.
 * @returns {string} The truncated string.
 */
const truncateName = (name) => {
  // Truncate the name to 30 characters if it's longer
  return name.length > 30 ? name.substring(0, 30) + "..." : name;
};

export default processData;
