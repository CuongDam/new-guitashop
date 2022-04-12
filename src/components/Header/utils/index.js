
export const defaultLogin = {
  defaultUsername: "cuongdm@rikkeisoft.com",
  defaultPassword: "rikkei123",
};

export const isLogin = () => {
  const User = (JSON.parse(localStorage.getItem("jsonUser"))) ?? {};
  if (
    defaultLogin.defaultUsername === User.email &&
    defaultLogin.defaultPassword === User.password
  ) {
    return true;
  } else return false;
};

