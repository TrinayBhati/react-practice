export const filterData = (list, searchText) => {
  const ans = list.filter((elem) =>
    elem?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("ans", ans);
  return ans;
};
