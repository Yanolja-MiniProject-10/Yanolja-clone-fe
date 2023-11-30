const getToken = () => {
  const localStorageValue = localStorage.getItem("recoil-persist");

  if (localStorageValue) {
    const userStateValue = JSON.parse(localStorageValue);
    const access = userStateValue.userState.accessToken;
    const refresh = userStateValue.userState.refreshToken;

    return { accessToken: access, refreshToken: refresh };
  } else {
    return { accessToken: "", refreshToken: "" };
  }
};

export default getToken;
