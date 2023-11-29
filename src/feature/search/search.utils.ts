export const getSearchValue = (key: string) => {
  const searchValue = sessionStorage.getItem(key);

  return searchValue === null ? null : JSON.parse(searchValue);
};

export const setSearchValue = (key: string, value: string) => {
  if (value === null || value === undefined) return;

  const searchResultToJSON = JSON.stringify(value);
  sessionStorage.setItem(key, searchResultToJSON);
};
