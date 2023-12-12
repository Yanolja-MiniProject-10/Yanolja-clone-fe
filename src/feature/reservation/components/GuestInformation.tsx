import { ReservationWrapper } from "../styles/reservationWrapper";
import * as style from "../styles/guestInformation";
import { useEffect, useState } from "react";
import { getUser } from "../../profile/profile.api";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../recoil/userData";
import LoginModal from "../../../components/loginModal/LoginModal";

const GuestInformation = () => {
  const setUser = useSetRecoilState(userState);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);

  // user 정보 가져오기
  const handleGetUser = async () => {
    try {
      const data = await getUser();

      if (data.status === 200) {
        setName(data.data.data.name);
        setEmail(data.data.data.email);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 405 || error.response.status === 401) {
          setUser({
            accessToken: "",
            refreshToken: "",
          });
          setIsLoginModal(true);
        } else {
          console.error(error.response);
        }
      }
    }
  };

  useEffect(() => {
    handleGetUser();

    return () => {
      setName("");
      setEmail("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ReservationWrapper>
        <style.GuestInfoTitle>예약자 정보</style.GuestInfoTitle>

        <style.GuestName>{name}</style.GuestName>
        <span>/</span>
        <style.GuestEmail>{email}</style.GuestEmail>
      </ReservationWrapper>
      {isLoginModal && <LoginModal onClose={() => setIsLoginModal(false)} />}
    </>
  );
};

export default GuestInformation;
