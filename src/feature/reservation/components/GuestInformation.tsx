import { ReservationWrapper } from "../styles/reservationWrapper";
import * as style from "../styles/guestInformation";
import { useEffect, useState } from "react";
import { getUser } from "../../profile/profile.api";

const GuestInformation = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // user 정보 가져오기
  const handleGetUser = async () => {
    try {
      const data = await getUser();

      if (data.status === 200) {
        setName(data.data.data.name);
        setEmail(data.data.data.email);
      }
    } catch (error) {
      console.error("유저 정보 조회 실패:", error);
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
    <ReservationWrapper>
      <style.GuestInfoTitle>예약자 정보</style.GuestInfoTitle>

      <style.GuestName>{name}</style.GuestName>
      <span>/</span>
      <style.GuestEmail>{email}</style.GuestEmail>
    </ReservationWrapper>
  );
};

export default GuestInformation;
