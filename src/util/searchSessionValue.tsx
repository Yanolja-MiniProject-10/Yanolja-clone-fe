export const getSessionValue = (key: string) => {
  const sessionValue = sessionStorage.getItem(key);

  return sessionValue === null ? null : JSON.parse(sessionValue);
};

export const setSessionValue = (key: string, value: string) => {
  if (value === null || value === undefined) return;

  const sessionResultToJSON = JSON.stringify(value);
  sessionStorage.setItem(key, sessionResultToJSON);
};
