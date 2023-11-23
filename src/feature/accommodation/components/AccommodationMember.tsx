import styled, { css } from "styled-components";

const MemberLayout = styled.div<{ $isMemberShow: boolean }>`
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
    props.$isMemberShow &&
    css`
      top: 50px;
      transition: all 0.5s ease;
    `};
`;

const MemberContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.box.shadow};
  z-index: 3;
  width: 90%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MemberContentBox = styled.div`
  padding-top: 30px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const MemberContentPeopleContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: ${({ theme }) => theme.box.radius};
  margin: 30px 30px 0 30px;
  padding: 10px 15px;

  display: flex;
  justify-content: space-between;
`;

const MemberContentPeoplePick = styled.div`
  display: flex;
  gap: 1rem;
  // justify-content: space-between;
`;

const MemberNav = styled.nav`
  width: 100%;
  height: 50px;
  z-index: 4;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberButton = styled.button`
  width: 90%;
  height: 75%;
  border: none;
  background-color: ${({ theme }) => theme.color.mainPink};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

interface Props {
  isMemberShow: boolean;
  setIsMemberShow: React.Dispatch<React.SetStateAction<boolean>>;
  memberNumber: number;
  setMemberNumber: React.Dispatch<React.SetStateAction<number>>;
}
const AccommodationMember = ({ isMemberShow, setIsMemberShow, memberNumber, setMemberNumber }: Props) => {
  return (
    <MemberLayout $isMemberShow={isMemberShow}>
      <MemberContainer>
        <MemberContentBox>
          정확한 숙소검색 결과를 확인하려면 인원수를 선택해주세요.
          <MemberContentPeopleContainer>
            성인
            <MemberContentPeoplePick>
              <button onClick={() => setMemberNumber(prev => prev - 1)}> - </button>
              {memberNumber}
              <button onClick={() => setMemberNumber(prev => prev + 1)}> + </button>
            </MemberContentPeoplePick>
          </MemberContentPeopleContainer>
        </MemberContentBox>
        <MemberNav>
          <MemberButton
            onClick={() => setIsMemberShow(prev => !prev)}
          >{`성인 ${memberNumber} · 적용하기`}</MemberButton>
        </MemberNav>
      </MemberContainer>
    </MemberLayout>
  );
};

export default AccommodationMember;
