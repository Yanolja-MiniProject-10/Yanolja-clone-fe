export const handleDateString = (sDate: Date, eDate: Date) => {
  const targetDate = [sDate, eDate];
  if (!sDate || !eDate) return;

  let returnString = "";
  targetDate.map((singleDate: Date, index: number) => {
    const month = ("0" + (singleDate.getMonth() + 1).toString()).slice(-2);
    const day = ("0" + singleDate.getDate().toString()).slice(-2);
    returnString += month + "." + day;
    if (!index) returnString += " ~ ";
  });
  return returnString;
};

export const handleDateParam = (sDate: Date, eDate: Date) => {
  const targetDate = [sDate, eDate];
  const returnArr: string[] = [];
  if (!sDate || !eDate) return;

  targetDate.map((singleDate: Date) => {
    let temp = "";
    const year = singleDate.getFullYear();
    const month = ("0" + (singleDate.getMonth() + 1).toString()).slice(-2);
    const day = ("0" + singleDate.getDate().toString()).slice(-2);
    temp += year + "-" + month + "-" + day;
    returnArr.push(temp);
  });
  return returnArr;
};

export const handleTitlelength = (title: string) => {
  if (title.length > 18) {
    return "15px";
  } else if (title.length > 15) {
    return "18px";
  }
};

export const getDateValue = (key: string) => {
  const dateValue = sessionStorage.getItem(key);

  return dateValue === null ? null : new Date(JSON.parse(dateValue));
};

export const setDateValue = (key: string, value: Date) => {
  if (value === null || value === undefined) return;

  const dateResultToJSON = JSON.stringify(value);
  sessionStorage.setItem(key, dateResultToJSON);
};
