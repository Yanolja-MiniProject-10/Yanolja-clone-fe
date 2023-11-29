const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <YLogoBox>
          <img src="/public/footer/yanolja-ico-logo.svg" alt="yanolja-ico-logo" />
        </YLogoBox>
        <FLogoBox>FASTCAMPUS</FLogoBox>
      </FooterHeader>

      <ContextBox>
        <p>
          (주)야놀자 | 대표이사 : 이수진, 김종윤, 배보찬 | 사업자 등록번호 : 220-87-42885 | 통신판매업신고 :
          강남-14211호 | 메일 : help@yanolja.com 관광사업자 등록번호 : 제2016-31호 | 주소 : 서울특별시 강남구
          테헤란로108길 42 | 호스팅서비스 제공자 : 주식회사 야놀자 고객센터 : 1644-1346 (오전 9시 - 익일 새벽 3시)
        </p>
        <ButtonContainer>
          <ButtonBox target="_blank" to="https://www.yanolja.in/">
            회사소개
          </ButtonBox>
          <ButtonBox target="_blank" to="https://ad.yanolja.com/intro">
            광고제휴문의
          </ButtonBox>
          <ButtonBox target="_blank" to="https://careers.yanolja.co/">
            인재채용
          </ButtonBox>
          <ButtonBox
            target="_blank"
            to="https://m.policy.yanolja.com/policy/?t=privacy&d=m"
            style={{ fontWeight: "bold" }}
          >
            개인정보처리방침
          </ButtonBox>
          <ButtonBox target="_blank" to="https://policy.yanolja.com/policy/?t=youth">
            청소년 보호 정책
          </ButtonBox>
          <ButtonBox target="_blank" to="https://m.policy.yanolja.com/pf/policy/service?t=service&d=m">
            서비스 이용약관
          </ButtonBox>
          <ButtonBox target="_blank" to="https://m.policy.yanolja.com/policy/?t=location&d=m">
            위치정보이용약관
          </ButtonBox>
          <ButtonBox
            target="_blank"
            to='"http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=2208742885"'
          >
            사업자 정보확인
          </ButtonBox>
          <ButtonBox target="_blank" to="https://policy.yanolja.com/policy/?t=terms-eft">
            전자금융거래 이용약관
          </ButtonBox>
          <ButtonBox target="_blank" to="https://policy.yanolja.com/policy/?t=notes-eft">
            전자금융거래 이용자 유의사항
          </ButtonBox>
        </ButtonContainer>
        <p>
          (주) 야놀자는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와
          책임은 각 판매자에게 있습니다.
        </p>
        <p>
          (주)야놀자가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트 정보, 디자인 및 화면의 구성, UI를
          포함하여 일체의 콘텐츠에 대한 무단 복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는 저작권법 및 콘텐츠산업
          진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.
        </p>
        <ButtonContainer>
          <ButtonBox target="_blank" to="https://www.yanolja.com/popup/contents-law">
            콘텐츠산업 진흥법에 따른 표시
          </ButtonBox>
        </ButtonContainer>
      </ContextBox>
    </FooterContainer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 5% 5% 60px;

  background-color: ${({ theme }) => theme.color.middleGray};

  display: flex;
  flex-direction: column;
  gap: 1rem;
  * {
    color: #919191;
  }
`;

const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const YLogoBox = styled.div``;

const FLogoBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
`;

const ContextBox = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 11px;
  line-height: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;

  flex-wrap: wrap;
`;

const ButtonBox = styled(Link)`
  padding: 3px 5px;

  background-color: ${({ theme }) => theme.color.middleGray};
  border: 0.5px solid #e6e6e6;
  text-decoration: none;

  font-size: 10px;
  white-space: nowrap;

  &:hover {
    border-color: #616161;
  }
`;

// export {FooterContainer, FooterHeader, FooterHeader, YLogoBox,FLogoBox,ContextBox,
//ButtonContainer,ButtonBox }
