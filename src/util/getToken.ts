const getToken = () => {
  const access = localStorage.getItem("accessToken");
  const refresh = localStorage.getItem("refreshToken");

  return { accessToken: access, refreshToken: refresh };
};

export default getToken;
