import { IoClose } from "react-icons/io5";
import styled, { css } from "styled-components";

export const MemberLayout = styled.div<{ $isMemberShow: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 100%;
  left: 0;

  z-index: 2;
  background-color: ${({ theme }) => theme.color.brightGray};

  ${props =>
    props.$isMemberShow &&
    css`
      top: 50px;
      transition: all 0.5s ease;
    `};
`;

export const MemberContainer = styled.div`
  width: 100%;
  max-width: 750px;
  height: calc(100% - 50px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.box.shadow};
  z-index: 3;
`;

export const MemberContentBox = styled.div`
  padding-top: 30px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 300;
`;

export const MemberContentInfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 30px;

  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const MemberContentInfoCloseIcon = styled(IoClose)`
  width: 1rem;
  height: 1rem;

  cursor: pointer;
`;

export const MemberContentPeopleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 30px 30px 0 30px;
  padding: 10px 15px;

  border: 1px solid lightgray;
  border-radius: ${({ theme }) => theme.box.radius};

  > * {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  > div > button {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const MemberContentPeoplePick = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;

  > button {
    background-color: #f1fafe;
    border: 1px solid #f1fafe;
    border-radius: 50%;
    &:disabled {
      background-color: ${({ theme }) => theme.color.brightGray};
      cursor: revert;
    }
  }
`;

export const MemberNav = styled.nav`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 50px;
  left: 0;

  background-color: ${({ theme }) => theme.color.white};
  z-index: 4;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const MemberButton = styled.button`
  width: 90%;
  max-width: 750px;
  height: 75%;

  border: none;
  background-color: ${({ theme }) => theme.color.mainPink};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: 5px;
`;
