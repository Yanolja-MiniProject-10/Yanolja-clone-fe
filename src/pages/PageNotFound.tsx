import * as style from "../styles/pageNotFound";

const PageNotFound = () => {
  return (
    <style.Wrapper>
      <style.TextWrapper>
        <style.BigText>Page Not Found</style.BigText>
        <p>해당 페이지를 찾을 수 없습니다.</p>
      </style.TextWrapper>
      <style.Button to="/">메인으로 이동하기</style.Button>
    </style.Wrapper>
  );
};

export default PageNotFound;
