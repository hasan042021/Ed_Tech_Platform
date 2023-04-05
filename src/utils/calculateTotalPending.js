export const calculateTotalPending = (data) => {
  return data.reduce((count, item) => {
    if (item.status === "pending") {
      return count + 1;
    }
    return count;
  }, 0);
};
