const getToken = () => {
  const userState = localStorage.getItem("userState");

  if (userState) {
    const userStateValue = JSON.parse(userState);

    const access = userStateValue.userState.accessToken;
    const refresh = userStateValue.userState.refreshToken;

    return { accessToken: access, refreshToken: refresh };
  } else {
    return { accessToken: "", refreshToken: "" };
  }
};

export default getToken;
