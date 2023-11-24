export const handleDateShow = (sDate: Date, eDate: Date) => {
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
