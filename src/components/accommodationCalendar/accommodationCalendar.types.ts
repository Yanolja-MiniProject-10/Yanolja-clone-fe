export interface CalendarProps {
  isCalendarShow: boolean;
  setIsCalendarShow: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: Date;
  endDate: Date;
}
