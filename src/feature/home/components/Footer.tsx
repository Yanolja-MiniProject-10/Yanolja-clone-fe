import {
  FooterContainer,
  FooterHeader,
  YLogoBox,
  FLogoBox,
  ContextBox,
  ButtonContainer,
  ButtonBox,
} from "../styles/footer";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <YLogoBox target="_blank" to="https://www.yanolja.com/">
          <img src="footer/yanolja-ico-logo.svg" alt="yanolja-ico-logo" />
        </YLogoBox>
        <FLogoBox target="_blank" to="https://github.com/Yanolja-MiniProject-10/KDT_Y_FE_Mini-Project#readme">
          <span>1등하고10조 </span>&nbsp;
          <FaGithub />
        </FLogoBox>
      </FooterHeader>
      <ButtonContainer>
        <ButtonBox target="_blank" to="https://github.com/Yanolja-MiniProject-10/KDT_Y_FE_Mini-Project#readme">
          회사소개
        </ButtonBox>

        <ButtonBox
          target="_blank"
          to="https://m.policy.yanolja.com/policy/?t=privacy&d=m"
          style={{ fontWeight: "bold" }}
        >
          개인정보처리방침
        </ButtonBox>
        <ButtonBox target="_blank" to="https://m.policy.yanolja.com/pf/policy/service?t=service&d=m">
          서비스 이용약관
        </ButtonBox>
        <ButtonBox target="_blank" to="https://m.policy.yanolja.com/policy/?t=location&d=m">
          위치정보이용약관
        </ButtonBox>
      </ButtonContainer>

      <ContextBox>
        <p>
          (주) 1등하고10조 | FE : 신현진, 남현준, 박은영, 이연수, 최지훈 | BE : 김동준, 김종훈, 노재혁 | 서울특별시
          강남구 강남대로 364 미왕빌딩 10, 11층
        </p>

        <p>
          (주)1등하고10조는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와
          책임은 각 판매자에게 있습니다.
        </p>

        <p>
          (주)1등하고10조가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트 정보, 디자인 및 화면의 구성, UI를
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
