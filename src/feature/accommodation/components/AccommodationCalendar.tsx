import styled, { css } from "styled-components";

const CalendarLayout = styled.div<{ $isCalendarShow: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.brightGray};
  top: 100%;
  left: 0;

  ${props =>
    props.$isCalendarShow &&
    css`
      top: 50px;
      transition: all 0.5s ease;
    `};
`;

interface Props {
  isCalendarShow: boolean;
  setIsCalendarShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccommodationCalender = ({ isCalendarShow, setIsCalendarShow }: Props) => {
  return <CalendarLayout $isCalendarShow={isCalendarShow}> 6789</CalendarLayout>;
};

export default AccommodationCalender;
