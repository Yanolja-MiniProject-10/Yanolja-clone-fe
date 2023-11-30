const getToken = () => {
  const userStateValue = localStorage.getItem("userState");

  if (userStateValue) {
    const userState = JSON.parse(userStateValue);

    const access = userState.accessToken;
    const refresh = userState.refreshToken;

    return { accessToken: access, refreshToken: refresh };
  }
  return { accessToken: "", refreshToken: "" };
};

export default getToken;
