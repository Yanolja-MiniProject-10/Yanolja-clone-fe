import styled, { css } from "styled-components";

const MemberLayout = styled.div<{ $isMemberShow: boolean }>`
  width: 100vw;
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

const MemberContainer = styled.div`
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

const MemberContentBox = styled.div`
  padding-top: 30px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 300;
`;

const MemberContentPeopleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 30px 30px 0 30px;
  padding: 10px 15px;

  border: 1px solid lightgray;
  border-radius: ${({ theme }) => theme.box.radius};
`;

const MemberContentPeoplePick = styled.div`
  display: flex;
  gap: 1rem;

  > button {
    &:disabled {
      cursor: revert;
    }
  }
`;

const MemberNav = styled.nav`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 4;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
`;

const MemberButton = styled.button`
  width: 90%;
  height: 75%;

  border: none;
  background-color: ${({ theme }) => theme.color.mainPink};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export {
  MemberLayout,
  MemberContainer,
  MemberContentBox,
  MemberContentPeopleContainer,
  MemberContentPeoplePick,
  MemberNav,
  MemberButton,
};
