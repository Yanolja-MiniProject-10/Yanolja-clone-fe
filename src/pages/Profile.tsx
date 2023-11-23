import { useNavigate } from "react-router-dom";
import { Div, MyProfile, Name, Email, Button, Hr, List } from "../feature/profile/styles/profile";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <MyProfile>
        <div>
          <Name>야놀자님</Name>
          <Email>yanolja@yanolja.com</Email>
        </div>
        <Button>로그아웃</Button>
      </MyProfile>

      <p>프로필</p>
      <Hr />
      <List>
        <div>내 정보 수정하기</div>
        <div onClick={() => navigate("/")}>예약 내역</div>
        <div onClick={() => navigate("/cart")}>장바구니</div>
        <div>찜 목록</div>
      </List>
    </Div>
  );
};

export default Profile;
